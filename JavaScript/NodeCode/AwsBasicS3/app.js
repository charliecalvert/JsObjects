/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var walkDirs = require("./Source/WalkDirs").walkDirs;
var s3Code = require("./Source/S3Code");
var fs = require("fs");
var exec = require('child_process').exec;

var app = express();

// all environments
app.set('port', process.env.PORT || 30025);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
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

app.get('/', function(request, response) { 'use strict';
    var html = fs.readFileSync(__dirname + '/public/index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});   
    response.write(html);
    response.end();
});

//app.get('/', routes.index);
// app.get('/users', user.list);

/*
 * You will need to edit one or more objects in Options.json. 
 * They have this general format

var options = {
		pathToConfig: '/home/charlie/config.json',		
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

app.get('/getOptions', function(request, response) {'use strict';
	var options = fs.readFileSync("Options.json", 'utf8');
	options = JSON.parse(options);
	response.send(options);
});

app.get('/listBuckets', function(request, response) {'use strict';
    console.log("ListBuckets called");
    console.log(request.query);
	var options = JSON.parse(request.query.options);
	console.log("ListBuckets: ", options.pathToConfig);
	s3Code.loadConfig(options.pathToConfig);
	s3Code.listBuckets(response, true);
});

app.get('/copyToS3', function(request, response) {'use strict';
	console.log(typeof request.query.options);	
	var options = JSON.parse(request.query.options);
	console.log(options);
	walkDirs(options, response);
});

var buildAll = function(response, config, index) { 'use strict';
	console.log("BuildAll was called");
	// var config = fs.readFileSync("MarkdownTransformConfig.json", 'utf8');	
	// config = JSON.parse(config);
	var command = config[index].pathToPython + " MarkdownTransform.py -i " + index;	
	try {
		exec(command, function callback(error, stdout, stderr) {
			// Read in the HTML send the HTML to the client
			console.log("convertToHtml was called er: ", error);
			console.log("convertToHtml was called so: ", stdout);
			console.log("convertToHtml was called se: ", stderr);
			response.send({ "result": "Success", "data": stdout });
		});
	} catch(e) {
		console.log(e.message);
		response.send( { "result" : "error", "data": e });
	}
};

app.get('/buildAll', function(request, response) { 'use strict';
	console.log("buildAll called");	
	var options = JSON.parse(request.query.options);
	buildAll(response, options, request.query.index);
});

app.get('/getBuildConfig', function(request, response) { 'use strict';
	console.log('getBuildConfig called');
	var options = fs.readFileSync("MarkdownTransformConfig.json", 'utf8');
	options = JSON.parse(options);
	response.send(options);
});

http.createServer(app).listen(app.get('port'), function() {'use strict';
	console.log('Express server listening on port ' + app.get('port'));
});
