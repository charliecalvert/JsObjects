/* jshint devel: true */

/**
 * @author Charlie Calvert
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var fs = require('fs');
var exec = require('child_process').exec;
var assert = require('assert');
var loadConfig = require('./LoadConfig.js').loadConfig;

var QueryMongo = (function() {
    'use strict';

    //var response = null;
    var mongoClient = null;
    var collectionName = 'test_insert';

    function QueryMongo() {
        loadConfig(function(urls) {
            var mongoTalkJson = JSON.parse(urls);
            var url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log('The Mongo URL:' + url);
            getDatabase(url, function() {
                console.log('Connected to MongoDb');
            });
        });
    }

    const getDatabase = function(url, callback) {
        if (mongoClient !== null) {
            console.log('Already connected to MongoDb');
            callback(mongoClient);
        } else {
            console.log('Querying for database: ' + url);
            MongoClient.connect(
                url,
                function(err, clientInit) {
                    if (err) {
                        throw err;
                    }
                    assert.equal(null, err);
                    assert.ok(clientInit !== null);

                    mongoClient = clientInit;
                    callback(mongoClient);
                }
            );
        }
    };

    function showDatabase(database, deep) {
        // Make deep default to false
        deep = typeof deep !== 'undefined' ? deep : false;
        console.log('Deep is: ' + deep);
        for (var key in database) {
            var obj = database[key];
            if (typeof obj !== 'function') {
                console.log(key + ': ');
                console.log(obj);
            }
            if (deep === true) {
                for (var prop in obj) {
                    // Check that this is not an inherited property from the prototype
                    if (obj.hasOwnProperty(prop)) {
                        console.log(
                            'Database looks like this: ' +
                                prop +
                                ' = ' +
                                obj[prop]
                        );
                    }
                }
            }
        }
    }

    QueryMongo.prototype.getAllDocuments = function(response) {
        console.log('QueryMongo.getAllDocuments called', collectionName);
        assert.ok(mongoClient !== null);
        const database = mongoClient.db('test');
        console.log('database: ', database);
        var collection = database.collection(collectionName);

        // Send the collection to the client.
        collection.find().toArray(function(err, theArray) {
            console.dir(theArray);
            response.send(theArray);
        });
    };

    // Get a specific number of documents from the collection
    QueryMongo.prototype.getDocuments = function(response, count) {
        console.log('QueryMongo.getDocuments called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);

        // Send the collection to the client.
        collection
            .find()
            .limit(count)
            .toArray(function(err, theArray) {
                console.dir(theArray);
                response.send(theArray);
            });
    };

    // Get the number of documents in the collection
    QueryMongo.prototype.getDocumentCount = function(response) {
        console.log('QueryMongo.getDocumentCount called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);

        var count = collection.count(function(err, result) {
            if (err) {
                throw err;
            }
            console.log('sending back result: ' + result);

            response.send({
                documentCount: result
            });
        });
    };

    // Will create collection if it does not exist
    QueryMongo.prototype.insertIntoCollection = function(
        response,
        objectToInsert
    ) {
        console.log('QueryMongo.insertIntoCollection called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);
        collection.insert(objectToInsert, function(err, docs) {
            if (err) {
                throw err;
            }

            console.log('insert succeeded');
            response.send({
                result: 'Success',
                mongoDocument: docs
            });
        });
    };

    // Will create collection if it does not exist
    QueryMongo.prototype.updateCollection = function(response, objectToInsert) {
        console.log('QueryMongo.updateCollection called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);
        collection.update(objectToInsert.query, objectToInsert.update, function(
            err,
            docs
        ) {
            if (err) {
                throw err;
            }
            response.send({
                result: 'Success',
                mongoDocument: docs
            });
        });
    };

    QueryMongo.prototype.readMarkDown = function(title, fileName) {
        console.log('readMarkDown: ' + fileName);
        var myJson = {
            title: null,
            text: null
        };

        myJson.title = title;
        var fileContent = fs.readFileSync(fileName, 'utf8');
        myJson.text = fileContent;

        return myJson;
    };

    QueryMongo.prototype.readFileOut = function(response) {
        console.log('readFileOut called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);
        collection.find().toArray(function(err, theArray) {
            if (err) {
                throw err;
            }

            console.log(typeof theArray[theArray.length - 1].text);
            var output = theArray[theArray.length - 1].text;
            writeFile(response, output);
            // response.send(theArray[0]);
        });
    };

    var writeFile = function(response, jsonString) {
        fs.writeFile('test.md', jsonString, function(err) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                console.log('The file was saved!');
                convertToHtml(response);
            }
        });
    };

    var convertToHtml = function(response) {
        exec('pandoc -t html5 test.md', function callback(
            error,
            stdout,
            stderr
        ) {
            // Read in the HTML send the HTML to the client
            console.log('convertToHtml was called');
            response.send(stdout);
        });
    };

    QueryMongo.prototype.removeById = function(id) {
        console.log('QueryMongo.removeById called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);
        collection.remove(
            {
                _id: mongodb.ObjectID('52fc4547640b76180b9fb9c4')
            },
            function(err, data) {
                if (err) {
                    throw err;
                }

                console.log('Item deleted');
            }
        );
    };

    QueryMongo.prototype.removeAll = function(response) {
        console.log('QueryMongo.removeAll called');
        const database = mongoClient.db('test');
        var collection = database.collection(collectionName);
        collection.remove(function(err, data) {
            if (err) {
                throw err;
            }

            console.log('Item deleted');
            response.send({
                result: 'Success',
                data: data
            });
        });
    };

    return QueryMongo;
})();

exports.QueryMongo = new QueryMongo();
