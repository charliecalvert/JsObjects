/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;
var loadConfig = require('./LoadConfig.js').loadConfig;

var QueryMongo = (function() {
    'use strict';

    var url = null;
    var mongoClient = null;

    function QueryMongo() {
        loadConfig(function(urls) {
            var mongoTalkJson = JSON.parse(urls);
            url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log("The Mongo URL:" + url);
            getDatabase(function() { console.log('Connected to MongoDb') });
        });
    }

    const getDatabase = function(func) {
        if (mongoClient !== null) {
            console.log('Allready connected to MongoDb');
            func(mongoClient);
        } else {
            console.log('Querying for MongoDb connection');
            MongoClient.connect(url, function(err, mongoClientInit) {
                if (err) {
                    throw err;
                }
                mongoClient = mongoClientInit;
                func(mongoClient);
            });
        }
    };

    QueryMongo.prototype.getCount = function(collectionName, response) {
        console.log('getCount called');
        getDatabase(function(mongoClient) {
            // Count documents in the collection
            var database = mongoClient.db('test');
            var collection = database.collection(collectionName);

            collection.count(function(err, count) {
                //mongoClient.close();
                response.send({"count": count});
            });
        });
    };

    QueryMongo.prototype.getCollection = function(collectionName, response) {
        console.log('getCollection called');
        getDatabase(function(mongoClient) {
            var database = mongoClient.db('test');
            var collection = database.collection(collectionName);

            // Send the collection to the client.
            collection.find().toArray(function(err, theArray) {
                //console.dir(theArray);
                //mongoClient.close();
                response.send(theArray);
            });

        });
    };

    return QueryMongo;

})();

module.exports = new QueryMongo();