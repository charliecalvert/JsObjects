var express = require('express');
var app = express();

var port = process.env.PORT || 30025;

app.use("/", express.static(__dirname + '/Public'));

app.listen(port);
console.log('Listening on port :' + port);
