function views(router, nano, dbName) {
    'use strict';

    router.get('/viewSessions', function(request, response) {
        console.log('/viewSessions called', request.query, dbName);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(
            err,
            body
        ) {
            if (!err) {
                console.log(body);
                response.send({
                    name: 'viewSessions',
                    docs: body
                });
            } else {
                console.log(err);
                response.status(err.statusCode).send(err);
            }
        });
    });

    router.get('/elfSessionStoreExpires', function(request, response) {
        console.log('/getExpires called', request.query, dbName);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view('elf-session', 'elf-expires', function(err, body) {
            if (!err) {
                console.log(body);
                response.send({
                    name: 'viewSessions',
                    docs: body
                });
            } else {
                console.log(err);
                response.status(err.statusCode).send(err);
            }
        });
    });

    router.get('/session-couch-expires', function(request, response) {
        console.log('/getExpires called', request.query, dbName);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view('connect-sessions', 'expires', function(err, body) {
            if (!err) {
                console.log(body);
                response.send({
                    name: 'viewSessions',
                    docs: body
                });
            } else {
                console.log(err);
                response.status(err.statusCode).send(err);
            }
        });
    });
}

module.exports = views;
