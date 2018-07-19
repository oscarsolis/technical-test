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
	} catch(e) {
		// statements
		console.log(e);
	}
};
