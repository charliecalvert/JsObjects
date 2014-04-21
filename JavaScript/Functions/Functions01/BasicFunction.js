var variable00 = 'variable00';
var func01 = function() { 'use strict'; };

function func02() { 'use strict'; }

exports.basicFunction = function() {
	'use strict';
	console.log("variable00: " + variable00);
	console.log("func01.name: " + func01.name);
	console.log("type of func01.name: " + typeof func01.name);	
	console.log("func02.name: " + func02.name);
	console.log("type of func02.name: " + typeof func02.name);
};