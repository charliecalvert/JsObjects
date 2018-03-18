// Handle Ajax and maintain list of data 
define(function() {
    'use strict';

    var mongoData = null;

    function ClientMongo() {
        console.log("ClientMongo constructor called");
        $.subscribe('getDocument', getDocument);
        $.subscribe('insertNewDocument', insertNewDocument);
        $.subscribe('readAll', readAll);
        $.subscribe('readCountDocuments', readCountDocuments);
        $.subscribe('readTwo', readTwo);
        $.subscribe('removeAll', removeAll);
        $.subscribe('update', update);
        $.subscribe('emptyMongoData', emptyMongoData)
    }

    var getDocument = function(event, request) {
        request.callback(mongoData[request.index]);
    };

    var emptyMongoData = function(event, callback) {
        mongoData = [];
        callback();
    };

    var insertNewDocument = function(event, callback) {
        console.log("insert New Document called");
        fetch('/readAll')
            .then((response) => response.json())
            .then((result) => {
                mongoData = mongoData.concat(newData.mongoDocument);
                callback(newData.mongoDocument, mongoData);
            });
        /*$.getJSON('/insertJson', function(newData) {
            mongoData = mongoData.concat(newData.mongoDocument);
            callback(newData.mongoDocument, mongoData);
        });*/
    };

    var readAll = function(event, callback) {
        console.log("readAll called");
        fetch('/readAll')
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                callback(result)
            });
        /*$.getJSON('/readAll', function(data) {
            mongoData = data;
            callback(data);
        });*/
    };

    var readTwo = function(event, callback) {
        console.log("readTwo called");
        fetch('/readTwo')
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                callback(result)
            });
        /*$.getJSON('/readTwo', function(data) {
            mongoData = data;
            callback(data);
        });*/
    };

    var readCountDocuments = function(event, publishedRequest) {
        console.log("readCountDocuments called");
        var request = {};
        request.numRequested = publishedRequest.numRequested;
        const url = '/readDocuments?numRequested=' + publishedRequest.numRequested;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                publishedRequest.callback(mongoData);
            });
        /*$.getJSON('/readDocuments', request, function(data) {
            mongoData = data;
            publishedRequest.callback(mongoData);
        });*/

    };

    var removeAll = function(event, callback) {
        fetch('/removeAll')
            .then(function(json) {
                return json.json();
            })
            .then(function(response) {
               callback(response);
            });

        /*$.getJSON('/removeAll', function(data) {
            callback(data);
        });*/
    };

    var update = function(event, updateDetails) {
        var request = {
            query: {
                "firstName": updateDetails.oldString
            },
            update: {
                $set: {
                    "firstName": updateDetails.newString
                }
            }
        };
        $.getJSON('/update', request, function(data) {
            data.mongoData = mongoData;
            updateDetails.callback(data);
        });
    };

    return ClientMongo;
});