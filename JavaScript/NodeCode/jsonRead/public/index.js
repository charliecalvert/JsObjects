function addNames(initFirstName, initLastName) {
    'use strict';
            
    var script = $("#nameItem").html(),    
    template=Handlebars.compile(script);    
    
    var result = template({
        firstName: initFirstName,
        lastName: initLastName
    });    
    
    $("#nameDiv").append(result); 
}

function parse() {

	$.getJSON('/read', function(data) {
		$.each(data, function(i, item) {
			addNames(item.firstName, item.lastName); 
		});
		addNames(data[0].firstName, data[0].lastName);
	})
	.success(function() { console.log("csc: success. Loaded index.json"); })
	.error(function(jqXHR, textStatus, errorThrown) { 
		alert("error calling JSON. Try JSONLint or JSLint: " + textStatus + errorThrown); 
	})
	.complete(function() { console.log("csc: completed call to get index.json"); });
}

$(document).ready(function() {
	$("#buttonParse").click(parse);
});