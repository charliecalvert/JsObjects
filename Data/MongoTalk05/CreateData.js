/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');
var assert = require('assert');
var loadConfig = require('./Library/LoadConfig.js').loadConfig;
var argv = require('minimist')(process.argv.slice(2));

var QueryMongo = (function() {
	'use strict';

	// var url = 'mongodb://127.0.0.1:27017/test';

	var url = null;
	var that = null;
	var database = null;
	var collectionName = 'test_insert';

	function QueryMongo() {
		console.log("Constructor called.")
		that = this;
	}

	QueryMongo.prototype.run = function(option) {
		loadConfig(function(urls) {
			var mongoTalkJson = JSON.parse(urls);
			url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
			console.log("The Mongo URL: " + url);
			that.getData(option);
			console.log("Leaving loadConfig");
		});
	}

	var getDatabase = function(callback) {
		console.log('Called QueryMongo.getDatabase: ');
		if (database !== null) {
			console.log('database exists');
			// showDatabase(database);
			if (database.openCalled === false) {
				console.log('calling open database');
				database.open(function(err, database) {
					console.log('In database open callback');
					if (err) {
						console.log("found err");
						throw err;
					}
					callback(database);
				});
			} else {
				callback(database);
			}
		} else {
			console.log('Querying for database: ' + url);
			MongoClient.connect(url, function(err, databaseResult) {
				/*
				 * if (err) { throw err; }
				 */
				assert.equal(null, err);
				assert.ok(databaseResult !== null);
				database = databaseResult;
				// showDatabase(database);
				callback(database);
			});
		}
	};

	QueryMongo.prototype.getData = function(option) {
		console.log('Called getData');

		if (option === 'insert') {
			insertCollection(database);
		} else if (option === 'remove') {
			removeCollection(database);
		} else {
			getCollection(database);
		}
		console.log("Leaving get data");
	};

	var insertCollection = function(database) {

		getDatabase(function(database) {
			var count, collection = database.collection(collectionName);
			var records = [];
			
			for (count = 10000; count < 10005; count++) {
				var newRecord = {
					firstName : "Abe" + count,
					"lastName" : "Lincoln" + count,
					"address" : count + " Green Street",
					"city" : "Bellevue",
					"state" : "WA",
					"zip" : 98002
				};
				records.push(newRecord);
			}
			// insertData(collection, records);
			collection.insert(records, function(err, docs) {
				if (err) {
					throw err;
				} else {
					console.log('Inserted: ' + JSON.stringify(docs));
					database.close();
				}
			});
			console.log("Leaving insert collection");
		});
	};

	var getCollection = function(database) {
		console.log('Get Collection Called');
		getDatabase(function(database) {
			var collection = database.collection(collectionName);

			// Send the collection to the client.
			collection.find().toArray(function(err, theArray) {
				console.dir(theArray);
				database.close();
			});
		})

	};

	var removeCollection = function(database) {
		getDatabase(function(database) {
			var collection = database.collection(collectionName);
			collection.remove(function(err) {
				if (err) {
					throw err;
				}
				database.close();
			});
		});
	};

	return QueryMongo;

}());

function run(option) {
	var q = new QueryMongo();
	q.run(option);
}

if (argv.option) {
	console.log(argv.option);
	run(argv.option);
} else {
	console.log("Please pass in an option");
	console.log();
	console.log("  Usage: node CreateData.js --option=[OPTION]");
	console.log("    Options are: insert, show, remove ");
	console.log();
	console.log("  Examples: ");
	console.log("    node CreateData.js --option=show");
	console.log("    node CreateData.js --option=insert");
	console.log("    node CreateData.js --option=remove");
}

