const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');
const {
	respond,
	registerLog
} = require('../utils');

/**
 *
 */
exports.index = async(req, res, next) => {
  try {
    let vehicles = await Vehicle.listNotDeleted();
    respond(res, vehicles);
  } catch (error) {
    respond(res, error, 500);
  }
};


/**
 *
 */
exports.findOne = async(req, res, next) => {
  try {
   	let vehicle = await Vehicle.findById(req.params.vehicleId);
    (!vehicle)
    	? respond(res, { 'message': 'not found vehicle' }, 404)
    	: respond(res, vehicle);
  } catch (error) {
    respond(res, error, 500);
  }
};


/**
 *
 */
exports.new = (req, res, next) => {
  let vehicleData = req.body;
  let vehicle = new Vehicle(vehicleData);
  let error = vehicle.validateSync();
  if (error) {
    respond(res, error, 422);
  } else {
    vehicle
      .save()
      .then(vehicle => registerLog(req,'CREATE','Vehicle'))
      .then(result => respond(res, { success: true}, 200))
      .catch(err => respond(res, err.toJSON(), err.code ? 500 : 422));
  }
};

/**
 *
 */
exports.update = async(req, res, next) => {
  try {
    let data = req.body;
    let vehicle = await Vehicle.findOneAndUpdate({
					          '_id': req.params.vehicleId
					        }, {
					          '$set': data
					        }, {
					          'new': true
					        });
    await registerLog(req,'UPDATE','Vehicle');
    (vehicle)
    	? respond(res, vehicle)
    	: respond(res, { message: 'not found vehicle' }, 404);
  } catch (error) {
      respond(res, err.toJSON(), err.code ? 500 : 422);
  }
};

/**
 *
 */
exports.delete = async(req, res, next) => {
  try {
    let vehicle = await Vehicle.findOne({ '_id': req.params.vehicleId });
		if (vehicle) {
	    let vehicleDeleted = await vehicle.delete(req.params.vehicleId);
	    await registerLog(req,'UPDATE','Vehicle');
	    (vehicleDeleted)
	    	? respond(res, vehicleDeleted)
	    	: respond(res, { 'message': 'not found vehicle' }, 404);
	  } else {
	    respond(res, { 'message': 'not found vehicle' }, 404);
	  }
  } catch (error) {
    respond(res, error, 500);
  }
};
