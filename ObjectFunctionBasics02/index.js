/**
 * @author Charlie
 */

function hello(func) {
    $("#test02").html("It works! ");
    func();
}

$(document).ready(function() {
  "use strict";
  
 
  $("#test01").html("Document Read called");
  
  hello(function() {
      $("#test03").html("It's a nine!");
  });
  
});