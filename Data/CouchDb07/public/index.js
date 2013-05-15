function addNames(initFirstName, initLastName, initAge) {
    'use strict';
            
   $("#firstName").val(initFirstName);
   $("#lastName").val(initLastName);
   $("#age").val(initAge);    
}

function readJson() {
	$.getJSON('/read', function(data) {
		addNames(data.firstName, data.lastName, data.age); 
	})
	.error(function(jqXHR, textStatus, errorThrown) { 
		alert("error calling JSON. Try JSONLint or JSLint: " + textStatus); 
	})
	.complete(function() { console.log("csc: completed call to get index.json"); }); 
}

var writeJson = function() {
	var userInput = { 
		firstName: $('#firstName').val(), 
		lastName: $('#lastName').val(), 
		age: $('#age').val() 
	};
	
	$.ajax({
		type: 'GET',
		url: '/write',
		dataType: 'json',
		data: userInput, 
		success: function(data) {
			showDebug(data.result);
		},
		error: showError      
	});
};


var create = function() {	
	$.ajax({
		type: 'GET',
		url: '/create',
		dataType: 'json',
		success: function(data) {
			showDebug(data.Result);
		},
		error: showError      
	});
};

var showError = function(request, ajaxOptions, thrownError) {
	showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
	showDebug(request.status);
	showDebug(request.statusText);
	showDebug(request.getAllResponseHeaders());
	showDebug(request.responseText);
};

var showDebug = function(textToDisplay)
{
	$("#debug").append('<li>' + textToDisplay + '</li>');
};


$(document).ready(function() {
	$("#buttonRead").click(readJson);
	$("#buttonCreate").click(create);
});