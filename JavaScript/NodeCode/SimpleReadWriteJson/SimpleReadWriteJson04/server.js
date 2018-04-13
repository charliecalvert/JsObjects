const express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
    'use strict';
    var html = fs.readFileSync('public/index.html');
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
});


app.get('/read', function(request, response) {
    'use strict';
    console.log('Read called: ' + JSON.stringify(request.query));
    var obj;

    function readData(err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        response.send(obj);
    }

    // Asynch call 
    fs.readFile(request.query.fileName, 'utf8', readData);
});

app.get('/write', function(request, response) {
    'use strict';

    // We begin with some debug calls

    // View all the data that was sent
    console.log('Write called: ' + JSON.stringify(request.query, null, 4));

    console.log('Here are the properties passed in the request: ');
    for (var propertyName in request.query) {
        console.log(" -> " + propertyName);
    }

    // Find both pieces of data: 
    var person = request.query.person;
    var path = request.query.path;

    // Display both pieces of data separately
    var personString = JSON.stringify(person, null, 4);
    console.log('Path: ' + JSON.stringify(path));
    console.log('Person: ' + personString);

    // Now do our actual work of writing the file.
    // This assumes the path exists. See the mkdirp 
    // NPM library if you need to create directories
    fs.writeFile(path.fileName, personString, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('It\'s saved!', data);
    });

    // Send back a response
    response.send('{"result":"success"}');
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);
