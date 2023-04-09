/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
    'use strict';
    response.render('index', { note: 'The Real Title is in source/App.js' });
});

router.get('/getNine', function(request, response) {
    response.send({ result: '9' });
});

module.exports = router;
