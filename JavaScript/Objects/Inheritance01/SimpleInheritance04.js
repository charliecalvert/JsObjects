/**
 * New node file
 */

var PropertyObject = (function() {
	'use strict';

	function PropertyObject() {
	}

	PropertyObject.prototype.withValue = function(value) {
		var d = this.withValue.d || (this.withValue.d = {
			enumerable : false,
			writable : false,
			configurable : false,
			value : null
		});
		d.value = value;
		return d;
	}

	return PropertyObject;
}());

var PersonObject = (function() {
	'use strict';	
	
	function PersonObject(firstName, lastName) {		
		Object.defineProperty(this, 'firstName', this.withValue(firstName));
		Object.defineProperty(this, 'lastName', this.withValue(lastName));
	}
	
	PersonObject.prototype = new PropertyObject();

	return PersonObject;
})();

$(document).ready(function() {
	var person = new PersonObject("Sue", "Paul");
	console.log(person.firstName)
})