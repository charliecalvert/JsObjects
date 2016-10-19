/*******************************************************************************
 * Insert methods
 ******************************************************************************/

function insert(router, nano, dbName) {
    'use strict';
    var fs = require('fs');

    /**
     * This route assumes request contains the data to insert See insertFile if
     * you want to insert a file
     */
    router.get('/insert', function(request, response) {
        var queryString = JSON.stringify(request.query, null, 4);
        console.log('Insert called: ' + queryString);
        var query = request.query;

        var nanoDb = nano.db.use(dbName);
        nanoDb.insert(query, query.docName, function(err, body) {
            if (!err) {
                console.log(body);
                response.send(body);

            } else {
                console.log(err);
                response.send(err);
                return;
            }
        });
    });

    function insertFile(documentName, data, response) {
        console.log('insert file called');
        var nanoDb = nano.db.use(dbName);
        nanoDb.insert(data, documentName, function(err, body) {
            if (!err) {
                console.log(body);
                response.send({
                    'Result': 'Success'
                });
            } else {
                console.log(err);
                response.send(err);
                return;
            }
        });
    }

    // http://localhost:30025/insertFile?fileName=foo.json
    router.get('/insertFile', function(request, response) {
        console.log('Write called: ' + JSON.stringify(request.query));
        var query = request.query;
        var record = fs.readFile(query.fileName, 'utf8', function(err, json) {
            if (err) {
                console.log(err);
                response.send(err);
            } else {
                console.log('Read file: ', json);
                var pjson = JSON.parse(json);
                insertFile(pjson._id, pjson, response);
            }
        });
    });

}

module.exports = insert;
