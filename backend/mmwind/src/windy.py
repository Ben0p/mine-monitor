from env.sol import env

import pymssql
import json
import datetime
import time
import pymongo
from bson import ObjectId

from history import minute, hour, day, month



# Initialize mongo
CLIENT = pymongo.MongoClient(
    f"mongodb://{env['mongodb_ip']}:{env['mongodb_port']}")
DB = CLIENT[env['database']]


def pollSQL():
    ''' Performs SQL query and returns rows
    '''
    
    try:
        # Initialize SQL connection
        cnxn = pymssql.connect(
            server=env['pcs_sql_server'],
            user=f"{env['pcs_sql_domain']}\\{env['pcs_sql_username']}",
            password=env['pcs_sql_password']
        )
        cursor = cnxn.cursor()
    except:
        return(False)

    if cursor:
        # SQL Query
        cursor.execute("SELECT top 1 \
            [Timestamp], \
            [Subscriber], \
            [Data] \
            FROM [SOLOPFReports].[PCS].[DataPublish] \
            where Subscriber = 'solmm01' \
            order by Timestamp desc")
        rows = cursor.fetchall()
        return(rows)
    else:
        return(False)


def processData(rows):
    ''' Processes data in each row returned by the SQL query
        Returns processed dictionary array
    '''
    # Iterate rows (should only be one anyway)
    for row in rows:

        # Get time object and format it
        timestamp = row[0]
        time_string = timestamp.strftime('%d/%m/%Y %H:%M:%S')
        print("-"*32)
        print(f"Time Stamp: {time_string}")
        print("-"*32)

        # Load json data
        data = json.loads(row[2])

        # Reset results
        results = {}

        # Iterate over aneometers in json (dictionary) object
        for key, value in data.items():

            module = DB['wind_modules'].find_one(
                {
                    'tag': key,
                }
            )

            if module:

                # Create module dictionary in the results dictionary
                # Also resets it for next module iteration
                module_uid = str(module['_id'])
                results[module_uid] = {}
                results[module_uid]['datapoints'] = []

                # Check speed units
                if module['units'] == 'ms':
                    # Speed unit conversions
                    ms = float(value[-1]['V'])
                    kmh = ms * 3.6
                    kmh = round(kmh, 2)
                    knots = ms * 1.944
                    knots = round(knots, 2)

                # Print out the name
                print(f"{module['name']}:")
                # Iterate datapoints in the value
                for datapoint in value:
                    try:
                        # If there is milliseconds
                        datapoint_time = datetime.datetime.strptime(
                            datapoint['T'], '%Y-%m-%dT%H:%M:%S.%f')
                    except ValueError:
                        # If there is no milliseconds
                        datapoint_time = datetime.datetime.strptime(
                            datapoint['T'], '%Y-%m-%dT%H:%M:%S')

                    # Add time offset and format to readable string
                    datapoint_time = datapoint_time + \
                        datetime.timedelta(hours=env['time_offset'])
                    datapoint_time_string = datapoint_time.strftime(
                        '%d/%m/%Y %H:%M:%S')

                    # Process the speed status
                    if kmh <= 20:
                        speed = 'slow'
                        status = 'success'
                    elif 20 < kmh <= 40:
                        speed = 'medium'
                        status = 'warning'
                    elif 40 < kmh:
                        speed = 'fast'
                        status = 'danger'

                    # Offline if time stamp is older than 30sec
                    if datapoint_time < datetime.datetime.fromtimestamp(time.time() - 30):
                        online = False
                        speed = 'stop'
                        status = 'primary'
                    else:
                        online = True

                    # Print the result
                    print(f"    {datapoint_time} - {datapoint['V']} m/s")

                    # Construct dictionary of values
                    anemometer = {
                        'timestamp': datapoint_time,
                        'time': datapoint_time_string,
                        'ms': ms,
                        'kmh': kmh,
                        'knots': knots,
                        'online': online,
                        'speed': speed,
                        'status': status,
                    }

                    # Append results to dictionary of anemometer uids
                    results[module_uid]['datapoints'].append(anemometer)

    return(results)


def getLatest(anemometers):
    ''' Takes list of processed anemometer data
        Returns most recent data point for each anemometer
    '''

    latest = []

    # Get uid and data
    for key, value in anemometers.items():
        # Get last item in datapoints list
        # (always in order from SQL)
        latest_data = value['datapoints'][-1]
        latest_data['module_uid'] = ObjectId(key)

        # Append to latest list
        latest.append(latest_data)

    return(latest)


def insertLive(anemometers):
    ''' Takes array of anemometer dictionaries
        Inserts each anemometer dictionary into MongoDB collection
    '''
    
    for anemometer in anemometers:
        # Insert into mongo DB
        DB['wind_live'].find_one_and_update(
            {
                'module_uid': anemometer['module_uid'],
            },
            {
                '$set': {
                    'module_uid' : anemometer['module_uid'],
                    'timestamp' : anemometer['timestamp'],
                    'time' : anemometer['time'],
                    'ms' : anemometer['ms'],
                    'kmh' : anemometer['kmh'],
                    'knots' : anemometer['knots'],
                    'online' : anemometer['online'],
                    'speed' : anemometer['speed'],
                    'status' : anemometer['status']
                }
            },
            upsert=True
        )


def run():
    ''' Main run loop
    '''
    while True:
        # Get data from SQL
        rows = pollSQL()

        if rows:
            # Process data
            anemometers = processData(rows)
            # Get most recent time stamp
            latest = getLatest(anemometers)
            # Insert live data
            insertLive(latest)
            # Process current minute
            minute.process(DB, anemometers)


        '''
        # Process historical data
        for module_uid in module_uids:
            # Process last hour
            hour.process(DB, module_uid)
            # Process last day
            day.process(DB, module_uid)
            # Process last month
            month.process(DB, module_uid)

        truncate_data(604800)
        '''

        time.sleep(5)



if __name__ == "__main__":

    run()