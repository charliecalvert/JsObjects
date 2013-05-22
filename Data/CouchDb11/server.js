/*jshint devel: true, browser: true, jquery: true, strict: true, node: true, es5:true */
/*global emit:true */

var express = require('express');
var app = express();
var fs = require('fs');
var templater = require('./Library/Templater');

// See this: http://mahoney.eu/2012/05/23/couchdb-cookie-authentication-nodejs-nano/#.UZpztbXrw6o
//var nano = require('nano')('http://192.168.2.21:5984');
//var nano = require('nano')('http://ccalvert:foobar@192.168.2.21:5984');
var nano = require('nano')('http://ccalvert:foobar@localhost:5984');
// var nano = require('nano')('http://127.0.0.1:5984');

var port = process.env.PORT || 30025;

// var fileName = 'person.json';

app.get('/', function(req, res) { 'use strict';
    var html = fs.readFileSync('Public/index.html');
    res.writeHeader(200, {
        "Content-Type" : "text/html"
    });
    res.end(html);
});

var dbName = 'prog28211';
var docName = 'doc01';

app.get('/databaseName', function(request, response) {'use strict';
	console.log("\/databaseName called.")
	response.send({ 'Result': dbName} );
});

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
                 'Result' : 'The document might already exist. ' + error
            });
        }
    });
    
});

app.get('/view01', function(request, response) { 'use strict';
    console.log("view Called");

    var prog = nano.db.use(dbName);
    prog.view('people', 'firstAndLast', function(err, body) {
        if (!err) {
            var result = [];
            body.rows.forEach(function(doc) {
                result.push(doc);
                console.log(doc.value);
            });
            var html = templater.template.addNames('Templates/Basic.html', result);
            response.send(html);
        } else {
            console.log(err);
            response.send(500, err);
        }
    });
});

app.get('/create', function(request, response) { 'use strict';
    console.log('create called.');
    nano.db.create(dbName, function(err, body) {
        if (!err) {
            console.log(body);
        } else {
            console.log('Could not create database');
            console.log(err);
            response.send(500, err);
            return;
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
        } else {
            var cscMessage = "No such record as: " + request.query.docName +
                ". Use a the Get Doc Names button to find " +
                "the name of an existing document."
            err.p282special = cscMessage;
        	response.send(500, err);
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
            response.send(500, err);
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

app.get("/attachPng", function(request, response) {'use strict';
   console.log('/attachPng called');
   var fs = require('fs');

    fs.readFile('Images/rabbit.png', function(err, data) {
        if (!err) {
            var prog = nano.db.use(dbName);
            prog.attachment.insert('rabbit', 'rabbit.png', data, 'image/png',
                { rev: '12-150985a725ec88be471921a54ce91452' }, function(err, body) {
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
 * If rev is null, this is an insert, else, it is an update
 * See the attachUpdateHtml handler below
 */
var doInsert = function(rev, response) {
    var fs = require('fs');

    fs.readFile(__dirname + '/Templates/AttachMe.html', function(err, data) {
        if (!err) {
            var prog = nano.db.use(dbName);
            prog.attachment.insert('attachMe', 'AttachMe.html', data, 'text/html', rev,
                function(err1, body) {
                if (!err1) {
                    console.log(body);
                    response.send({"Result":"Success"});
                } else {
                    console.log(err1);
                    err1.p282special = "Document conflict means document already exists. Try an update."
                    response.send(500, err1);
                }
            });
        } else {
            console.log(err);
            response.send(500, err);
        }
    }); 
}

app.get("/attachHtml", function(request, response) {'use strict';
   console.log('/attachHtml called');
   // Null means we are trying to do an insert
   doInsert(null, response);
});

app.get("/getAttachedHtml", function(request, response) {'use strict';
   console.log('/getAttachedHtml called');
   
   var prog = nano.db.use(dbName);
    prog.attachment.get('attachMe', 'AttachMe.html', function(err, body) {
        if (!err) {
            console.log(body);
            response.send(body);
        } else {
            console.log(err1);
            response.send(500, err);
        }   
    }); 
});

app.get("/attachUpdateHtml", function(request, response) {'use strict';
    console.log('/attachUpdate called');
    var prog = nano.db.use(dbName);
    prog.get('attachMe', function(error, existing) { 
        if(!error) { 
            console.log(existing);
            console.log(existing._rev);
            doInsert({ "rev":existing._rev }, response);
        }  else {
            console.log(error);
            response.send(500, error);
        }
    });
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/", express.static(__dirname + '/Library'));

app.listen(port);
console.log('Listening on port :' + port); 