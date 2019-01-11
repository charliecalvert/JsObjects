/**
 * @name CouchDesignDoc
 */

/* globals emit: true */

function designDocs(router, nano, dbName) {
    'use strict';

    var npcsBulk = function(doc) {
        if (doc._id !== 'npcsDoc') {
            emit(doc._id, doc);
        }
    };

    function createDesignDocument(designDocument, designName, response) {
        var nanoDb = nano.db.use(dbName);
        nanoDb.insert(designDocument, designName, function(error, body) {
            if (!error) {
                var result = {
                    ok: true,
                    data: body
                };
                console.log(result);
                response.send(result);
            } else {
                console.log('error: ' + error);
                response.send(error);
            }
        });
    }

    router.get('/designDoc', function(request, response) {
        console.log('Design Doc Called');

        var designName = '_design/game';
        var designDocument = {
            views: {
                npcsBulk: {
                    map: npcsBulk
                }
            }
        };

        createDesignDocument(designDocument, designName, response);
    });
}

module.exports = designDocs;
