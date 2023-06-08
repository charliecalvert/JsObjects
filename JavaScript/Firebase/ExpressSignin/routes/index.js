var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'ExpressSignin' });
});

module.exports = router;
