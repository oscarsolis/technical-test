const express = require('express');
const router = express.Router();
const passport = require('passport');
const logController = require('../controllers/log');

router
  .get('/', logController.index)

module.exports = router;
