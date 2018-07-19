const mongoose = require('mongoose');
const Log = mongoose.model('Log');
const jwt = require('jsonwebtoken');

/**
 * Convierte un texto a formato camelcase
 * @param { String } texto a convertir
 */
const camelCase = text =>{
    text = text.toLowerCase();
    return text.replace(/\b\w/g, (m) => m.toUpperCase());
}

/**
 *
 * @param {*} res
 * @param { Object } json
 * @param { int } status
 */
const respond = (res, json, status) => {
  res.format({
    json: () => {
      let code = status || 200;
      res.status(code).json(json);
    }
  });
}

/**
 *
 */
const registerLog = (req, action, nameCollection )=> {
	return new Promise((resolve, reject) => {
		let token = req.headers.authorization;
		token = token.replace('Bearer ','');
		let id = jwt.decode(token)._id;
		let data = {
			'user': id,
			'ip': getClientIp(req),
			action,
			nameCollection
		};
		let log = new Log(data);
		log
			.save()
			.then(result=> resolve())
			.catch(err => reject(err));
  });
}


const getClientIp = req => {
  let ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	if (!ipAddress) {
    return '';
  }
	// convert from "::ffff:192.0.0.1"  to "192.0.0.1"
  if (ipAddress.substr(0, 7) == "::ffff:") {
    ipAddress = ipAddress.substr(7)
  }
	return ipAddress;
}

module.exports = {
    respond,
    camelCase,
    registerLog
}
