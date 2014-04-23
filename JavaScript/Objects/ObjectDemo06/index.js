/**
 * @author Charlie
 */

/*jshint devel: true, browser: true, jquery: true, strict: true */

var FooApp = (function myFunction() {'use strict';
	
	// Private variables
    var property1 = 0;
    var property2 = 1;

	// Constructor
    function MyApp() { }

	// Public Methods
    MyApp.prototype.function1 = function() { 
        $("#test02").html("function 1 called.");
    };

	// Private method
    var function2 = function() {
        $("#test03").html("function 2 called.");
    };

    return MyApp;
})();

$(document).ready(function() {
	'use strict';
  $("#test01").html("It works");
  var fooApp = new FooApp();
  fooApp.function1();            
}); 