/**
 * @author Charlie Calvert
 */
 
/*jshint browser: true, devel: true, strict: true */
/*global require: true, process: true */

var fs = require('fs');
var handlebars = require('handlebars');
var express = require('express');
var app = express();

var port = process.env.PORT || 30025;

var Templater = (function() {'use strict';

	function Templater() {	
	}

	// Please not that we convert to a string.
	var readHtml = function() {
		return String(fs.readFileSync('index.html'));
	};

	Templater.prototype.addNames = function() {
		var script = readHtml();
		// console.log(script);

		var template = handlebars.compile(script);

		var result = template({
			MyStuff : 'This is what we insert.',
			OtherStuff : 'This is the other stuff'
		});

		return result;
	};
	
	return Templater;

})();

app.get('/', function(request, response) { 'use strict';
	var templater = new Templater();
	var html = templater.addNames();
	response.writeHead(200);
	response.end(html);
});

// app.use("/Public", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);