/**
 * @author Charlie
 */

var myApp01 = {
    property1 : 0,
    property2 : 1,
    function1 : function() {
    },
    function2 : function() {
    }
};

var MyApp = (function myFunction() {'use strict';
    var property1 = 0;
    var property2 = 1;

    function MyApp() {
    }


    MyApp.prototype.function1 = function() {
    };

    var function2 = function() {
    };

    return MyApp;
})();

$(document).ready(function() {
    myApp01.function1();    
    $("#test01").html(myApp01.property1);    

    var myApp = new MyApp();
    myApp.function1();
}); 