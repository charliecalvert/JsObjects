/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var queryMongo = require('./public/javascripts/QueryMongo').QueryMongo;

var app = express();

// all environments
app.set('port', process.env.PORT || 30025);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var collectionName = 'MongoConfig';

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/deleteData', function(request, response) {
	'use strict';
	console.log('Remove called');
	queryMongo.removeAll(response, collectionName);
});

function readAndInsertConfig(response) {
	'use strict';
	fs.readFile('ComplexConfig.json', 'utf8', function(err, fileContent) {
		if (err) {
			console.log(err);
			response.send({
				"Error" : err
			});
		} else {
			console.log(fileContent);
			fileContent = JSON.parse(fileContent);
			queryMongo.insertIntoCollection(response, collectionName,
					fileContent);
			// response.send({ "result" : fileContent });
		}
	});
}

app.get('/insertConfig', function(request, response) {
	'use strict';
	readAndInsertConfig(response);
});

app.get('/read', function(request, response) {
	'use strict';
	console.log('read route called');
	console.log('request.query.collectionName: ', collectionName);
	var query = request.query.query;
	console.log(typeof query);
	console.log(query);
	queryMongo.getCollectionData(response, query, collectionName);
});

app.get('/runQuery', function(request, response) {
	'use strict';
	console.log('read route called');
	console.log('request.query.collectionName: ', collectionName);
	var query = request.query.query;
	console.log(typeof query);
	console.log(query);
	queryMongo.getCollectionData(response, query, collectionName);
});

app.get('/queryProject', function(request, response) {
	'use strict';
	console.log('queryProject route called: ', request.query);
	console.log('request.query.query: ', request.query.query);
	console.log('request.query.project: ', request.query.project);
	var query = request.query.query;
	console.log(typeof query);
	console.log(query);
	queryMongo.getCollectionProject(response, query, collectionName);
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
