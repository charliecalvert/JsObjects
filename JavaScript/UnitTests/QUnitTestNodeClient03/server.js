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

app.get('/writeJson', function(request, response) {
    'use strict';
    //debugger;
    console.log('writeJson called: ' + JSON.stringify(request.query));
    for (var props in request.query) {
        console.log(props);
    }

    var dataInfo = JSON.parse(request.query.dataInfo);

    console.log('DataType: ' + dataInfo.dataType);
    var saveDir = __dirname + '/SaveData/';
    switch (dataInfo.dataType) {
        case 0:
            console.log('Sent datatype 0');
            var names = JSON.parse(request.query.names);
            fs.writeFileSync(saveDir + dataInfo.fileName, JSON.stringify(names, null, 4));
            break;
        case 1:
            console.log('Sent datatype 1');
            fs.writeFileSync(saveDir + dataInfo.fileNameNpcs, request.query.npcs);
            fs.writeFileSync(saveDir + dataInfo.fileNamePerson, request.query.person);
            fs.writeFileSync(saveDir + dataInfo.fileNameGrid, request.query.grid);
            break;
        default:
            console.log('Unknown dataType sent: ' + dataInfo.dataType);
    }
    console.log('Sending response');
    response.send({
        Result: "Success"
    });
});


app.post('/writeJson', function(request, response) {
    'use strict';
    console.log('writeJson called: ' + JSON.stringify(request.body));
    for (var props in request.body) {
        console.log(props);
    }

    var dataInfo = JSON.parse(request.body.dataInfo);

    console.log('DataType: ' + dataInfo.dataType);
    var saveDir = __dirname + '/SaveData/';
    switch (dataInfo.dataType) {
        case 0:
            console.log('Sent datatype 0');
            var names = JSON.parse(request.body.names);
            fs.writeFileSync(saveDir + dataInfo.fileName, JSON.stringify(names, null, 4));
            break;
        case 1:
            console.log('Sent datatype 1');
            fs.writeFileSync(saveDir + dataInfo.fileNameNpcs, request.body.npcs);
            fs.writeFileSync(saveDir + dataInfo.fileNamePerson, request.body.person);
            fs.writeFileSync(saveDir + dataInfo.fileNameGrid, request.body.grid);
            break;
        default:
            console.log('Unknown dataType sent: ' + dataInfo.dataType);
    }
    console.log('Sending response');
    response.send({
        Result: "Success"
    });
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/", express.static(__dirname + '/SaveData'));

app.listen(port);
console.log('Listening on port :' + port);
