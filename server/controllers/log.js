const mongoose = require('mongoose');
const Log = mongoose.model('Log');
const {
	respond,
	registerLog
} = require('../utils');

/**
 *
 */
exports.index = async(req, res, next) => {
	try {
		let logs = await Log.listNotDeleted();
		respond(res, logs);
	} catch (error) {
		respond(res, error, 500);
	}
};
