var express = require('express');
var app = express();
var fs = require('fs');
// var nano = require('nano')('http://localhost:5984');
const setServer = require('../set-server');
const nano = require('nano')(setServer.userPassUrl('admin', 'foo'));
//const nano = require('nano')(setServer.serverUrl);
var port = process.env.PORT || 30025;

var fileName = 'person.json';

app.get('/', function (req, res) {
    var html = fs.readFileSync('public/index.html');
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end(html);
});

var dbName = 'couch_db_07';
var docName = 'doc02';

function insert(createResponse) {
    nano.db.create(dbName)
        .then(response => {
            var nanoDb = nano.db.use(dbName);

            return nanoDb.insert(
                {firstName: 'Suzie', lastName: 'Fredrick', age: 38},
                docName
            )
        })
        .then(response => {
            createResponse.send(response);
        })
}

app.get('/create', function (request, response) {
    console.log('create called.');
    insert(response);
    //response.send({result: 'success'});
});

app.get('/read', function (request, response) {
    console.log('Read called: ' + JSON.stringify(request.query, null, 4));

    var nanoDb = nano.db.use(dbName);
    nanoDb.get(docName, {revs_info: true}, function (err, body) {
        if (!err) {
            console.log(body);
            response.send(body);
        }
    });
});

app.use('/', express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);
