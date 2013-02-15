/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser: true */
/*global Handlebars: false */

function addItem(text) {
    'use strict';
            
    var script = $("#par01").html(),    
    template=Handlebars.compile(script);    
    
    var result = template({
        text: text        
    });    
    
    $("#myDiv").append(result); 
}

$(document).ready(function() {
  "use strict";
  
    addItem("Elvenware test");
});


