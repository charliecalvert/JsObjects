var MyObject = (function() {
	
	// Private Data
	var helloString = "MyObject says hello";

	// Constructor
	function MyObject() {
		console.log("MyObject.Constructor called");
	}

	MyObject.prototype.add = function(operandA, operandB) {
		return operandA + operandB;
	};	

	return MyObject;

}());

exports.myObject = new MyObject();