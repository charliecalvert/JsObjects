const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const fs = require('fs');

const port = process.env.npm_package_config_port || 30026;

console.log(port);

const fileName = 'person.json';

app.get('/', function(req, res) {
    'use strict';
    const html = fs.readFileSync('public/index.html');
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.end(html);
});


app.get('/read', function(request, response) {
    'use strict';
    console.log('Read called.');
    var obj;

    function readData(err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        response.send(obj);
    }

    // Asynch call 
    fs.readFile(fileName, 'utf8', readData);
});

app.post('/write', function(request, response) {
    'use strict';
    console.log('Write called: ' + request.body);
    const person = request.body;
    const personString = JSON.stringify(person, null, 4);
    console.log('PersonString: ' + personString);
    fs.writeFile(fileName, personString, 'utf8', function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    response.send({"result": "success", "person": request.body});
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);
