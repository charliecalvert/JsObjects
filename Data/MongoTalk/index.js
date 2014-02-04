/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';

	function QueryMongo() {

		// Open the test database that comes with MongoDb
		MongoClient.connect(url01, function(err, database) {
			if (err) {
				throw err;
			}

			insertIntoCollection(database, 'test_insert', { f : 7 });

		});
	}

	var getCollection = function(database) {

		var collection = database.collection('test_insert');

		// Count documents in the collection
		collection.count(function(err, count) {
			console.log(format("count = %s", count));
		});

		// View the collection
		collection.find().toArray(function(err, results) {
			console.dir(results);
			database.close();
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

var q = new QueryMongo();
