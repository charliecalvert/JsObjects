/**
 * @name Couch
 * @author Charlie Calvert
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
var setServer = require('./set-server');
console.log('Couch attaching to database on: ', setServer.serverUrl);
var nano = require('nano')(setServer.serverUrl);

var dbName = setServer.dbName;
var views = require('./CouchViews')(router, nano, dbName);
var designDocs = require('./CouchDesignDocs')(router, nano, dbName);

router.get('/databaseName', function(request, response) {
    'use strict';
    console.log('databaseName route called. Query is:', request.query);
    if (request.query.newDbName) {
        var newDbName = request.query.newDbName;
        console.log(typeof newDbName);
        if ((newDbName.length > 0) && (typeof newDbName === 'string')) {
            console.log('setting new database name', newDbName);
            dbName = newDbName;
        }
    }
    response.send({
        'currentDatabaseName': dbName
    });
});

router.get('/listDb', function(request, response) {
    'use strict';
    nano.db.list(function(err, body) {
        if (err) {
            response.status(500).send(err);
            //throw err;
        }
        response.status(200).send(body);
        body.forEach(function(db) {
            console.log(db);
        });
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
