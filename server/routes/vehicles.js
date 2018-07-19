const express = require('express');
const router = express.Router();
const passport = require('passport');
const vehicleController = require('../controllers/vehicle');
const passportAuth = passport.authenticate('jwt', { session: false });

router
  .get('/', passportAuth, vehicleController.index)
  .get('/:vehicleId', passportAuth, vehicleController.findOne)
  .post('/', passportAuth, vehicleController.new)
  .put('/:vehicleId', passportAuth, vehicleController.update)
  .delete('/:vehicleId', passportAuth, vehicleController.delete)

module.exports = router;
