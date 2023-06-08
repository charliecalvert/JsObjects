var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 'use strict';
  res.send('respond with a resource');
});

module.exports = router;
