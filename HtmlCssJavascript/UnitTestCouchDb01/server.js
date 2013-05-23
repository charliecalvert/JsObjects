/**
 * @author Charlie Calvert
 */

/*jshint devel: true, jquery: true, strict: true, node: true */

var express = require('express');
var app = express();
var fs = require('fs');
var querystring = require('querystring');

//var nano = require('nano')('http://ccalvert:foobar@192.168.2.21:5984');
var nano = require('nano')('http://ccalvert:foobar@localhost:5984');
// var nano = require('nano')('http://127.0.0.1:5984');

var port = process.env.PORT || 30025;
var dbName = 'unit_test01';

// We need this here to make POST call work
app.use(express.bodyParser());

app.get('/', function(req, res) {'use strict';
    var html = fs.readFileSync('Public/index.html');
    res.writeHeader(200, {
        "Content-Type" : "text/html"
    });
    res.end(html);
});

app.get('/createDatabase', function(request, response) {
    nano.db.create(dbName, function(err, body) {
        if (!err) {
            console.log(body);
            response.send({"Result":"Success"});
        } else {
            console.log('Could not create database');
            console.log(err);
            response.send(500, err);
            return;
        }        
    });
});
    
var sendToCouch = function(response, data, docName) {'use strict';
    console.log('sendToCouch called: ' + data);

    var prog = nano.db.use(dbName);
    prog.insert(data, docName, function(err, body) {
        console.log('In sendToCouch callback');
        if (!err) {
            console.log(body);
            response.send({
                "Result" : "Success"
            });
        } else {
            console.log(err);
            response.send(500, err);
            return;
        }
    });
    response.send({
        'Result' : 'Success'
    });
};





app.get('/writeJson', function(request, response) {'use strict';

    console.log('writeJson called: ' + JSON.stringify(request.query));

    var dataInfo = JSON.parse(request.query.dataInfo);

    console.log('DataType: ' + dataInfo.dataType);
    // console.log(request.query.names);

    switch (dataInfo.dataType) {
        case 0:
            console.log('Sent datatype 0');
            var names = querystring.parse(request.query.names);
            sendToCouch(response, querystring.parse(request.query.names), dataInfo.docName);
            response.send({"Result":"Success"});
            break;
        case 1:
            console.log('Sent datatype 1');
            sendToCouch(response, querystring.parse(request.query.npcs), dataInfo.docNameNpcs);
            sendToCouch(response, querystring.parse(request.query.person), dataInfo.docNamePerson);
            sendToCouch(response, querystring.parse(request.query.grid), dataInfo.docNameGrid);
            break;
        default:
            console.log('Unknown dataType sent: ' + dataInfo.dataType);
    }
    console.log('Exiting Get WriteJson');
});

app.post('/writeJson', function(request, response) {'use strict';
    console.log('writeJson called: ' + JSON.stringify(request.body));
    for (var props in request.body) {
        console.log(props);
    }

    var dataInfo = JSON.parse(request.body.dataInfo);

    console.log('DataType: ' + dataInfo.dataType);
    switch (dataInfo.dataType) {
        case 0:
            console.log('Sent datatype 0');
            sendToCouch(response, JSON.parse(request.body.names), dataInfo.docName);
            break;
        case 1:
            console.log('Sent datatype 1');
            sendToCouch(response, querystring.parse(request.body.npcs), dataInfo.docNameNpcs);
            sendToCouch(response, querystring.parse(request.body.person), dataInfo.docNamePerson);
            sendToCouch(response, querystring.parse(request.body.grid), dataInfo.docNameGrid);
            break;
        default:
            console.log('Unknown dataType sent: ' + dataInfo.dataType);
    }
    console.log('Leaving WriteJsonPost');

});

app.use("/", express.static(__dirname + '/Public'));
app.use("/", express.static(__dirname + '/SaveData'));

app.listen(port);
console.log('Listening on port :' + port); 