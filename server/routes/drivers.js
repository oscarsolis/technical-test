const express = require('express');
const router = express.Router();
const passport = require('passport');
const driverController = require('../controllers/driver');
const passportAuth = passport.authenticate('jwt', { session: false });

router
  .get('/', passportAuth, driverController.index)
  .get('/:driverId', passportAuth, driverController.findOne)
  .post('/', passportAuth, driverController.new)
  .put('/:driverId', passportAuth, driverController.update)
  .delete('/:driverId', passportAuth, driverController.delete)

module.exports = router;
