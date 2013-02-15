/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser: true */

$(document).ready(function() {
  "use strict";
  
  $.getJSON('index.json', function(data) {
      var first = data[0].firstName;
      var last = data[0].lastName;
      $("#firstName").html(first);
      $("#lastName").html(last);
  }).success(function() { console.log("csc: success. Loaded index.json"); })
    .error(function(jqXHR, textStatus, errorThrown) { alert("error calling JSON. Try JSONLint or JSLint: " + textStatus); })
    .complete(function() { console.log("csc: completed call to get index.json"); });
});


