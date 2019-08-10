/**
 * Module dependencies.
 */

// Core
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Frequent
var fs = require("fs");
var exec = require('child_process').exec;
var http = require('http');

// Custom
var s3Code = require("./Source/S3Code");
var walkDirs = require("./Source/WalkDirs").walkDirs;

var routes = require('./routes/index');
var users = require('./routes/user');
var awsCopy = require('./routes/AwsCopy');

var app = express();

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Source')));
app.use(express.static(path.join(__dirname, 'Images')));

app.use('/', routes);
app.use('/users', users);
app.use('/AwsCopy', awsCopy);

// app.use(express.favicon('Images/favicon16.ico'));
// app.use(express.favicon(path.join(__dirname, 'favicon16.ico')));

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
 app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
         message: err.message,
         error: err
     });
 });
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
     message: err.message,
     error: {}
 });
});

//app.get('/', routes.index);
//app.get('/AwsCopy', routes.AwsCopy);
//app.get('/users', user.list);

/*
 * You will need to edit one or more objects in Options.json.
 * They have this general format

var options = {
		pathToConfig: process.env.HOME + '/.config/aws-config.json',
		reallyWrite: true,
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "Files",
		s3RootFolder: "FilesTwo",
		createFolderToWalkOnS3: true,
		createIndex: true,
		filesToIgnore: ['Thumbs.db', '.gitignore', 'MyFile.html']
};

 * Before filling it out, see the README file for this project.
 */

app.get('/getOptions', function(request, response) {
    'use strict';
    var options = fs.readFileSync(__dirname + "/Options.json", 'utf8');
    options = JSON.parse(options);
    options[0].pathToConfig = process.env.HOME + options[0].pathToConfig;
    response.send(options);
});

app.get('/listBuckets', function(request, response) {
    'use strict';
    console.log("ListBuckets called");
    console.log(request.query);
    var options = JSON.parse(request.query.options);
    console.log("ListBuckets Path to Config: ", options.pathToConfig);
    if (s3Code.loadConfig(options.pathToConfig)) {
        console.log('LOADED CONFIG ABOUT TO CALL S3CODE LISTBUCKETS');
        s3Code.listBuckets(response, true);
    } else {
        console.log("There was an error in listBuckets");
        var msg = "Could not load: " + options.pathToConfig;
        response.send({
            result: "error",
            "message": msg
        });
    }
});

app.get('/copyToS3', function(request, response) {
    'use strict';
    console.log(typeof request.query.options);
    var options = JSON.parse(request.query.options);
    console.log(options);
    walkDirs(options, response);
});

var buildAll = function(response, config, index) {
    'use strict';
    console.log("BuildAll was called");
    var command = config[index].pathToPython + " " + __dirname + "/MarkdownTransform.py -m " + __dirname + "/MarkdownTransformConfig.json" + " -i " + index;
    try {
        exec(command, function callback(error, stdout, stderr) {
            // Read in the HTML send the HTML to the client
            console.log("convertToHtml was called er: ", error);
            console.log("convertToHtml was called so: ", stdout);
            console.log("convertToHtml was called se: ", stderr);
            response.send({
                "result": "Success",
                "data": stdout
            });
        });
    } catch (e) {
        console.log(e.message);
        response.send({
            "result": "error",
            "data": e
        });
    }
};

app.get('/buildAll', function(request, response) {
    'use strict';
    console.log("buildAll called");
    console.log(typeof request.query.options);
    console.log(request.query.options);
    // Let's just start writing this out, as we are going to need to do it eventually.
    var options = JSON.parse(request.query.options);
    fs.writeFile(__dirname + "/MarkdownTransformConfig.json", JSON.stringify(options, null, 4), function(err, data) {
        if (err) {
            console.log(data);
            throw err;
        }
        buildAll(response, options, request.query.index);
    });
    // buildAll(response, options, request.query.index);
});

app.get('/getBuildConfig', function(request, response) {
    'use strict';
    console.log('getBuildConfig called');
    var options = fs.readFileSync(__dirname + "/MarkdownTransformConfig.json", 'utf8');
    options = JSON.parse(options);
    response.send(options);
});

app.set('port', process.env.PORT || 30025);

http.createServer(app).listen(app.get('port'), function() {
    'use strict';
    console.log('Express server listening on port ' + app.get('port'));
});
