/*
 * GET users listing.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    'use strict';
    response.send("respond with a resource");
});

module.exports = router;
