/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var walkDirs = require("./Source/WalkDirs").walkDirs;
var s3Code = require("./Source/S3Code");
var fs = require("fs");

var app = express();

// all environments
app.set('port', process.env.PORT || 30025);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Source')));
app.use(express.static(path.join(__dirname, 'Images')));
app.use(express.favicon('Images/favicon16.ico'));
// app.use(express.favicon(path.join(__dirname, 'favicon16.ico')));


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/users', user.list);

var options = {
	pathToConfig : '/home/charlie/config.json',
	//pathToConfig: 'c:\\src\\config\\config.json',
	reallyWrite : true,
	bucketName : 'bucket01.elvenware.com',
	folderToWalk : "Files",
	s3RootFolder : "FilesNine",
	createFolderToWalkOnS3 : true,
	createIndex : true,
	filesToIgnore : ['Thumbs.db', '.gitignore', 'MyFile.html']
};

app.get('/getOptions', function(request, response) { 'use strict';
	var options = fs.readFileSync("Options.json", 'utf8');
	options = JSON.parse(options);
	response.send(options); 
});

app.get('/listBuckets', function(request, response) { 'use strict';
	s3Code.loadConfig(options.pathToConfig);
	s3Code.listBuckets(response, true);
});

app.get('/copyToS3', function(request, response) { 'use strict';	
	console.log(request.query.options);	
	walkDirs(request.query.options, response);
});

http.createServer(app).listen(app.get('port'), function() { 'use strict';
	console.log('Express server listening on port ' + app.get('port'));
});
