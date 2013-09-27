/**
 * @author Charlie Calvert
 */

var myObject = {
	myProperty : 12
};
console.log(myObject.myProperty);
console.log(myObject['myProperty'])

myOjbect['myProperty'] = 3;
var valueA = myOjbect.myProperty;
console.log(valueA);

myObject.myProperty = 5;
var valueB = myObject['myProperty'];
console.log(valueB);

