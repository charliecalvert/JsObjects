/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');

var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.20:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';

	function QueryMongo() {

	}

	QueryMongo.prototype.getData = function(result, fileContent) {
		console.log('Called getData');
		// Open the test database that comes with MongoDb
		MongoClient.connect(url02, function(err, client) {
			if (err) {
				throw err;
			}
			console.log('IngetDataCallback');
			const database = client.db('test');
			insertIntoCollection(database, 'test_insert', fileContent);
			getCollection(database, result, client);
		});
	};

	var getCollection = function(database, response, client) {

		var collection = database.collection('test_insert');

		// View the collection
		collection.find().toArray(function(err, theArray) {
			console.dir(theArray);
			var body = '<html><body><h2>Mongo Data: ' + theArray[0].firstName + '</h2>';
			body += "<p>This HTML is hardcoded into Server01.js. See the getCollection method.</p></body></html>";
			body += JSON.stringify(theArray, null, 4);
			response.setHeader('Content-Type', 'text/html');
			response.setHeader('Content-Length', Buffer.byteLength(body));
			response.end(body);
			client.close();
		});

	};

	// Will create collection if it does not exist
	var insertIntoCollection = function(db, collectionName, objectToInsert) {

		var collection = db.collection(collectionName);
		collection.insert(objectToInsert, function(err, docs) {
			if (err) {
				throw err;
			}
			console.log("insert succeeded");
		});
	};

	return QueryMongo;

})();

app.get('/', function(request, response) {
  var q = new QueryMongo();
  var fileContent = fs.readFileSync('Data.json', 'utf8');
  var data = q.getData(response, JSON.parse(fileContent));
});

app.listen(30025);
console.log('Listening on port 30025');

/* $(document).ready(function() {
	var q = new QueryMongo();
}); */
