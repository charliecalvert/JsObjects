/**
 * @author Charlie Calvert
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


    MyApp.prototype.function01 = function() {
        $('#test02').html('MyApp.function01 called.');
        function02();
    };

    var function02 = function() {
        $('#test03').html('MyApp.function02 called.');
    };

    return MyApp;
})();

$(document).ready(function() {
	'use strict';
    myApp01.function1();    
    $("#test01").html('MyApp01 Property1: ' + myApp01.property1);    

    var myApp = new MyApp();
    myApp.function01();
    // We can't call myApp.function02 from here
}); 