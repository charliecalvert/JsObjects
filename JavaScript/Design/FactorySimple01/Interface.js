// Constructor.
var Interface = function(name, methods) { 'use strict';
	if (arguments.length !== 2) {
		throw new Error("Interface constructor called with " + arguments.length	+
				"arguments, but expected exactly 2.");
	}

	this.name = name;
	this.methods = [];
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error("Method names must be strings.");
		}
		this.methods.push(methods[i]);
	}
};

// Static class method.
Interface.ensureImplements = function(instance, instanceType) {  'use strict';
	console.log("Interface ensureImplements called with: " + instanceType.name);
	for (var prop in instance) {		
		if ( !instance.hasOwnProperty( prop ) ) {
			console.log("Inherited property: " + prop);
		}		
		if ( instance.hasOwnProperty( prop ) ) {
			console.log("Native properties: " + prop);
		}
	}
	console.log("Interface: " + JSON.stringify(instanceType));
	if (arguments.length < 2) {
		throw new Error(arguments.length + " arguments passed, but expected 2.");
	}

	for (var i = 1, len = arguments.length; i < len; i++) {
		var objectToTest = arguments[i];
		console.log("Interface name: " + objectToTest.name);
		if (objectToTest.constructor !== objectToTest) {
			throw new Error(
					"Expect arguments two and above to be instances of Interface.");

		}

		console.log("methods: " + objectToTest.methods);
		for (var j = 0, methodsLen = objectToTest.methods.length; j < methodsLen; j++) { 
			var method = objectToTest.methods[j];
			if (!instance[method] || typeof instance[method] !== 'function') {
				throw new Error(objectToTest.name + " interface not found. " + method + " is missing.");
			}
		}
	}
};

exports.Interface = Interface;
