/**
 * @author Charlie
 */
/*jshint jquery:true, devel:true, browser: true, strict: true */

var MyObjects = (function{

MyObjects.App = (function() {'use strict';
    
    function App() {
        $("#test01").html("It works: ");       
    }
    
    App.prototype.getNine = function() {
        return 9;
    };
    
    App.prototype.myPrivateVariable = 3;
     
    return App;
})();

MyObjects.ShowDirectories = (function() {'use strict';
    
    // Constructor
    function ShowDirectories() {
      $("#showDirectories").html("showDirectories");
    }
    
    return ShowDirectories;    
})();

    return MyObjects;
})();

$(document).ready(function() {
  "use strict";
  MyObjects.foo = 25;
  var obj = new MyObjects();
  new MyObjects.ShowDirectories();
  
  $("#test02").html("This is test: " + obj.App.getNine());
}); 