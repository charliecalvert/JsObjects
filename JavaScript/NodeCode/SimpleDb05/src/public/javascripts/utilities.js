var fs = require('fs');
var uuid = require('node-uuid');

var Utilities = function(){};

// The file keys.config contains your AWS key for use with 
// SimpleDb. It is a comma delimited file with two items in 
// it. The file has one line, no spaces, one comma.
// Like this: YourKey,YourSecretKey
Utilities.prototype.readKeyFile = function()
{
	fileContent = fs.readFileSync('keys.config', 'utf8');	
	keys = fileContent.toString().replace(/^\uFEFF/,'').split(',');
	keys[0] = keys[0].trim();
	keys[1] = keys[1].trim();
	return keys;
};

Utilities.prototype.getUuid = function() {
	return uuid.v4();
};


exports.utils = new Utilities();
