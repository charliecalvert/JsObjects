/**
 * New node file
 */

var BaseObject = (function() {
	'use strict';

	function BaseObject() {
	}

	BaseObject.prototype.firstName = "Qux";

	return BaseObject;
}());

var ChildObject = (function() {
	'use strict';

	function ChildObject() {
	}

	ChildObject.prototype = new BaseObject();
	
	ChildObject.prototype.lastName = "Garply";

	return ChildObject;
}());

$(document).ready(function() {
	var childObject = new ChildObject();
	console.log(childObject.firstName);
	console.log(childObject.lastName);
})