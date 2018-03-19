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
                mongoData = mongoData.concat(newData.mongoDocument.ops);
                callback(newData.mongoDocument.ops, mongoData);
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

        // from: https://stackoverflow.com/a/1714899/253576
        const urlEncode = function(obj, prefix) {
            const str = [];
            for (let p in obj) {
                if (obj.hasOwnProperty(p)) {
                    const k = prefix ? prefix + "[" + p + "]" : p,
                        v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        urlEncode(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        };

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

        const urlEncodedRequest = urlEncode(request);
        console.log(urlEncodedRequest); //'query[firstName]=Thomas&update[$set][firstName]=Tom')
        fetch('http://localhost:30025/update?' + urlEncodedRequest)

            .then(function(json) {
                return json.json();
            })
            .then(function(response) {
                response.mongoData = mongoData;
                updateDetails.callback(response);
            });

    };


    return ClientMongo;
});