function separator(message) {
    console.log("=========================");
    console.log(message);
    console.log("=========================");
}

separator("Primitive Types");

/* 
 * Below we declare variables for each of JavaScripts
 * five primitive types. The first three are easy to understand,
 * but null and undefined are a bit confusing. We explicitly
 * set variables to null, while undefined is given to
 * variables by the compiler if they have no other legitimate
 * type.
 */
var aNumber = 3;
var aString = 'string';
var aBoolean = true;
var aNull = null;

/* 
 * The next two variables are both set to undefined.
 * Since these statements do the same thing, JsHint
 * recommends that we use the second syntax, perhaps
 * because it is shorter. Since I want to emphasize
 * that the statements are identical in outcome, I
 * ask JsHint to ignore this issue for now.
 */
var aUndefined = undefined; // jshint ignore: line
var foo;

console.log(typeof aNumber + ":\t\tvar aNumber = 3");
console.log(typeof aString + ":\t\tvar aString = 'string'");
console.log(typeof aBoolean + ":\tvar aBoolean = true");
console.log(typeof aNull + ":\t\tvar aNull = null");
console.log(typeof aUndefined + ":\tvar aUndefined = undefined");
console.log(typeof foo + ":\tvar foo");

separator("Reference Types");

/*
 * Now lets work with some reference types. We will create an
 * array and object. Both of these are reference types. 
 */

var object = {}; // Create object 
var array = []; // Create Array

/*
 * Use typeof to see the types of these two objects.
 */

console.log("Run typeof on an object: " + typeof object); // object
console.log("Run typeof on an array: " + typeof array);   // object

/*
 * As you can see, they print out object. So how can we tell an object
 * from an array? The strategy is to use instanceof instead of typeof
 */

console.log("Is array an instance of Array: ", array instanceof Array); // True
console.log("Is object an instance of Array: ", object instanceof Array); // False

console.log("Call Array.isArray on array: ", Array.isArray(array)); // True
console.log("Call Array.isArray on object: ", Array.isArray(object)); // False

separator("Goodbye");
