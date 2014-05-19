/* jshint devel: true */

/**
 * @author Charlie Calvert
 * 
 * Version 0.0.1
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var fs = require('fs');
var exec = require('child_process').exec;
var assert = require('assert');
var loadConfig = require('./LoadConfig.js').loadConfig;

var QueryMongo = (function() {'use strict';

	var response = null;
	var database = null;
	var url = null;
	var collectionName = 'finalWalk';
	/*
	 * Normally we do not close the database. If you have more
	 * more than one MongoClient then call it, otherwise, don't 
	 * call it. So we default to false.
	 */
	var callClose = false;

	function QueryMongo() {
		console.log("QueryMongo constructor called");
		loadConfig(function(urls) {			
			var mongoTalkJson = JSON.parse(urls);
			url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
			console.log("The Mongo URL:" + url);
		});
	}
	

	function showDatabase(database, deep) {
		// Make deep default to false
		deep = typeof deep !== 'undefined' ? deep : false;
		console.log("Deep is: " + deep);
		for (var key in database) {
			var obj = database[key];
			if (typeof obj !== 'function') {
				console.log(key + ": ");
				console.log(obj);
			}
			if (deep === true) {
				for (var prop in obj) {
					// Check that this is not an inherited property from the prototype
					if(obj.hasOwnProperty(prop)){
						console.log("Database looks like this: "  + prop + " = " + obj[prop]);
					}
				}
			}
		}
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
				/* if (err) {
					throw err;
				}*/
				assert.equal(null, err);
				assert.ok(databaseResult !== null);
				database = databaseResult;
				// showDatabase(database);
				callback(database);
			});
		}
	};

	// If you have only on MongoClient, there is no need to call close.
	var closeDatabase = function() {
		database.close();
	};

	QueryMongo.prototype.getAllDocuments = function(initResponse) {
		console.log("QueryMongo.getAllDocuments called");
		response = initResponse;
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);

			// Send the collection to the client.
			collection.find().toArray(function(err, theArray) {
				console.dir(theArray);
				if (callClose) { closeDatabase(); }
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
				if (callClose) { closeDatabase(); }
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
				if (callClose) { closeDatabase(); }
				response.send({ "documentCount": result });
			});
		});
	};


	// Will create collection if it does not exist
	QueryMongo.prototype.insertIntoCollection = function(response, objectToInsert) {
		console.log("QueryMongo.insertIntoCollection called");
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);
			collection.insert(objectToInsert, function(err, docs) {
				if (err) {
					throw err;
				}
				if (callClose) { closeDatabase(); }
				console.log("insert succeeded");
				response.send({ result: "Success", mongoDocument: docs });
			});
		});
	};
	
	// Will create collection if it does not exist
	QueryMongo.prototype.updateCollection = function(response, objectToInsert) {
		console.log("QueryMongo.updateCollection called");
		getDatabase(function getCol(database) {
		    console.log("In the update callback");
			var collection = database.collection(collectionName);
			collection.update(objectToInsert.query, objectToInsert.update, function(err, docs) {
				if (err) {
					throw err;
				}
				if (callClose) { closeDatabase(); }
				console.log("update succeeded");
				response.send({ result: "Success", mongoDocument: docs });
			});
		});
	};

	QueryMongo.prototype.readMarkDown = function(title, fileName) {
		console.log("readMarkDown: " + fileName);
		var myJson = {
			"title": null,
			"text": null
		};

		myJson.title = title;
		var fileContent = fs.readFileSync(fileName, 'utf8');
		myJson.text = fileContent;

		return myJson;
	};


	QueryMongo.prototype.readFileOut = function(response) {
		console.log("readFileOut called");
		getDatabase(function(database) {
			var collection = database.collection(collectionName);
			collection.find().toArray(function(err, theArray) {
				if (err) {
					throw err;
				}
				if (callClose) { closeDatabase(); }
				console.log(typeof theArray[theArray.length-1].text);
				var output = theArray[theArray.length-1].text;
				writeFile(response, output);
				// response.send(theArray[0]);
			});
		});
	};

	var writeFile = function(response, jsonString) {
		fs.writeFile("test.md", jsonString, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
				convertToHtml(response);
			}
		});
	};

	var convertToHtml = function(response)	{
		exec('pandoc -t html5 test.md', function callback(error, stdout, stderr) {
			// Read in the HTML send the HTML to the client
			console.log("convertToHtml was called");
			response.send(stdout);
		});
	};

	QueryMongo.prototype.removeById = function(id) {
		console.log("QueryMongo.removeById called");
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);
			collection.remove({ "_id" : mongodb.ObjectID("52fc4547640b76180b9fb9c4")}, function(err, data) {
				if (err) {
					throw err;
				}
				if (callClose) { closeDatabase(); }
				console.log("Item deleted");
			});

		});
	};

	QueryMongo.prototype.removeAll = function(response) {
		console.log("QueryMongo.removeAll called");
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);
			collection.remove(function(err, data) {
				if (err) {
					throw err;
				}
				if (callClose) { closeDatabase(); }
				console.log("Item deleted");
				response.send({ result: "Success", data: data });
			});

		});
	};

	return QueryMongo;

})();

exports.QueryMongo = new QueryMongo();
