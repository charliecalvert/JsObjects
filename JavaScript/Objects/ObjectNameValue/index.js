/**
 * @author Charlie Calvert
 */

var myObject = {
	myProperty : 12
};

var myPropertyStr = "myProperty";

console.log(myObject.myProperty);
console.log(myObject[myPropertyStr]);

myObject[myPropertyStr] = 3;
var valueA = myObject.myProperty;
console.log(valueA);

myObject.myProperty = 5;
var valueB = myObject[myPropertyStr];
console.log(valueB);


