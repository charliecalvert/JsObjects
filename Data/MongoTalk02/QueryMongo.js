/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;
var loadConfig = require('./LoadConfig.js').loadConfig;

var QueryMongo = (function() {
    'use strict';

    var url = null;
    var database = null;

    function QueryMongo() {
        loadConfig(function(urls) {
            var mongoTalkJson = JSON.parse(urls);
            url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log("The Mongo URL:" + url);
        });
    }

    var getDatabase = function(response, collectionName, func) {
        if (database !== null) {
            console.log('database exists');
            func(response, collectionName, database);
        } else {
            console.log('Querying for database');
            MongoClient.connect(url, function(err, client) {
                if (err) {
                    throw err;
                }
                database = client.db('test');
                func(response, collectionName, database);
            });
        }
    };

    QueryMongo.prototype.getCollection = function(collectionName, response) {
        console.log('getCollection called');
        getDatabase(response, collectionName, function(response, collectionName, database) {

            var collection = database.collection(collectionName);

            // Count documents in the collection
            collection.count(function(err, count) {
                console.log("count: ", count);
            });

            // Send the collection to the client.
            collection.find().toArray(function(err, theArray) {
                console.dir(theArray);
                //client.close();
                response.send(theArray);
            });

        });
    };

    return QueryMongo;

})();

module.exports = new QueryMongo();