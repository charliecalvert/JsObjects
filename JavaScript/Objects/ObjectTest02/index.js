/**
 * @author Charlie Calvert
 */

var Goober = (function() {
    'use strict';
    
    var x = 2;
    
    function Goober() {}

    Goober.prototype.Bar = function() {
        $('#test01').html("Bar is called: " + x);
    };

    return Goober;
   
})();

$(document).ready(function() {
  "use strict";
  
  var value = new Goober();
  value.Bar();
});
