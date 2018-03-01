/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.20:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';

	function QueryMongo() {

	}

	QueryMongo.prototype.getData = function(response) {
		console.log('Called getData');
		// Open the test database for MongoDb 3.00 or higher with client
		MongoClient.connect(url02, function(err, client) {
			console.log('IngetDataCallback');
			if (err) {
				throw err;
			}
			var database = client.db('test');
			const collectionName = 'test_insert';
			//insertIntoCollection(database, collectionName, { firstName : "Suzy" });
			getCollection(database, collectionName, function(testInsert) {
				var body = '<html><body><h2>Mongo Data: ' + testInsert[0].firstName + '</h2>';
				body += "<p>This HTML is hardcoded into Server.js. See the getCollection method.</p></body></html>";
				response.setHeader('Content-Type', 'text/html');
				response.setHeader('Content-Length', Buffer.byteLength(body));
				response.end(body);
				client.close();
			});
		});
	};

	var getCollection = function(database, collectionName, callback) {
    console.log('In getCollection');
		var collection = database.collection(collectionName);

		// View the collection
		collection.find().toArray(function(err, theArray) {
			if (err) {
				throw(err);
			}
			console.dir(theArray);
			console.dir(JSON.stringify(theArray));
			callback(theArray);
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
  var data = q.getData(response);
});

app.listen(30025);
console.log('Listening on port 30025');

/* $(document).ready(function() {
	var q = new QueryMongo();
}); */
