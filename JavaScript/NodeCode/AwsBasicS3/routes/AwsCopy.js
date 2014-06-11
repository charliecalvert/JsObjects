var express = require('express');
var router = express.Router();

/* GET AwsCopy listing. */
router.get('/', function(req, res) {
	'use strict';
	res.render('AwsCopy', {
		title : 'AwsBasicS3'
	});
});

module.exports = router;
