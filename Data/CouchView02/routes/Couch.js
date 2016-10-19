/**
 * @name Couch
 * @author Charlie Calvert
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');

var servers = ['http://127.0.0.1:5984', 'http://192.168.2.19:5984'];
var serverIndex = 1;
var nano = require('nano')(servers[serverIndex]);

var dbName = 'couch_views';
var docName = 'phones';

var insert = require('./CouchInsert')(router, nano, dbName);
var views = require('./CouchViews')(router, nano, dbName);
var designDocs = require('./CouchDesignDocs')(router, nano, dbName);
var attach = require('./CouchAttach')(router, nano, dbName);
var couchBulk = require('./CouchBulk')(router, dbName, servers[serverIndex]);

router.get('/databaseName', function(request, response) {
    'use strict';
    console.log('\/databaseName called.');
    response.send({
        'Result': dbName
    });
});

router.get('/listDb', function(request, response) {
    'use strict';
    nano.db.list(function(err, body) {
        if (err) {
            throw err;
        }
        response.send(body);
        body.forEach(function(db) {
            console.log(db);
        });
    });
});

router.get('/createDb', function(request, response) {
    'use strict';
    console.log('create called.');
    nano.db.create(dbName, function(err, body) {
        if (!err) {
            console.log(body);
            response.status(200).send(body);
        } else {
            console.log('Could not create database');
            console.log(err);
            response.status(err.statusCode).send(err);
            return;
        }
    });
});

router.get('/deleteDb', function(request, response) {
    'use strict';
    nano.db.destroy(dbName, function(err, body) {
        if (err) {
            console.log(err);
            response.status(err.statusCode).send(err)
        } else {
            response.send(body);
        }
    });
});

router.get('/read', function(request, response) {
    'use strict';
    console.log('Read called: ' + JSON.stringify(request.query));

    var nanoDb = nano.db.use(dbName);
    nanoDb.get(request.query.docName, {
        revs_info: true
    }, function(err, body) {
        if (!err) {
            console.log(body);
            response.send(body);
        } else {
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
