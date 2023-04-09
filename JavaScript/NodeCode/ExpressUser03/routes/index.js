var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Elvenware at BC'
    });
});

router.get('/about', function(request, response) {
   response.render('about');
});

router.get('/links', function(request, response) {
    response.render('about');
});

module.exports = router;
