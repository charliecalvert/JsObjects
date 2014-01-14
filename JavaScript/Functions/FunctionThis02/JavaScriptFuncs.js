/**
 * @author charlie
 */


var myObject = {
	firstName: "Susan",
	lastName: "Smith"
};

var myObject1 = {
	firstName: "Susan",
	lastName: "Smith",
	fullName: function() { 'use strict';
		return firstName + ' ' + lastName;
	}
};

function ThreeTypes(name) {

	'use strict';
	
	this.name = name;
	
	function privateFunc()	{
		console.log("This is a private function");
	}
	
	this.normalFunc = function()	{
		privateFunc();
		console.log("This is a normal function");
	};
}

var threeTypes = new ThreeTypes('Passed as parameter');
threeTypes.normalFunc();
console.log(threeTypes.name);
