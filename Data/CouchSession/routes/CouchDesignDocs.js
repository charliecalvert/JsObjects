function designDocs(router, nano, dbName) {
    'use strict';

    var elfSessions = function(doc) {
        if (doc.collectionName === 'sessions') {
            emit(doc._id, doc);
        }
    };

    var elfSessionStore = function(doc) {
        if (doc.collectionName === 'sessions') {
            emit(doc._id, doc);
        }
    };

    var elfSessionExpires = function(doc) {
        if (doc.collectionName == 'sessions' && doc.expires) {
            emit(doc.expires);
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

        var designName = '_design/elf-session';
        var designDocument = {
            views: {
                'elf-sessions': {
                    map: elfSessions
                },
                'elf-session-store': {
                    map: elfSessionStore
                },
                'elf-expires': {
                    map: elfSessionExpires
                }
            }
        };

        createDesignDocument(designDocument, designName, response);
    });
}

module.exports = designDocs;
