/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser: true */
/*global Handlebars: false */

function addItem(url, text) {
    'use strict';
            
    var script = $("#list-item").html(),    
    template=Handlebars.compile(script);    
    
    var result = template({
        text: text,
        url: url
    });    
    
    $("#myList").append(result); 
}

$(document).ready(function() {
  "use strict";
  
  addItem("http://www.elvenware.com", "Elvenware");
});


