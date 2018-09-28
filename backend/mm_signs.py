#! /usr/bin/python3.6

import requests
from xml.etree import ElementTree
import copy
import time
import json
from pyModbusTCP.client import ModbusClient

'''
Mine systems status board backend status polling script thing
if youAreReadingThis:
    raw_input("How bored are you?")

Reminder to self,
Dictionaries and keys are UPPERCASE
Strings use double quotes ""
Functions are camelCase

'''

#Adam I/O controller login
user = 'root'
passw = '00000000'

#Linux box .xml location
signs_file = '/home/minesys/Desktop/signs.xml'

#Blank array and DICT
signs = []
SIGN = {}


def getIPs (xmlfile):
    # Parse the .xml
    tree = ElementTree.parse(xmlfile)
    # Get root of the xml
    root = tree.getroot()
    # Extract location and ip
    for child in root:
        SIGN['LOCATION'] = child[1].text
        SIGN['IP'] = child[3].text
        # Determine if 'C' Alert, Trailer or Sign
        alert = SIGN['LOCATION'].split('-')
        if len(alert) == 2:
            if alert[1] == ' C Alert':
                SIGN['SETUP'] = 'C Alert'
                SIGN['CALERT'] = True
                SIGN['SIGN'] = False
                SIGN['TRAILER'] = False
            elif alert[0][:3] == 'TR0':
                SIGN['SETUP'] = 'Trailer'
                SIGN['CALERT'] = False
                SIGN['SIGN'] = False
                SIGN['TRAILER'] = True
            else:
                SIGN['SETUP'] = 'sign'
                SIGN['CALERT'] = False
                SIGN['SIGN'] = True
                SIGN['TRAILER'] = False
        else:
            SIGN['SETUP'] = 'Sign'
            SIGN['CALERT'] = False
            SIGN['SIGN'] = True
            SIGN['TRAILER'] = False


        # Duplicate the dictionary
        my_copy = copy.deepcopy(SIGN)
        # Append to list
        signs.append(my_copy)



def getType (ip):
    DO_XML = 'http://{}/digitaloutput/all/value'.format(ip)
    with requests.Session() as session:
        try:
            response = session.get(DO_XML, auth=(user, passw), timeout=1)
            status = response.status_code
            if response.status_code == 200:
                sign_type = 'REST API'
            elif response.status_code == 404:
                sign_type = 'MODBUS'
        except:
            status = 'TIMEOUT'
            sign_type = 'OFFLINE'
    return(status, sign_type)


def restAPI(ip):
    DO_XML = 'http://{}/digitaloutput/all/value'.format(ip)
    with requests.Session() as session:
        try:
            response = session.get(DO_XML, auth=(user, passw), timeout=1)
            status = response.status_code
            tree = ElementTree.fromstring(response.content)
            all_clear = tree[0][1].text
            emergency = tree[1][1].text
            lightning = tree[2][1].text
            a = tree[3][1].text
            b = tree[4][1].text
            c = tree[5][1].text
        except:
            status = 'TIMEOUT'
            all_clear = ''
            emergency = ''
            lightning = ''
            a = ''
            b = ''
            c = ''
    outputs = [all_clear, emergency, lightning, a, b, c]
    return(status, outputs)


def modbus(ip):
    outputs = []
    c = ModbusClient(host=ip, port=502, auto_open=True)
    bits = c.read_coils(16, 6)
    if bits:
        status = 'OK'
        for bit in bits:
            if bit == True:
                outputs.append(1)
            elif bit == False:
                outputs.append(0)
    else:
        status = 'TIMEOUT'
        outputs = ['','','','','','']
    return(status, outputs)


def saveJSON(signs):
    signs_json = json.dumps(signs)
    with open('/usr/share/nginx/html/assets/json/signs.json', 'w') as f:
        f.write(signs_json)
        f.close()



if __name__ == '__main__':
    while True:
        # Reset the dictionary and list
        signs = []
        SIGN = {}

        # Append dictionary of name and IP to signs list
        getIPs(signs_file)

        # Determine if to use RESTful API or MODBUS and append to signs lits
        for sign in signs:
            # Get status and type
            sign_type = getType(sign['IP'])
            sign['TYPE'] = sign_type[1]
            sign['STATUS'] = sign_type[0]
            # Get output states
            if sign_type[1] == 'OFFLINE':
                sign['STATUS'] = 'TIMEOUT'
                sign['ALL_CLEAR'] = ''
                sign['EMERGENCY'] = ''
                sign['LIGHTNING'] = ''
                sign['A'] = ''
                sign['B'] = ''
                sign['C'] = ''
            else:
                if sign_type[1] == 'REST API':
                    outputs = restAPI(sign['IP'])
                elif sign_type[1] == 'MODBUS':
                    outputs = modbus(sign['IP'])
                sign['STATUS'] = outputs[0]
                sign['ALL_CLEAR'] = outputs[1][0]
                sign['EMERGENCY'] = outputs[1][1]
                sign['LIGHTNING'] = outputs[1][2]
                sign['A'] = outputs[1][3]
                sign['B'] = outputs[1][4]
                sign['C'] = outputs[1][5]

            print('{}'.format(sign['LOCATION']))
            print('--{}'.format(sign['IP']))
            print('--{}'.format(sign['SETUP']))
            print('--{}'.format(sign['STATUS']))
            print('--{}'.format(sign['TYPE']))
            print('---------------')
        
        # Convert to json and save to file
        saveJSON(signs)

        print('Sleeping for 30 sec...')
        time.sleep(30)