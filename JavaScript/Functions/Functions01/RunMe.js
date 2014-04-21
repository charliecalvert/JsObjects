var basicScope = require('./BasicScope.js').BasicScope;
var basicFunction = require('./BasicFunction.js').basicFunction;

function startEnd(text) {
	console.log("== " + text + " =====");	
}

function divider(text) {
	console.log("=======================");
	console.log(">> " + text);	
	console.log("=======================");
}

divider('basicFunction');
basicFunction();
divider('basicScope');
basicScope();
startEnd("End");
