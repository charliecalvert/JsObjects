/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');

var QueryMongo = (function() {'use strict';

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.56.101:27017/test';

	function QueryMongo() {

	}


	QueryMongo.prototype.getData = function(option) {
		console.log('Called getData');

		// Open the test database that comes with MongoDb
		MongoClient.connect(url01, function(err, database) {
			if (err) {
				throw err;
			}
			console.log('IngetDataCallback');
			if (option === 'insert') {
				insertCollection(database);
			} else if (option === 'remove') {
				removeCollection(database);
			} else {
				getCollection(database);
			}
		});

	};

	var insertData = function(newRecord) {
		collection.insert(newRecord, function(err, docs) {
			if (err) {
				throw err;
			} else {
				console.log('Inserted: ' + newRecord);
			}
		});
	};

	var insertCollection = function(database) {
		var collection = database.collection('test_insert');
		for (var count = 10000; count < 10005; count++) {
			var newRecord = {
				firstName : "Abe" + count,
				"lastName" : "Lincoln" + count,
				"address" : count + " Green Street",
				"city" : "Bellevue",
				"state" : "WA",
				"zip" : 98002
			};
			insertData(newRecord);
		}
		getCollection(database);
	};

	var getCollection = function(database) {
		console.log('Get Collection Called');
		var collection = database.collection('test_insert');

		// Count documents in the collection
		//collection.count(function(err, count) {
		//	console.log(format("count = %s", count));
		//});

		// Send the collection to the client.
		collection.find().toArray(function(err, theArray) {
			console.dir(theArray);
			//console.log('Collection shown');
			database.close();
		});

	};

	var removeCollection = function(database) {
		var collection = database.collection('test_insert');
		collection.remove(function(err) {
			if (err) {
				throw err;
			}
			database.close();
		});
	};

	return QueryMongo;

})();

var q = new QueryMongo();
q.getData('insert');
// q.getData('remove');
// q.getData('show');
