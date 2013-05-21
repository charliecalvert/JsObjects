/*jshint devel: true, browser: true, jquery: true, strict: true, node: true, es5:true */
/*global emit:true */

var express = require('express');
var app = express();
var fs = require('fs');
// See this: http://mahoney.eu/2012/05/23/couchdb-cookie-authentication-nodejs-nano/#.UZpztbXrw6o

//var nano = require('nano')('http://192.168.2.21:5984');
//var nano = require('nano')('http://ccalvert:foobar@192.168.2.21:5984');
var nano = require('nano')('http://ccalvert:foobar@localhost:5984');

var port = process.env.PORT || 30025;

// var fileName = 'person.json';

app.get('/', function(req, res) { 'use strict';
    var html = fs.readFileSync('public/index.html');
    res.writeHeader(200, {
        "Content-Type" : "text/html"
    });
    res.end(html);
});

var dbName = 'prog28204';
var docName = 'doc03';

var firstAndLast = function(doc) {'use strict';
    if (doc.firstName && doc.lastName) {
        var name = doc.firstName + ' ' + doc.lastName;
        emit(doc._id, name);
    }
};

var lastOnly = function(doc) {'use strict';
    if (doc.firstName && doc.lastName) {
        var name = doc.lastName;
        emit(doc._id, name);
    }
};


app.get('/designDoc', function(request, response) { 'use strict';
    console.log("Design Doc Called");

    var prog = nano.db.use(dbName);
    prog.insert({
        "views" : {
            "firstAndLast" : {
                "map" : firstAndLast
            }
        }
    }, '_design/people', 
    function(error, body) {
        if (!error) {
            console.log(body);
            response.send({
                 'Result' : 'Success',
                 'body': body
            });
        } else {
            console.log("error: " + error);
            response.send({
                 'Result' : 'Failure',
                 'body': error
            });
        }
    });
    
});

app.get('/view01', function(request, response) { 'use strict';
    console.log("view Called");

    var prog = nano.db.use(dbName);
    prog.view('people', 'first_and_last', function(err, body) {
        if (!err) {
            var result = [];
            body.rows.forEach(function(doc) {
                result.push(doc);
                console.log(doc.value);
            });
            response.send(result);
        } else {
            console.log(err);
        }
    });
});

function insertAndCreateNew(response) {'use strict';
    console.log('create database');
    nano.db.create(dbName, function(err, body) {
        if (!err) {
            console.log(body);
        } else {
            console.log('Could not create database');
            console.log(err);
        }        
    });
    
    console.log('use database');
    var prog = nano.db.use(dbName);

    prog.insert({
        firstName : 'Suzie',
        lastName : 'Fredrick',
        age : 38
    }, docName, function(err, body) {
        if (!err) {
            console.log(body);
            response.send({
                 'Result' : 'Success'
             });
        } else {
            console.log(err);
            response.send({'Result': err });
        }
        
    });
}

app.get('/create', function(request, response) { 'use strict';
    console.log('create called.');
    insertAndCreateNew(response);
});

app.get('/read', function(request, response) { 'use strict';
    console.log('Read called: ' + JSON.stringify(request.query));

    var prog = nano.db.use(dbName);
    prog.get(request.query.docName, {
        revs_info : true
    }, function(err, body) {
        if (!err) {
            console.log(body);
            response.send(body);
        }
    });
});

app.get('/docNames', function(request, response) { 'use strict';
    // var url = 'http://localhost:5984/prog28202/_all_docs';
    var prog = nano.db.use(dbName);
    var result = [];
    prog.list(function(err, body) {
        if (!err) {
            body.rows.forEach(function(doc) {
                console.log(doc);
                result.push(doc.key);
            });
            console.log(result);
            response.send(result);
        } else {
            console.log(err);
            response.send(err);
            return;
        }
    });
});

app.get('/write', function(request, response) { 'use strict';
    console.log('Write called: ' + request.query);
    var person = request.query;
    var personString = JSON.stringify(person, null, 4);
    console.log('PersonString: ' + personString);

    var prog = nano.db.use(dbName);
    prog.insert(person, person.docName, function(err, body) {
        if (!err) {
            console.log(body);
        } else {
            console.log(err);
            response.send(err);
            return;
        }
    });
    response.send({
        'Result' : 'Success'
    });
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port); 