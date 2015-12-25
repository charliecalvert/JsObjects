var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();


var port = process.env.PORT || 30025;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    'use strict';
    var html = fs.readFileSync('public/index.html');
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
});


app.get('/read', function(req, res) {
    'use strict';
    var obj;

    function readData(err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    }

    // Asynch call 
    fs.readFile('presidents.json', 'utf8', readData);
});

app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);
