/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;

var QueryMongo = (function() {'use strict';

	var response = null;
	var database = null;
	var url = null;
	var collectionName = 'test_insert';
	
	function QueryMongo() {
		var urls = ['mongodb://127.0.0.1:27017/test',
			'mongodb://192.168.2.19:27017/test',
			'mongodb://192.168.2.34:27017/test',
			'mongodb://192.168.56.101:27017/test'];

		url = urls[0];
	}

	var getDatabase = function(callback) {
		console.log('Called QueryMongo.getDatabase');
		if (database !== null) {
			console.log('database exists');
			database.open(function(err, database) {
				if (err) {
					throw err;
				}
				callback(database);
			});
		} else {
			console.log('Querying for database');
			MongoClient.connect(url, function(err, databaseResult) {
				if (err) {
					throw err;
				}
				database = databaseResult;
				callback(database);
			});
		}
	};

	QueryMongo.prototype.getAllDocuments = function(initResponse) {
		console.log("QueryMongo.getAllDocuments called");
		response = initResponse;
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);

			// Send the collection to the client.
			collection.find().toArray(function(err, theArray) {
				console.dir(theArray);
				database.close();
				response.send(theArray);
			});
		});
	};
	
	// Get a specific number of documents from the collection
	QueryMongo.prototype.getDocuments = function(initResponse, count) {
		console.log("QueryMongo.getDocuments called");
		response = initResponse;
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);

			// Send the collection to the client.
			collection.find().limit(count).toArray(function(err, theArray) {
				console.dir(theArray);
				database.close();
				response.send(theArray);
			});
		});
	};
	
	// Get the number of documents in the collection
	QueryMongo.prototype.getDocumentCount = function(initResponse) {
		console.log("QueryMongo.getDocumentCount called");
		response = initResponse;
		getDatabase(function getCol(database) {			
			var collection = database.collection(collectionName);

			var count = collection.count(function(err, result) {
				if (err) {
					throw err;
				}
				console.log('sending back result: ' + result);
				database.close();
				response.send({ "documentCount": result });
			});
		});
	};
	
	
	// Will create collection if it does not exist
	QueryMongo.prototype.insertIntoCollection = function(objectToInsert) {
		console.log("QueryMongo.insertIntoCollection called");
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);
			collection.insert(objectToInsert, function(err, docs) {
				if (err) {
					throw err;
				}
				database.close();
				console.log("insert succeeded");
			});
		});
	};

	return QueryMongo;

})();


exports.QueryMongo = new QueryMongo();
