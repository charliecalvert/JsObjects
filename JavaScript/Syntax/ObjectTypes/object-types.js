var myObjectLiteral = { name: 'myObjectLiteral' };

function myFunctionStatementObject() { };
myFunctionStatementObject.name = 'myFunctionStatementObject';

var myFunctionExpressionObject = function() { return { name: 'myFunctionExpressionObject' } };
myFunctionExpressionObject.name = 'This will not work';

var MyFunctionConstructorObject = function() {};
MyFunctionConstructorObject.prototype.name = 'MyFunctionConstructorObject';
var myFunctionConstructorObject = new MyFunctionConstructorObject();

console.log(myObjectLiteral.name);
console.log(myFunctionStatementObject.name);
console.log(myFunctionExpressionObject().name);
console.log(myFunctionConstructorObject.name);
