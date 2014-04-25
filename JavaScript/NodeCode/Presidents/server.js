var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;
app.use(express.bodyParser());

app.get('/', function(req, res) {
    'use strict';
    var html = fs.readFileSync('Public/TestPresidents.html');
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
});

app.post('/writePresident', function(request, response) {
    'use strict';
    console.log("writeJsonPostMargie called");
    console.log(request.body);
    var fileName = request.body.fileName;
    var json = request.body.data;
    console.log(fileName);

    json = JSON.stringify(json, null, 4);

    fs.writeFile(fileName, json, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + fileName);
            response.send({
                "success": "success"
            });
        }
    });
});

app.post('/writePresidents', function(request, response) {
    'use strict';
    console.log("writeJsonPostMargie called");
    console.log(request.body);
    var fileName = request.body.fileName;
    var json = request.body.data;
    console.log(fileName);

    // json = JSON.stringify(json, null, 4);

    fs.writeFile(fileName, json, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + fileName);
            response.send({
                "success": "success"
            });
        }
    });
});

app.get('/writeJsonGet', function(request, response) {
    'use strict';
    console.log("writeJsonGet called");
    console.log(request.query);
    console.log(request.url);
    console.log(request.method);
    console.log(request.params);
    console.log(request.params.length);
    var json = request.query.data;
    var fileName = request.query.fileName;

    // json = JSON.stringify(json, null, 4);

    fs.writeFile(fileName, json, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + fileName);
            response.send({
                "success": "success"
            });
        }
    });
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

app.use("/Public", express.static(__dirname + '/Public'));


app.listen(port);
console.log('Listening on port :' + port);
