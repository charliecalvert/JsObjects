var basicScope = require('./BasicScope.js').BasicScope;
var basicFunction = require('./BasicFunction.js').basicFunction;

function startEnd(text) {
    'use strict';
    console.log("== " + text + " =====");
}

function divider(text) {
    'use strict';
    console.log("=======================");
    console.log(">> " + text);
    console.log("=======================");
}

divider('basicFunction');
basicFunction();
divider('basicScope');
basicScope();
startEnd("End");
