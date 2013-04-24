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


Templater.prototype.addTable = function(fileName, tableName) {
		var mainFile = readHtml(fileName);
		var table = readHtml(tableName);

		var template = handlebars.compile(mainFile);

		var result = template({
			MyTable : table
		});

		return result;
	};
		
	return Templater;

})();

exports.template = new Templater()    
