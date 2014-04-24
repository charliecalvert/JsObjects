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

console.log( typeof aNumber + ":\t\tvar aNumber = 3");
console.log( typeof aString + ":\t\tvar aString = 'string'");
console.log( typeof aBoolean + ":\tvar aBoolean = true");
console.log( typeof aNull + ":\t\tvar aNull = null");
console.log( typeof aUndefined + ":\tvar aUndefined = undefined");
console.log( typeof foo + ":\tvar foo");

