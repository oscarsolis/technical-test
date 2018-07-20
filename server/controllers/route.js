const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');
const Vehicle = mongoose.model('Vehicle');
const Route = mongoose.model('Route');
const {
	respond,
	registerLog
} = require('../utils');

/**
 *
 */
exports.assignRoute = async (req, res, next) => {
	try {
		let data = req.body;
		let driverId = data.driver;
		let vehicleId = data.vehicle;
		let startTime = data.startTime;
		let endTime = data.endTime;
		let timeQuery = {
			'$or': [
				{
					'startTime': {
		        '$gte': startTime,
		        //'$lte': endTime
		     	}
		    },
		    {
		    	'endTime': {
     				'$gte': startTime,
		        //'$lte': endTime
     			}
		    }
     	],
     	'status': 'active'
		}
		let routes = await Route.find(Object.assign(timeQuery, { 'vehicle': vehicleId }));
		console.log(routes, Object.assign(timeQuery, { 'vehicle': vehicleId }), startTime,endTime);
		if(routes.length !== 0) {
			respond(res, { 'message': 'Este vehículo ya tiene un ruta en este rango de fechas' }, 422);
			return;
		}
		routes = await Route.find(Object.assign(timeQuery, { 'driver': driverId }));
		if(routes.length !== 0) {
			respond(res, { 'message': 'Este conductor ya tiene un ruta en este rango de fechas' }, 422);
			return;
		}
		let route = new Route(data);
		let newRoute = await route.save();
		await registerLog(req,'CREATE','Route');
		respond(res, { 'success': true });
	} catch(error) {
		console.log(error);
		respond(res, error, 500);
	}
};

/**
 *
 */
exports.index = async (req, res, next) => {
	try {
		let routes = await Route.listActives();
		respond(res , routes);
	} catch(error) {
		console.log(error);
		respond(res, error, 500);
	}
}

/**
 *
 */
exports.unassignRoute = async (req, res, next) => {
	try {
		let routeId = req.body.routeId;
    let driver = await Driver.findOneAndUpdate({
					            	'_id': routeId
							        }, {
							          '$set': { 'status': 'inactive' }
							        }, {
							          'new': true
							        });
    await registerLog(req,'DELETE','Route');
    respond(res, driver);
	} catch(error) {
		// statements
		console.log(error);
		respond(res, error, 500);
	}
}
