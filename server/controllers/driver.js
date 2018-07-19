const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');
const {
	respond,
	registerLog
} = require('../utils');

/**
 *
 */
exports.index = async(req, res, next) => {
  try {
    let drivers = await Driver.listNotDeleted();
    respond(res, drivers);
  } catch (error) {
    respond(res, error, 500);
  }
};


/**
 *
 */
exports.findOne = async(req, res, next) => {
  try {
    let driver = await Driver.findById(req.params.driverId);
    (!driver)
     	? respond(res, { 'message': 'not found driver' }, 404)
     	: respond(res, driver);
  } catch (error) {
  	respond(res, error, 500);
  }
};


/**
 *
 */
exports.new = (req, res, next) => {
  let driverData = req.body;
  let driver = new Driver(driverData);
  let error = driver.validateSync();
  if (error) {
    respond(res, error, 422);
  } else {
    driver
    	.save()
    	.then(driver => registerLog(req,'CREATE','Driver'))
      .then(result => respond(res, { success: true }, 200))
      .catch(err => respond(res, err.toJSON(), err.code ? 500 : 422));
  }
};

/**
 *
 */
exports.update = async(req, res, next) => {
  try {
    let data = req.body;
    let driver = await Driver.findOneAndUpdate({
					            	'_id': req.params.driverId
							        }, {
							          '$set': data
							        }, {
							          'new': true
							        });
    await registerLog(req,'UPDATE','Driver');
    (driver)
    	? respond(res, driver)
    	: respond(res, { message: 'not found driver' }, 404);
  } catch (error) {
      respond(res, err.toJSON(), err.code ? 500 : 422);
  }
};

/**
 *
 */
exports.delete = async(req, res, next) => {
  try {
    let driver = await Driver.findOne({ '_id': req.params.driverId });
    if (driver) {
      let driverDeleted = await driver.delete(req.params.driverId);
      await registerLog(req,'DELETE','Driver');
      (driverDeleted)
      	? respond(res, driverDeleted)
      	: respond(res, { 'message': 'not found driver' }, 404);
    } else {
      respond(res, { 'message': 'not found driver' }, 404);
    }
  } catch (error) {
    respond(res, error, 500);
  }
};
