/**
 * @author Charlie Calvert
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var fs = require('fs');
var exec = require('child_process').exec;

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

		url = urls[2];
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
	QueryMongo.prototype.insertIntoCollection = function(response, objectToInsert) {
		console.log("QueryMongo.insertIntoCollection called");
		getDatabase(function getCol(database) {
			var collection = database.collection(collectionName);
			collection.insert(objectToInsert, function(err, docs) {
				if (err) {
					throw err;
				}
				database.close();
				console.log("insert succeeded");
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
				database.close();
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
			// console.log(mongodb);
			//var objectId = mongo.ObjectId;
			//console.log(objectId);
			collection.remove({ "_id" : mongodb.ObjectID("52fc4547640b76180b9fb9c4")}, function(err, data) {
				if (err) {
					throw err;
				}
				database.close();
				console.log("Item deleted");
			}); 
			
		});
	};

	return QueryMongo;

})();


exports.QueryMongo = new QueryMongo();
