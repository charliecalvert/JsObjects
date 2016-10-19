/**
 * New node file
 */

/*********************************************
 * Attach Methods
 ********************************************/

function couchAttach(router, nano, dbName) {
    'use strict';

    router.get('/attachPng', function(request, response) {

        console.log('/attachPng called');
        var fs = require('fs');

        fs.readFile('Images/rabbit.png', function(err, data) {
            if (!err) {
                var nanoDb = nano.db.use(dbName);
                nanoDb.attachment.insert('rabbit', 'rabbit.png', data, 'image/png', {
                    rev: '12-150985a725ec88be471921a54ce91452'
                }, function(err, body) {
                    if (!err) {
                        console.log(body);
                    } else {
                        console.log(err);
                    }
                });
            }
        });
    });

    /**
     * If rev is null, this is an insert, else, it is an update See the
     * attachUpdateHtml handler below
     */
    var insertAttachment = function(rev, response) {

        function nestedCallback(err1, body) {
            if (!err1) {
                console.log(body);
                response.send({
                    'Result': 'Success'
                });
            } else {
                console.log(err1);
                err1.p282special = 'Document conflict means document already exists. Try an update.';
		response.status(err.statusCode).send(err1);
            }
        }

        function callback(err, data) {
            if (!err) {
                var nanoDb = nano.db.use(dbName);
                var a = nanoDb.attachment;
                a.insert('attachMe', 'AttachMe.html', data, 'text/html', rev,
                    nestedCallback);
            } else {
		console.log(err);                
		response.status(err.statusCode).send(err);
            }
        }

        fs.readFile(__dirname + '/Templates/AttachMe.html', callback);
    };

    router.get('/attachHtml', function(request, response) {
        console.log('/attachHtml called');
        // Null means we are trying to do an insert
        insertAttachment(null, response);
    });

    router.get('/getAttachedHtml', function(request, response) {
        console.log('/getAttachedHtml called');

        var nanoDb = nano.db.use(dbName);
        nanoDb.attachment.get('attachMe', 'AttachMe.html', function(err, body) {
            if (!err) {
                console.log(body);
                response.send(body);
            } else {
                console.log(err);                
		response.status(err.statusCode).send(err);
            }
        });
    });

    router.get('/attachUpdateHtml', function(request, response) {
        console.log('/attachUpdate called');
        var nanoDb = nano.db.use(dbName);
        nanoDb.get('attachMe', function(error, existing) {
            if (!error) {
                console.log(existing);
                console.log(existing._rev);
                doInsert({
                    'rev': existing._rev
                }, response);
            } else {
                console.log(error);
                response.send(500, error);
            }
        });
    });

}

module.exports = couchAttach;
