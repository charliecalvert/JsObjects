/**
 * @author Charlie Calvert
 */
var fs = require('fs');
var handlebars = require('handlebars');

/* jshint jquery:true, browser: true, strict: true */
/* global Handlebars: false */

var App = (function() {	'use strict';

	function App() {	
		addNames();
	}

	var writeHtml = function(fileName, data) {
		fs.writeFile(fileName, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("JSON saved to " + fileName);
			}
		});
	}

	// Please not that we convert to a string.
	var readHtml = function() {
		return String(fs.readFileSync('index.html'));
	}

	var addNames = function(initFirstName, initLastName) {
		var script = readHtml();
		// console.log(script);

		var template = handlebars.compile(script);

		var result = template({
			MyStuff : 'This is what we insert.',
			OtherStuff : 'This is the other stuff'
		});

		writeHtml('upLoadMe.html', result);
	}
	
	return App;

})();

new App();