var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {title: 'Node Route Basics Calvert'});
});

router.get('/getFeetInMile', function(request, response) {
    response.send({result: 5280});
});

module.exports = router;
