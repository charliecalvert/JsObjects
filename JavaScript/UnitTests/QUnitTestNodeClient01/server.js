/**
 * @author Charlie
 */

var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// We need this here to make POST call work
app.use(express.bodyParser());

app.get('/', function(req, res) {
    'use strict';
    var html = fs.readFileSync('Public/index.html');
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
});


app.post('/addToFive', function(request, response) {
    'use strict';
    console.log("AddToFive called");

    response.send({
        result: "Success",
        value: newNumber
    });
});

app.get('/writeJson', function(request, response) {
    'use strict';
    console.log('writeJson called: ' + JSON.stringify(request.query));
    for (var props in request.query) {
        console.log(props);
    }
    var data = JSON.stringify(request.query.names);

    fs.writeFileSync('Data.json', data);
    response.send({
        Result: "Success"
    });
});

app.use("/", express.static(__dirname + '/Public'));

app.listen(port);
console.log('Listening on port :' + port);
