/**
 * Created by charlie on 10/30/16.
 */

function CouchDatabase(router, nano, dbName) {

    router.get('/createDb', function (request, response) {
        'use strict';
        console.log('create called.');
        nano.db.create(dbName, function (err, body) {
            if (!err) {
                body.data = [{"result": "Database created", "dbName": dbName}];
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

    router.get('/deleteDb', function (request, response) {
        'use strict';
        nano.db.destroy(dbName, function (err, body) {
            if (err) {
                console.log(err);
                response.status(err.statusCode).send(err)
            } else {
                body.data = [{result: 'Database deleted', dbName: dbName}];
                response.status(200).send(body);
            }
        });
    });

}

module.exports = CouchDatabase;