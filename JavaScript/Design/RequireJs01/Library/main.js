/**
 * @author Charlie Calvert
 * @description Demonstrate how to use require and append items to list without jQuery
 */

function addToList(list, value) {
	var listItem = document.createElement("li");
	var textNode = document.createTextNode(value);
	listItem.appendChild(textNode);
	list.appendChild(listItem);
}

define(function(require) {
	console.log('In define');

	var list = document.getElementById("results");

	var getNums = require('GetNine');
	addToList(list, getNums.getNine());
	addToList(list, getNums.getEight());

	var convert = require('Convert');
	addToList(list, convert.feetInMile);
	addToList(list, convert.milesToFeet(1));
	addToList(list, convert.milesToFeet(2));
	addToList(list, convert.milesToFeet(10));

	var exportMe = require('Exporter');
	addToList(list, exportMe());
});


// "Library/jas/jasmine.js", "Library/jas/jasmine-html.js", 
// 	"Library/jas/boot.js",