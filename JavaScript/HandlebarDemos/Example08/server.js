/**
 * @author Charlie Calvert
 * 
 * Refernces:
 * 	http://dailyjs.com/2012/01/26/effective-node-modules/
 */
 
/*jshint browser: true, devel: true, strict: true */
/*global require: true, process: true */

var express = require('express');
var app = express();

// app.use("/Library", express.static('/Library'));

var templater = require('./Library/Templater');

console.log(templater);

var port = process.env.PORT || 30025;


app.get('/', function(request, response) { 'use strict';
	var htmlTemplate = templater.template;
	var html = htmlTemplate.addNames(__dirname + '/Public/index.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end(html);
});

app.use("/Public", express.static(__dirname + '/Public'));


app.listen(port);
console.log('Listening on port :' + port);