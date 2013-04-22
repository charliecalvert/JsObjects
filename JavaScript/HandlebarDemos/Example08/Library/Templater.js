/**
 * @author Charlie Calvert
 */
 
var fs = require('fs');
var handlebars = require('handlebars');
 
var Templater = (function() {'use strict';

	function Templater() {	
	}

	// Please not that we convert to a string.
	var readHtml = function(fileName) {
		return String(fs.readFileSync(fileName));
	};

	Templater.prototype.addNames = function(fileName) {
		var script = readHtml(fileName);
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

exports.template = new Templater()    
