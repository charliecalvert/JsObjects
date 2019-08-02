var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  "use strict";
  res.sendFile(__dirname + '/index.html');
});

app.get('/dir', function(req, res) {
  res.send({ "dirName": __dirname });
});

var port = process.env.PORT || 30025;

http.listen(port, function(){
  "use strict";
  console.log('listening on ', port);
});