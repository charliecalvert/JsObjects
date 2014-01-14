var myObject01 = {
	firstName: "Susan",
	lastName: "Smith"
};

var myObject02 = {
	firstName: "Susan",
	lastName: "Smith",
	fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	}
};

var myObject03 = {
	a: 1,
	b: 2,
	c: 'three',
	addMe: function() { return this.a + this.b; }
};

console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());
console.log(myObject03.addMe());