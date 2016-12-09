function views(router, nano, dbName) {
    'use strict';
    router.get('/viewNpcsBulk', function(request, response) {
        console.log('/viewNpcsBulk called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);
                var result = {
                    docs: []
                };
                body.rows.forEach(function(doc) {
                    result.docs.push(doc.value);
                });
                response.send(result);
            } else {
                console.log(err);
                response.send(500, err);
            }
        });
    });
}

module.exports = views;
