#! /usr/bin/python3.7

from env.sol import env

from flask import Flask, jsonify, send_file, Response, make_response
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

import pymongo
from bson.json_util import dumps
from bson.objectid import ObjectId
import json
import copy
import jwt
import datetime

from routes.wind import wind_collect, wind_all, wind_minute, wind_hour, wind_info
from routes.alerts import alert_all, alert_display, alert_detail, alert_overview, alert_modules, alert_zones, alert_zones_create, \
    alert_zones_update, alert_zones_delete, alert_zones_list, alert_types, alert_status, alert_create, alert_update, alert_delete
from routes.auth import auth



""" Rest API for alerts
Retrieves data from mongo 
Serves as http json
"""

# Initialize flask
app = Flask(__name__)
API = Api(app)
CORS(app)

# Initialize mongo connection one time
CLIENT = pymongo.MongoClient('mongodb://{}:{}/'.format(env['mongodb_ip'], env['mongodb_port']))
DB = CLIENT[env['database']]


class check(Resource):
    def get(self):

        response = {'online': True}

        # Return response
        return(jsonify(json.loads(dumps(response))))


# Map URL's to resource classes
API.add_resource(alert_all, "/api/alerts/all")
API.add_resource(alert_display, "/api/alerts/display")
API.add_resource(alert_modules, "/api/alerts/modules")
API.add_resource(alert_overview, "/api/alerts/overview")
API.add_resource(alert_zones, "/api/alerts/zones")
API.add_resource(alert_zones_list, "/api/alerts/zones/list")
API.add_resource(alert_zones_create, "/api/alerts/zones/create")
API.add_resource(alert_zones_update, "/api/alerts/zones/update")
API.add_resource(alert_zones_delete, "/api/alerts/zones/delete")
#API.add_resource(alert_locations, "/api/alerts/locations")
API.add_resource(alert_types, "/api/alerts/types")
API.add_resource(alert_status, "/api/alerts/status")
API.add_resource(alert_create, "/api/alerts/create")
API.add_resource(alert_update, "/api/alerts/update")
API.add_resource(alert_delete, "/api/alerts/delete/<string:name>")
API.add_resource(alert_detail, "/api/alerts/<string:uid>")
API.add_resource(check, "/api/check")
API.add_resource(auth, "/api/auth")

# Wind
API.add_resource(wind_collect, '/api/wind/<string:name>')
API.add_resource(wind_all, '/api/wind/all')
API.add_resource(wind_minute, '/api/wind/minute/<string:name>/<string:units>')
API.add_resource(wind_hour, '/api/wind/hour/<string:name>/<string:units>')
API.add_resource(wind_info, '/api/wind/info/<string:name>')

if __name__ == "__main__":
    # Run flask
    app.run(debug=True, host='0.0.0.0', port=5000)
