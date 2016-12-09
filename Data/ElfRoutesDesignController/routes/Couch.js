/**
 * @name Couch
 * @author Charlie Calvert
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
var setServer = require('./set-server');
var nano = require('nano')(setServer.serverUrl);

var dbName = setServer.dbName;

var couchBulk = require('./CouchBulk')(router, dbName, setServer.serverUrl);
var couchDatabase = require('./CouchDatabase')(router, nano, dbName);
//var insert = require('./CouchInsert')(router, nano, dbName);
var designDocs = require('./CouchDesignDocs')(router, nano, dbName);
var views = require('./CouchViews')(router, nano, dbName);
//var attach = require('./CouchAttach')(router, nano, dbName);


router.get('/databaseName', function(request, response) {
    'use strict';
    console.log('databaseName route called.');
    response.send({
        'currentDatabaseName': dbName
    });
});

router.get('/listDb', function(request, response) {
    'use strict';
    nano.db.list(function(err, body) {
        console.log('Error in listDB', err);
        if (err) {
            response.status(500).send(err);
            return;
        }
        console.log('Success in listDB', body);
        response.status(200).send(body);
        if (body) {
            body.forEach(function(db) {
                console.log(db);
            });
        }
    });
});

router.get('/read', function(request, response) {
    'use strict';
    console.log('Read called: ' + JSON.stringify(request.query));

    var nanoDb = nano.db.use(dbName);
    console.log('Nano Used: ', dbName);
    nanoDb.get(request.query.docName, {
        revs_info: true
    }, function(err, body) {
        if (!err) {
            console.log(body);
            response.send(body);
        } else {
            console.log('Error in /read', err);
            var cscMessage = 'No such record as: ' + request.query.docName +
                '. Use a the Get Doc Names button to find ' +
                'the name of an existing document.';
            err.p282special = cscMessage;
            response.status(500).send(err);
        }

    });
});

router.get('/docNames', function(request, response) {
    'use strict';
    // var url = 'http://localhost:5984/prog28202/_all_docs';
    var nanoDb = nano.db.use(dbName);
    var result = [];
    nanoDb.list(function(err, body) {
        if (!err) {
            body.rows.forEach(function(doc) {
                console.log(doc);
                result.push(doc.key);
            });
            console.log(result);
            response.send(result);
        } else {
            console.log(err);
            response.status(500).send(err);
            return;
        }
    });
});

module.exports = router;
