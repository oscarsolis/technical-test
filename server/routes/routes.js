const express = require('express');
const router = express.Router();
const passport = require('passport');
const routeController = require('../controllers/route');

router
  .post('/assign', routeController.assignRoute)
  .post('/unassign', routeController.unassignRoute)
  .get('/', routeController.index);

module.exports = router;
