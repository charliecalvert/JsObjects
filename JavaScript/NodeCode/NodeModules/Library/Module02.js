var MyObject = (function() {'use strict';
	
	// Private Data
	var helloString = "MyObject says hello";

	// Constructor
	function MyObject() {
		console.log("MyObject.Constructor called");
	}

	MyObject.prototype.sayHello = function() {
		console.log(helloString);
	};

	return MyObject;

}());

exports.myObject = new MyObject();