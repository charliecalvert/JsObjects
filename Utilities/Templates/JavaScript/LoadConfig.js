/**
 * @author Charlie
 */

var fs = require('fs');
var os = require('os');

function getConfigName() { 'use strict';
	var configName = "MongoTalk.json";
	if (os.platform() === 'darwin') {
		configName = process.env.HOME + '/Config/MongoTalk.json';
	} else if (os.platform() === 'linux') {
		configName = process.env.HOME + '/Config/MongoTalk.json';
	} else if (os.platform() === 'win32') {		
		configName = process.env.USERPROFILE + "\\Config\\MongoTalk.json";
	}
	return configName;
}

function reportError(err) { 'use strict';
	console.log("*********************************");
	console.log(err);
	console.log("*********************************");
	console.log("Error condition in LoadConfig.js!");
	console.log("This program requires a config file");
	console.log("Please put MongoTalk.json somewhere we can find it.");
	console.log("Contrl-C to abort");
	console.log("Error condition!");
	console.log("*********************************");
}

function loadConfig(callback) {
	'use strict';
	console.log("load config called");
	var configName = getConfigName();
	try {
		fs.readFile(configName, function(err, urls) {
			if (err) {
				reportError(err);
			} else {
				callback(urls);
			}		
		});
	} catch(e) {
		console.log(e);
	}
}

exports.loadConfig = loadConfig;