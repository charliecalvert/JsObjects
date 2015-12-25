var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	'use strict';
	res.render('page02', { title: 'Page02' });
});

module.exports = router;
