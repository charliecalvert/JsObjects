/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;
var loadConfig = require('./LoadConfig.js').loadConfig;

var QueryMongo = (function() {
    'use strict';

    var mongoClient = null;

    function QueryMongo() {
        loadConfig(function(urls) {
            var mongoTalkJson = JSON.parse(urls);
            var url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log("The Mongo URL:" + url);
            getDatabase(url, function() {
                console.log('Connected to MongoDb')
            });
        });
    }

    const getDatabase = function(url, func) {
        if (mongoClient !== null) {
            console.log('Allready connected to MongoDb');
            func(mongoClient);
        } else {
            console.log('Querying for MongoDb connection');
            MongoClient.connect(url, function(err, mongoClientInit) {
                if (err) {
                    throw err;
                }
		assert.equal(null, err);
                assert.ok(mongoClientInit !== null);
                mongoClient = mongoClientInit;
                func(mongoClient);
            });
        }
    };

    // Count documents in the collection
    QueryMongo.prototype.getCount = function(collectionName, response) {
        console.log('getCount called');
        var database = mongoClient.db('test');
        var collection = database.collection(collectionName);

        collection.count(function(err, count) {
            response.send({"count": count});
        });
    };

    QueryMongo.prototype.getCollection = function(collectionName, response) {
        console.log('getCollection called');
        var database = mongoClient.db('test');
        var collection = database.collection(collectionName);

        // Send the collection to the client.
        collection.find().toArray(function(err, theArray) {
            response.send(theArray);
        });
    };

    return QueryMongo;

})();

module.exports = new QueryMongo();