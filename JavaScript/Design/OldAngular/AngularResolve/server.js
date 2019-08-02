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

http.listen(30025, function(){
  "use strict";
  console.log('listening on *:30025');
});