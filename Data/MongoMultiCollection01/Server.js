/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');
var queryMongo = require('./Public/QueryMongo').QueryMongo;

function message(message) {
    console.log("------------");
    console.log(message);
    console.log("------------");
}

// Express Code
app.get('/read', function(request, response) {
	console.log('read route called');
	var collectionName = request.query.collectionName;
	console.log('request.query.collectionName: ', collectionName);
	queryMongo.getCollection(response, collectionName);	
});

app.get('/insertData', function(request, response) {
    var collectionName = request.query.collectionName;
    message('Write called: ' + collectionName);    
    var fileName = collectionName + '.json';
    var fileContent = fs.readFileSync(fileName, 'utf8');
    queryMongo.insertIntoCollection(response, collectionName, JSON.parse(fileContent));  
});

app.get('/deleteData', function(request, response) {
    message('Remove called');
    queryMongo.removeAll(response, request.query.collectionName);    
});

// Default.
app.get('/', function(request, result){
	console.log('Default route called');
  	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, {"Content-Type": "text/html"});   
	result.write(html);
	result.end();
});

// Give express access to the Public directory
app.use("/", express.static(__dirname + '/Public'));

// Tell the webserver (and user) to listen on port 30025
app.listen(30025);
console.log('Listening on port 30025');
