/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;


var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.56.101:27017/test';

	function QueryMongo() {

	}

	QueryMongo.prototype.getData = function(result) {
		console.log('Called getData');
			// Open the test database that comes with MongoDb
		MongoClient.connect(url01, function(err, database) {
			if (err) {
				throw err;
			}
			console.log('IngetDataCallback');
			// insertIntoCollection(database, 'test_insert', { f : 7 });
			getCollection(database, result);
		});

	}
	
	var getCollection = function(database, result) {

		var collection = database.collection('test_insert');

		// Count documents in the collection
		collection.count(function(err, count) {
			console.log(format("count = %s", count));
		});

		// View the collection
		collection.find().toArray(function(err, results) {
			console.dir(results);
			// $("#mongoData").html(results);
			database.close();
			var body = 'Mongo Data: ' + results[2].firstName;
			result.setHeader('Content-Type', 'text/plain');
			result.setHeader('Content-Length', Buffer.byteLength(body));
			result.end(body);			
		});

	};

	// Will create collection if it does not exist
	var insertIntoCollection = function(db, collectionName, objectToInsert) {

		var collection = db.collection(collectionName);
		collection.insert(objectToInsert, function(err, docs) {
			getCollection(db);
		});
	};

	return QueryMongo;

})();

app.get('/', function(req, result){
  var q = new QueryMongo();
  var data = q.getData(result);	

});

app.listen(30025);
console.log('Listening on port 30025');

/* $(document).ready(function() {
	var q = new QueryMongo();
}); */
