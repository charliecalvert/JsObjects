/**
 * @author Charlie Calvert
 */

exports.config = {
	seleniumAddress : 'http://127.0.0.1:4444/wd/hub',	
	capabilities: {	'browserName': 'chrome'	},
	chromeDriver: 'C:/src/batch/chromedriver.exe',
	specs : ['Test01.js'],
	jasmineNodeOpts : {
		onComplete : null,
		isVerbose : true,
		showColors : true,
		includeStackTrace : true,
		defaultTimeoutInterval : 30000
	}
}; 