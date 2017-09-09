var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'React Es6 Browser and Babel' });
});

module.exports = router;
