/**
 * @author Charlie
 */
/*jshint jquery:true, devel:true, browser: true, strict: true */

var MyObjects = (function() {'use strict';

    // Constructor
    function MyObjects() 
    {
        
    };
    
    MyObjects.prototype.nested = {

        bigFunc: function() {
            $("#test01").html("It works: ");
        },


        getNine: function() {
            return 9;
        },   

       
    };

    MyObjects.prototype.ShowDirectories = (function() {'use strict';

        // Constructor
        function ShowDirectories() {
            $("#showDirectories").html("showDirectories");
        }

        return ShowDirectories;
    })();

    return MyObjects;
})();

$(document).ready(function() {"use strict";
    // MyObjects.foo = 25;
    var obj = new MyObjects();
    new obj.ShowDirectories();
    obj.nested.bigFunc();
    $("#test02").html("This is test: " + obj.nested.getNine());
});
