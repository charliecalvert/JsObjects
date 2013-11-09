/**
 * @author Charlie Calvert
 */

exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',	
	capabilities: {	'browserName': 'chrome'	},
	chromeDriver: 'C:/src/batch/chromedriver.exe',
	specs : ['SimpleTest.js'],
	jasmineNodeOpts : {
		onComplete : null,
		isVerbose : true,
		showColors : true,
		includeStackTrace : true,
		defaultTimeoutInterval : 30000
	}
}; 