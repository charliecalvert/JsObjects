/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, devel: true, strict: true, node: true */

var CouchCode = (function() {
    'use strict';

    var fs = require('fs');
    var nano = null;
    // var nano = require('nano')('http://ccalvert:foobar@127.0.0.1:5984');

    function CouchCode() {
        var data = fs.readFileSync('config.json');
        data = JSON.parse(data);
        nano = require('nano')(data.nanoUrl);
    }

    CouchCode.prototype.getCouchUrl = function() {
        return nano.config.url;
    };

    var makeDatabase = function(dbName, func) {
        console.log('MakeDatabase: ' + dbName);
        nano.db.create(dbName, function(err, body) {
            if (!err) {
                console.log('Database creation successful');
                func();
            } else {
                console.log('Could not create database');
                func(err);
            }
        });
    };

    CouchCode.prototype.createDatabase = function(dbName, func) {
        nano.db.list(function(error, body) {
            var dbFound = false;
            // body is an array
            if (!error) {
                body.forEach(function(db) {
                    console.log(db);
                    if (db === dbName) {
                        console.log('database exists');
                        dbFound = true;
                    }
                });
            } else {
                reportErrorPrivate(error);
                return;
            }

            // If dbName not found, create database
            if (!dbFound) {
                makeDatabase(dbName, func);
            } else {
                func();
            }
        });
    };

    CouchCode.prototype.readDoc = function(response, docName, dbName) {
        var prog = nano.db.use(dbName);

        prog.get(docName, function(error, existing) {
            if (!error) {
                console.log(existing);
                response.send(existing);
            } else {
                console.log(error);
                response.send(500, error);
            }
        });
    };

    var doInsert = function(response, data, docName, dbName) {
        console.log('doInsert called with database: ' + dbName);
        console.log('doInsert called with document: ' + docName);
        console.log('doInsert called with data: ' + data);
        var prog = nano.db.use(dbName);
        prog.insert(data, docName, function(err, body) {
            console.log('In doInsert callback');
            if (!err) {
                console.log(body);
                if (response) {
                    response.send({ Result: 'Success' });
                }
                return;
            } else {
                console.log(err);
                if (response) {
                    response.send(500, err);
                }
                return;
            }
        });
    };

    CouchCode.prototype.sendToCouch = function(
        response,
        data,
        docName,
        dbName
    ) {
        console.log('Send to Couch docName: ' + docName);
        console.log('Send to Couch dbName: ' + dbName);
        var prog = nano.db.use(dbName);
        prog.get(docName, function(error, existing) {
            if (!error) {
                console.log('Document exists. Doing Update!');
                console.log(existing._rev);
                data._rev = existing._rev;
                doInsert(response, data, docName, dbName);
            } else {
                console.log('Document does not exist. Doing insert.');
                doInsert(response, data, docName, dbName);
            }
        });
    };

    /**
     * If rev is null, this is an insert, else, it is an update
     * See the attachUpdateHtml handler below
     */
    var doAttachInsert = function(rev, response, docName, doc, dbName) {
        var prog = nano.db.use(dbName);
        prog.attachment.insert(
            docName,
            docName,
            doc,
            'text/html',
            rev,
            function(err1, body) {
                if (!err1) {
                    console.log('Attach Insert succeeded');
                    if (response) {
                        response.send({ Result: 'Success' });
                    }
                } else {
                    console.log(err1);
                    if (response) {
                        err1.p282special =
                            'Document conflict means document already exists. Try an update.';
                        response.send(500, err1);
                    }
                }
            }
        );
    };

    CouchCode.prototype.couchAttach = function(response, docName, doc, dbName) {
        console.log('/couchAttach called');
        var prog = nano.db.use(dbName);
        prog.get(docName, function(error, existing) {
            if (!error) {
                console.log('Attach Doc Exists: ' + existing._rev);
                doAttachInsert(
                    { rev: existing._rev },
                    response,
                    docName,
                    doc,
                    dbName
                );
            } else {
                console.log('New Attach Document');
                doAttachInsert(null, response, docName, doc, dbName);
            }
        });
    };

    CouchCode.prototype.getAttachedHtml = function(response, docName, dbName) {
        console.log('getAttachedHtml called');
        var prog = nano.db.use(dbName);
        prog.attachment.get(docName, docName + '.html', function(error, body) {
            if (!error) {
                console.log('Success getting Attached.');
                if (response) {
                    response.send(body);
                }
            } else {
                console.log('Error');
                reportErrorPrivate(error);
                if (response) {
                    response.send(500, error);
                }
            }
        });
    };

    var reportErrorPrivate = function(error) {
        console.log('==========================');
        console.log('Error: ' + error.error);
        console.log('Status Code: ' + error['status_code']);
        console.log('Reason: ' + error.reason);
        console.log('Description: ' + error.description);
    };

    CouchCode.prototype.reportError = function(error) {
        reportErrorPrivate(error);
    };

    return CouchCode;
})();

exports.couchCode = new CouchCode();
