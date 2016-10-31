/**
 * Insert bulk.
 * If we read in a JSON file, then each object will be put in a separate document.
 */

function couchBulk(router, dbName, server) {
    'use strict';
    var fs = require('fs');
    var request = require('request');

    var putBulkData = function(bulkData, response) {
        var req = {
            'method': 'POST',
            'uri': server + '/' + dbName + '/_bulk_docs',
            'headers': {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            'json': bulkData
        };
        console.log(req);
        request.post(req, function(error, errorResponse, body) {
            console.log('Status code: ' + errorResponse.statusCode);
            if (!error && errorResponse.statusCode < 205) {
                console.log('Insert Data');
                console.log(body);
                response.send({
                    'ok': true,
                    'result': 'success',
                    'data': body
                });
            } else {
                // console.log(showJson(response.body));
                console.log(errorResponse.body);
                response.send({
                    'result': 'error',
                    'data': errorResponse.body
                });
            }
        });
    };

    router.get('/insertBulk', function(request, response) {

        console.log('bulk data');
        var fileName = request.query.fileName;
        var record = fs.readFile(fileName, 'utf8', function(err, json) {
            console.log('Reading file');
            console.log(json);
            putBulkData(JSON.parse(json), response);
        });
    });

}

module.exports = couchBulk;
