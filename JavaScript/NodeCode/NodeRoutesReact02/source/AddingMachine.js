var MyObject = (function() {
    'use strict';
    // Private Data
    var helloString = "MyObject says hello";

    // Constructor
    function MyObject() {
        console.log("Source/MyObject.Constructor called");
    }

    MyObject.prototype.add = function(operandA, operandB) {
        return operandA + operandB;
    };

    MyObject.prototype.sayHello = function() {
        return helloString;
    };

    return MyObject;

}());

exports.myObject = new MyObject();
