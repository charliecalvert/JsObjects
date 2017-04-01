/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
    'use strict';
    response.render('index', { title: 'Elvenware' });
});

module.exports = router;
