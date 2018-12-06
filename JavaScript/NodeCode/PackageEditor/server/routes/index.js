var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Package Editor Server',
        author: 'Charlie Calvert',
        description: 'package editor JsObjects',
        status: "incomplete"
    });
});

module.exports = router;
