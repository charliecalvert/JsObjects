/**
 * @author Charlie Calvert
 */

var myObject = {
	myProperty : 12
};

console.log(myObject.myProperty);
console.log(myObject['myProperty'])

myObject['myProperty'] = 3;
var valueA = myObject.myProperty;
console.log(valueA);

myObject.myProperty = 5;
var valueB = myObject['myProperty'];
console.log(valueB);

