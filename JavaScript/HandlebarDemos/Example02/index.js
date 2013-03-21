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

function addcss(url) {
    'use strict';
            
    var script = $("#css01").html(),    
    template=Handlebars.compile(script);    
    
    var result = template({
        url: url        
    });    
    
    $("#css02").append(result); 
}

addcss("index.css");
$(document).ready(function() {
  "use strict";
    
    addItem("Elvenware test");
});


