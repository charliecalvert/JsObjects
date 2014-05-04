var variable00 = 'variable00';
var func01 = function() {
    'use strict';
};

function func02() {
    'use strict';    
}

/* 
 * Prototype methods cannot work here because we don't have 
 * a constructor function. That is, we don't call new.
 * 
 * func02.prototype.myMethod = function() { 
    console.log("myMethod called");
}; */

exports.basicFunction = function() {
    'use strict';
    
    func02();
    // func02.myMethod(); No prototype methods because we don't call new
    console.log("variable00: " + variable00);
    console.log("func01.name: " + func01.name);
    console.log("type of func01.name: " + typeof func01.name);
    console.log("func02.name: " + func02.name);
    console.log("type of func02.name: " + typeof func02.name);
};
