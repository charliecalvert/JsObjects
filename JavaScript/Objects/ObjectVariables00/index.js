/**
 * @author Charlie Calvert
 */

/*jshint browser:true, jquery:true, devel:true, strict: true */

function run() { 'use strict';
    
    var name = firstName + lastName;
    
    console.log(name);
    
    var firstName = "Tom";
    var lastName = "Fielding";    
}

function go() { 'use strict';
    var value = $("#test02").val();
    $("#test03").val(value);    
}

$(document).ready(function() {
  "use strict";
  run();
  $("#button01").click(go);
});