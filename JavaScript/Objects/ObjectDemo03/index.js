/**
 * @author Charlie Calvert 
 */

/*jshint devel:true, browser: true, jquery: true */

/*********************
 *  Technique One - Simple Object
 *********************/ 
var myObject = {    
    myProperty01: 12,
    myProperty02: 4,
    myFunction01: function() {
        'use strict'; 
        return this.myProperty01 + this.myProperty02; 
    }                   
};

/*********************
 *  Technique Two - Simple Function
 *********************/
function myFunction02() {   
    'use strict';
     
    var myField01 = 3;
    var myField02 = 2;
    var nestedFunction = function() {
        return myField01 + myField02;  
    }; 
    
    return nestedFunction();
}

/*********************
 *  Technique Three - Extend function with Prototype
 *********************/

// Define object
var MyFunction03 = function() {
    'use strict';       
};

var myObject03 = MyFunction03;

// Now extend it after it is created:
MyFunction03.prototype.field01 = 2;
MyFunction03.prototype.field02 = 4;
MyFunction03.prototype.nestedFunction = function() {
    'use strict';    
    return this.field01 + this.field02;    
};



/*********************
 *  Technique Four - Modular Pattern 
 *********************/
var MyFunction04 = (function() {
    'use strict';
    
    var field01 = 0;
    var field02 = 0;
    
    function MyFunction04(initField01, initField02) {
        field01 = initField01;
        field02 = initField02; 
    }
    
    MyFunction04.prototype.nestedFunction = function() {
        return field01 + field02;
    };    
    
    return MyFunction04;
}());


var App = (function() {
   'use strict';
    function App() { }
    
    App.prototype.initialize = function() {
        
    };

    return App;
}());

$(document).ready(function() {
    'use strict';
   
    
    $("#techObject").html(myObject.myFunction01());
    
    // Technique Two (Simple Function)
    $("#techFunction").html(myFunction02());
    
    // Technique Three (prototype)
    var myFunction03 = new MyFunction03();
    MyFunction03.prototype.field03 = 7;
    $("#techPrototype").html(myFunction03.nestedFunction());

    // Technique Four (Module Pattern)
    var myFunction04 = new MyFunction04(1, 2);
    $("#techModule").html(myFunction04.nestedFunction());
    
    var app = new App();
    app.initialize();
});
