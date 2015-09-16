/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();
var walker = require('./walker');
var walk = require('./walkjs');
var path = require('path');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Walker Demos' });
});

// This one walks with native FS calls
router.get('/walk', function(request, response) {
    'use strict';
    // If you run Node in Eclipse, to access JSOBJECTS, you made need
    // to choose Run | Run Configurations | Environment | Select
    var dirToWalk = process.env.JSOBJECTS;
    // var dirToWalk = getHomeDir + '/bin';
    console.log("About to walk: " + dirToWalk);
    walk.walk(dirToWalk, ['karma.conf.js', 'Gruntfile.js'], ['node_modules', 'JavaScript'], function(err, data) {
        if (err) {
            console.log(err);
            response.send({
                result: "Error",
                error: err
            });
        } else {
            console.log(data);
            response.send({
                result: "Success",
                files: data
            });
        }
    });

});

// This one uses the walk module
router.get('/walker', function(request, response) {

    console.log('request.query', request.query);
    var searchPath = process.env[request.query.environmentVariable];
    for (var i = 0; i < request.query.folder.length; i++) {
        searchPath += path.sep + request.query.folder[i];
    }
    console.log('query paths:', searchPath);

    walker.walkDirs(searchPath, ["Temp", "_Temp"], function(errors, fileInfo) {
        if (errors.length !== 0) {
            response.send(errors);
        } else {
            response.send(fileInfo);
        }
    })
});

module.exports = router;
