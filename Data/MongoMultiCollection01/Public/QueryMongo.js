/**
 * @author Charlie Calvert and Terence Buencamino
 */

/* jshint strict:true */

var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
// Required for deleting by ID.
var fs = require('fs');
// Need Express to read from the JSON file.

var QueryMongo = (function() {'use strict';

    var database = null;
    var url = null;
    // The URL to connect to the Mongo DB. Read from config.json in constructor.
    var targetCollection = null;
    // The collection name for this project (midterm).
    var collectionObjectTCO = null;
    // The local collection for Transform Copy Options.
    var collectionObjectCTA = null;
    // The local collection for Copy to AWS Options.
    var url01 = 'mongodb://127.0.0.1:27017/test';
    var url02 = 'mongodb://192.168.2.19:27017/test';
    var url03 = 'mongodb://192.168.2.34:27017/test';
    var url04 = 'mongodb://192.168.56.101:27017/test';
    var url05 = 'mongodb://charlie:foobar@ds049848.mongolab.com:49848/elvenlab01';

    // Constructor.
    function QueryMongo() {
        url = url05;
    }// End constructor

    function message(message) {
        console.log("------------");
        console.log(message);
        console.log("------------");
    }
    
    var getDatabase = function(response, collectionName, func) {
        console.log('Called getDatabase');
        if (database !== null) {
            console.log('database exists');
            func(response, collectionName, database);
        } else {
            console.log('Querying for database');
            MongoClient.connect(url, function(err, databaseResult) {
                if (err) {
                    console.log("Error in GetDatabase");
                    throw err;
                }
                database = databaseResult;
                func(response, collectionName, database);
            });
        }
        console.log("Exiting getDatabase");
    };

    var getCollection = function(collectionName) {
        var currentCollection = null;
        if (collectionName === 'multiPresidents') {
            console.log("Getting collectionObjectTCO");
            if (collectionObjectTCO === null) {
                collectionObjectTCO = database.collection(collectionName);
            }
            return collectionObjectTCO;
        } else if (collectionName === 'multiMusicians') {
            console.log("Getting collectionObjectCTA");
            if (collectionObjectCTA === null) {
                collectionObjectCTA = database.collection(collectionName);
            }
            return collectionObjectCTA;
        }
        return null;
    };

    QueryMongo.prototype.getCollection = function(initResponse, collectionName) {
        console.log("getCollection called");
        console.log("collectionName is " + collectionName);
        var response = initResponse;

        getDatabase(response, collectionName, function(response, collectionName, database) {
            console.log("In getCollection callback: " + collectionName);

            var currentCollection = getCollection(collectionName);

            currentCollection.find().toArray(function(err, theArray) {
                if (err) {
                    console.log("Error in getCollection: " + err);
                }
                console.log("Found collection item.");
                console.log("Sending back the data.");
                console.log(theArray);
                response.send(theArray);
            });

        });
    };

    // Will create collection if it does not exist
    QueryMongo.prototype.insertIntoCollection = function(response, collectionName, objectToInsert) {
        message("QueryMongo.insertIntoCollection called: " + collectionName);        
        console.log(objectToInsert[0]);
        getDatabase(response, collectionName, function(response, collectionName, database) {
            var collection = getCollection(collectionName);
            if (collection !== null) {
                collection.insert(objectToInsert, function(err, docs) {
                    if (err) {
                        throw err;
                    }                    
                    console.log("insert succeeded");
                    response.send({ result: "Success", mongoDocument: docs });
                });
            } else {
                response.send({ result: 'Could not get collection' });
            }
            
        });
    };
    
    QueryMongo.prototype.removeAll = function(response, collectionName) {
        console.log("QueryMongo.removeAll called");
        getDatabase(response, collectionName, function (response, collectionName, database) {            
            var collection = getCollection(collectionName);
            if (collection !== null) {
                collection.remove(function(err, data) {
                    if (err) {
                        throw err;
                    }               
                    console.log("Item deleted");
                    response.send({ result : "removeAll Called" });
                });
            };
        });    
    };
    
    return QueryMongo;

})();

exports.QueryMongo = new QueryMongo();

