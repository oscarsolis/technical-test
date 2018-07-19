const express = require('express');
const router = express.Router();
const passport = require('passport');
const routeController = require('../controllers/route');

router
  .post('/assign-route', routeController.assignRoute)

module.exports = router;
