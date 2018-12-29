var express = require('express');
var router = express.Router();
var loadConfig = require('./LoadConfig.js').loadConfig;

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'Elvenware MongoLab 01 with JSON' });
});

router.get('/get-api-key', function(req, res, next) {
    'use strict';

    loadConfig(function(urls) {
        var mongoTalkJson = JSON.parse(urls);
        console.log(mongoTalkJson);
        var url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
        console.log(mongoTalkJson.apiKey);
        console.log('The Mongo URL:' + url);
        res.send({ apiKey: mongoTalkJson.apiKey });
    });
});

module.exports = router;
