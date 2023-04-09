var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
    'use strict';
    console.log('UnitTests sent');
    response.render('UnitTests', {
        title: 'Singleton Tests'
    });
});

module.exports = router;
