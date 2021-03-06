from flask_restful import Resource, reqparse

from env.sol import env

import pymongo
from bson.json_util import dumps
from bson.objectid import ObjectId
import json
import copy
import time
from flask import jsonify, request
import datetime

# Initialize mongo connection one time
CLIENT = pymongo.MongoClient(
    f"mongodb://{env['mongodb_ops_ip']}:{env['mongodb_ops_port']}/")
DB = CLIENT[env['database']]


def windDirection(deg):
    deg = float(deg)
    direction = 'N'

    if deg >= 349 and deg <= 11:
        direction = 'N'
    elif deg >= 12 and deg <= 33:
        direction = 'NNE'
    elif deg >= 34 and deg <= 56:
        direction = 'NE'
    elif deg >= 57 and deg <= 78:
        direction = 'ENE'
    elif deg >= 79 and deg <= 101:
        direction = 'E'
    elif deg >= 102 and deg <= 123:
        direction = 'ESE'
    elif deg >= 124 and deg <= 146:
        direction = 'SE'
    elif deg >= 147 and deg <= 168:
        direction = 'SSE'
    elif deg >= 169 and deg <= 191:
        direction = 'S'
    elif deg >= 192 and deg <= 213:
        direction = 'SSW'
    elif deg >= 214 and deg <= 236:
        direction = 'SW'
    elif deg >= 237 and deg <= 258:
        direction = 'WSW'
    elif deg >= 259 and deg <= 281:
        direction = 'W'
    elif deg >= 282 and deg <= 303:
        direction = 'WNW'
    elif deg >= 304 and deg <= 326:
        direction = 'NW'
    elif deg >= 327 and deg <= 348:
        direction = 'NNW'

    return(direction)


def windKnots(speed):
    knots = float(speed) * 1.943844
    knots = round(knots, 2)

    return(knots)


def windKmh(speed):
    kmh = float(speed) * 3.6
    kmh = round(kmh, 2)

    return(kmh)

def avg(speeds):

    average = sum(speeds) / len(speeds)
    average = round(average, 2)
    return(average)


def windHour(name):

    current_hour = int(time.strftime('%Y%m%d%H'))
    max_hour = 0

    wind_minute = DB['wind_history'].find_one({'name': name})

    try:
        hours = wind_minute['hour']
    except:
        hours = []

    # I ROFLed over this one
    if len(hours) >= 1:
        for hour in hours:
            if hour['hour'] > max_hour:
                max_hour = hour['hour']

    eight_hours = time.time() + 28800
    formatted_time = time.strftime(
        '%d/%m/%Y %H00', time.localtime(eight_hours))

    if current_hour > max_hour:

        speeds = [float(minute['ms']) for minute in wind_minute['minute']]
        maximum = max(speeds)
        minimum = min(speeds)
        average = sum(speeds) / len(speeds)
        average = round(average, 2)

        max_kmh = windKmh(maximum)
        max_knots = windKnots(maximum)

        min_kmh = windKmh(minimum)
        min_knots = windKnots(minimum)

        avg_kmh = windKmh(average)
        avg_knots = windKnots(average)

        DB['wind_history'].update(
            {
                'name': name,
            },
            {
                '$push': {
                    'hour': {
                        'utc': datetime.datetime.utcnow(),
                        'unix': time.time(),
                        'time': formatted_time,
                        'hour': current_hour,
                        'ms': {
                            'max': maximum,
                            'min': minimum,
                            'avg': average
                        },
                        'knots': {
                            'max': max_knots,
                            'min': min_knots,
                            'avg': avg_knots
                        },
                        'kmh': {
                            'max': max_kmh,
                            'min': min_kmh,
                            'avg': avg_kmh
                        },
                    },
                },
            },
            upsert=True
        )


class wind_collect(Resource):

    def get(self, name):
        # Initilize request parser
        parser = reqparse.RequestParser()

        # Parse arguments from form data
        parser.add_argument("mac")
        parser.add_argument("name")
        parser.add_argument("directionV")
        parser.add_argument("speedV")
        args = parser.parse_args()

        direction = windDirection(args['directionV'])
        knots = windKnots(args['speedV'])
        kmh = windKmh(args['speedV'])

        eight_hours = time.time() + 28800
        formatted_time = time.strftime(
            '%d/%m/%Y %X', time.localtime(eight_hours))

        DB['wind_live'].find_one_and_update(
            {
                'name': args['name']
            },
            {
                '$set': {
                    'mac': args['mac'],
                    'ip': request.remote_addr,
                    'name': args['name'],
                    'degrees': args['directionV'],
                    'direction': direction,
                    'ms': args['speedV'],
                    'knots': knots,
                    'kmh': kmh,
                }
            },
            upsert=True
        )

        DB['wind_history'].update(
            {
                'name': args['name'],
            },
            {
                '$push': {
                    'minute': {
                        'utc': datetime.datetime.utcnow(),
                        'unix': time.time(),
                        'time': formatted_time,
                        'degrees': args['directionV'],
                        'direction': direction,
                        'ms': args['speedV'],
                        'knots': knots,
                        'kmh': kmh,
                    },
                },
            },
            upsert=True
        )

        DB['wind_history'].update(
            {
                'name': args['name'],
            },
            {
                '$pull': {
                    'minute': {
                        'unix': {
                            '$lte': time.time() - 3600  # 1 hour
                        },
                    },
                    'hours': {
                        'unix': {
                            '$lte': time.time() - 172800  # 48 hours
                        }
                    }
                }
            },
        )

        windHour(args['name'])


class wind_all(Resource):

    def get(self):
        module_ids = {}
        new_winds = []

        modules = DB['wind_modules'].find()
        winds = DB['wind_live'].find().sort("name", pymongo.ASCENDING)

        for module in modules:
            module_ids[module['_id']] = module

        for wind in winds:
            module_info = module_ids[wind['module_uid']]
            wind['tag'] = module_info['tag']
            wind['name'] = module_info['name']
            wind['description'] = module_info['description']
            wind['units'] = module_info['units']
            wind['type'] = module_info['type']
            new_winds.append(wind)

        return(jsonify(json.loads(dumps(new_winds))))

class wind_minute(Resource):

    def get(self, uid):

        module = DB['wind_modules'].find_one(
            {
                '_id' : ObjectId(uid),
            }
        ) 

        history = DB['wind_history'].find(
            {
                'module_uid' : ObjectId(uid),
                'range' : 'minute'
            }
        ) 

        data = {
            'module_uid' : ObjectId(uid),
            'range' : 'minute',
            'name' : module['name'],
            'time' : [],
            'kmh' : {
                'speed' : []
            },
            'ms' : {
                'speed' : []
            },
            'knots' : {
                'speed' : []
            },
        }

        for datapoint in history:
            data['time'].append(datapoint['time'])
            data['kmh']['speed'].append(datapoint['kmh'])
            data['ms']['speed'].append(datapoint['ms'])
            data['knots']['speed'].append(datapoint['knots'])

        return(jsonify(json.loads(dumps(data))))



class wind_hour(Resource):

    def get(self, uid):

        module = DB['wind_modules'].find_one(
            {
                '_id' : ObjectId(uid),
            }
        ) 
        
        history = DB['wind_history'].find(
            {
                'module_uid' : ObjectId(uid),
                'range' : 'hour'
            }
        ) 

        data = {
            'module_uid' : ObjectId(uid),
            'range' : 'hour',
            'name' : module['name'],
            'time' : [],
            'kmh' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'ms' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'knots' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
        }

        for datapoint in history:
            data['time'].append(datapoint['time'])

            data['kmh']['max'].append(datapoint['kmh_max'])
            data['kmh']['avg'].append(datapoint['kmh_avg'])
            data['kmh']['min'].append(datapoint['kmh_min'])

            data['ms']['max'].append(datapoint['ms_max'])
            data['ms']['avg'].append(datapoint['ms_avg'])
            data['ms']['min'].append(datapoint['ms_min'])

            data['knots']['max'].append(datapoint['knots_max'])
            data['knots']['avg'].append(datapoint['knots_avg'])
            data['knots']['min'].append(datapoint['knots_min'])

        return(jsonify(json.loads(dumps(data))))


class wind_day(Resource):

    def get(self, uid):

        module = DB['wind_modules'].find_one(
            {
                '_id' : ObjectId(uid),
            }
        ) 
        
        history = DB['wind_history'].find(
            {
                'module_uid' : ObjectId(uid),
                'range' : 'day'
            }
        ) 

        data = {
            'module_uid' : ObjectId(uid),
            'range' : 'day',
            'name' : module['name'],
            'time' : [],
            'kmh' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'ms' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'knots' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
        }

        for datapoint in history:
            data['time'].append(datapoint['time'])

            data['kmh']['max'].append(datapoint['kmh_max'])
            data['kmh']['avg'].append(datapoint['kmh_avg'])
            data['kmh']['min'].append(datapoint['kmh_min'])

            data['ms']['max'].append(datapoint['ms_max'])
            data['ms']['avg'].append(datapoint['ms_avg'])
            data['ms']['min'].append(datapoint['ms_min'])

            data['knots']['max'].append(datapoint['knots_max'])
            data['knots']['avg'].append(datapoint['knots_avg'])
            data['knots']['min'].append(datapoint['knots_min'])

        return(jsonify(json.loads(dumps(data))))


class wind_month(Resource):

    def get(self, uid):

        module = DB['wind_modules'].find_one(
            {
                '_id' : ObjectId(uid),
            }
        ) 
        
        history = DB['wind_history'].find(
            {
                'module_uid' : ObjectId(uid),
                'range' : 'month'
            }
        ) 

        data = {
            'module_uid' : ObjectId(uid),
            'range' : 'month',
            'name' : module['name'],
            'time' : [],
            'kmh' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'ms' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
            'knots' : {
                'max' : [],
                'avg' : [],
                'min' : [],
            },
        }

        for datapoint in history:
            data['time'].append(datapoint['time'])

            data['kmh']['max'].append(datapoint['kmh_max'])
            data['kmh']['avg'].append(datapoint['kmh_avg'])
            data['kmh']['min'].append(datapoint['kmh_min'])

            data['ms']['max'].append(datapoint['ms_max'])
            data['ms']['avg'].append(datapoint['ms_avg'])
            data['ms']['min'].append(datapoint['ms_min'])

            data['knots']['max'].append(datapoint['knots_max'])
            data['knots']['avg'].append(datapoint['knots_avg'])
            data['knots']['min'].append(datapoint['knots_min'])

        return(jsonify(json.loads(dumps(data))))


class wind_info(Resource):

    def get(self, name):

        wind = DB['wind_live'].find_one({'name': name})

        return(jsonify(json.loads(dumps(wind))))
