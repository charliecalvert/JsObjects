/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');
var queryMongo = require('./public/QueryMongo').QueryMongo;

function message(value) { 'use strict';
    console.log("------------");
    console.log(value);
    console.log("------------");
}

// Express Code
app.get('/read', function(request, response) { 'use strict';
	console.log('read route called');
	var collectionName = request.query.collectionName;
	console.log('request.query.collectionName: ', collectionName);
	queryMongo.getCollectionData(response, collectionName);	
});

app.get('/insertData', function(request, response) { 'use strict';
    var collectionName = request.query.collectionName;
    message('Write called: ' + collectionName);    
    var fileName = collectionName + '.json';
    var fileContent = fs.readFileSync(fileName, 'utf8');
    queryMongo.insertIntoCollection(response, collectionName, JSON.parse(fileContent));  
});

app.get('/deleteData', function(request, response) { 'use strict';
    message('Remove called');
    queryMongo.removeAll(response, request.query.collectionName);    
});

// Default.
app.get('/', function(request, result){ 'use strict';
	console.log('Default route called');
	var html = fs.readFileSync(__dirname + '/public/index.html');
	result.writeHeader(200, {"Content-Type": "text/html"});   
	result.write(html);
	result.end();
});

// Give express access to the Public directory
app.use("/", express.static(__dirname + '/public'));

// Tell the webserver (and user) to listen on port 30025
app.listen(30025);
console.log('Listening on port 30025');
