// Handle Ajax and maintain list of data 
define(function() {
    'use strict';

    let mongoData = [];

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

    const getDocument = function(event, request) {
        request.callback(mongoData[request.index]);
    };

    const emptyMongoData = function(event, callback) {
        mongoData = [];
        callback();
    };

    const insertNewDocument = function(event, callback) {
        console.log("insert New Document called");
        fetch('/insertJson')
            .then((response) => response.json())
            .then((newData) => {
                mongoData = mongoData.concat(newData.mongoDocument);
                callback(newData.mongoDocument, mongoData);
            });
    };

    const readAll = function(event, callback) {
        console.log("readAll called");
        fetch('/readAll')
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                callback(result)
            });
    };

    const readTwo = function(event, callback) {
        console.log("readTwo called");
        fetch('/readTwo')
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                callback(result)
            });
    };

    const readCountDocuments = function(event, publishedRequest) {
        console.log("readCountDocuments called");
        const request = {};
        request.numRequested = publishedRequest.numRequested;
        const url = '/readDocuments?numRequested=' + publishedRequest.numRequested;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                mongoData = result;
                publishedRequest.callback(mongoData);
            });
    };

    const removeAll = function(event, callback) {
        fetch('/removeAll')
            .then(function(json) {
                return json.json();
            })
            .then(function(response) {
               callback(response);
            });
    };

    const update = function(event, updateDetails) {
        const request = {
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