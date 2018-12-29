/**
 * @author Charlie Calvert and Terence Buencamino
 */

var MongoClient = require("mongodb").MongoClient;
var loadConfig = require("./LoadConfig.js").loadConfig;
var collectionList = require("./CollectionList").CollectionList;

var QueryMongo = (function() {
    "use strict";

    var mongoClient = null;

    function QueryMongo() {
        loadConfig(function(urls) {
            var mongoTalkJson = JSON.parse(urls);
            var url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log("The Mongo URL:" + url);
            getDatabase(url, function() {
                console.log("Connected to MongoDb");
            });
        });
    }

    const getDatabase = function(url, func) {
        if (mongoClient !== null) {
            console.log("Allready connected to MongoDb");
            func(mongoClient);
        } else {
            console.log("Querying for MongoDb connection");
            MongoClient.connect(
                url,
                function(err, mongoClientInit) {
                    if (err) {
                        throw err;
                    }
                    mongoClient = mongoClientInit;
                    func(mongoClient);
                }
            );
        }
    };

    // Count documents in the collection
    QueryMongo.prototype.getCount = function(collectionName, response) {
        console.log("getCount called");
        var database = mongoClient.db("test");
        var collection = database.collection(collectionName);

        collection.count(function(err, count) {
            response.send({ count: count });
        });
    };

    QueryMongo.prototype.getCollectionData = function(
        response,
        query,
        collectionName
    ) {
        console.log("getCollection called");
        const database = mongoClient.db("test");
        var collection = collectionList.getCollectionByName(
            database,
            collectionName
        );

        collection.find(query).toArray(function(err, theArray) {
            if (err) {
                console.log("Error in getCollection: " + err);
            }
            console.log("Found collection item.");
            response.send(theArray);
        });
    };

    QueryMongo.prototype.getCollectionProject = function(
        response,
        request,
        collectionName
    ) {
        console.log("getCollectionProject called");
        const database = mongoClient.db("test");
        var collection = collectionList.getCollectionByName(
            database,
            collectionName
        );

        collection
            .find(request.query, request.project)
            .toArray(function(err, theArray) {
                if (err) {
                    console.log("Error in getCollection: " + err);
                }
                console.log("Found collection item.");
                console.log(theArray);
                response.send(theArray);
            });
    };

    // Will create collection if it does not exist
    QueryMongo.prototype.insertIntoCollection = function(
        response,
        collectionName,
        objectToInsert
    ) {
        message("QueryMongo.insertIntoCollection called: " + collectionName);
        console.log(objectToInsert[0]);
        const database = mongoClient.db("test");
        var collection = collectionList.getCollectionByName(
            database,
            collectionName
        );
        if (collection !== null) {
            collection.insert(objectToInsert, function(err, docs) {
                if (err) {
                    throw err;
                }
                console.log("insert succeeded");
                response.send({
                    result: "Success",
                    mongoDocument: docs
                });
            });
        } else {
            response.send({
                result: "Could not get collection"
            });
        }
    };

    QueryMongo.prototype.removeAll = function(response, collectionName) {
        console.log("QueryMongo.removeAll called");
        const database = mongoClient.db("test");
        var collection = collectionList.getCollectionByName(
            database,
            collectionName
        );
        if (collection !== null) {
            collection.remove(function(err, data) {
                if (err) {
                    throw err;
                }
                console.log("Item deleted");
                response.send({
                    result: "removeAll Called"
                });
            });
        }
    };

    function message(messageToShow) {
        console.log("------------");
        console.log(messageToShow);
        console.log("------------");
    }

    return QueryMongo;
})();

exports.QueryMongo = new QueryMongo();
