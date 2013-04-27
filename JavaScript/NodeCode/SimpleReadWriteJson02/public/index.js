/*jshint jquery:true, browser:true, devel: true, strict: true */

var App = (function() {'use strict';

	function App() {
		$("#buttonRead").click(readJson);
		$("#buttonWrite").click(writeJson);
	}

	function addNames(initFirstName, initLastName, initAge) {
		$("#firstName").val(initFirstName);
		$("#lastName").val(initLastName);
		$("#age").val(initAge);
	}

	function readJson() {
		$.getJSON('/read', function(data) {
			addNames(data.firstName, data.lastName, data.age);
		}).success(function() {
			showDebug('success');
		}).error(function(jqXHR, textStatus, errorThrown) {
			alert("error calling JSON. Try JSONLint or JSLint: " + textStatus);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	}

	var writeJsonPrivate = function(successFunc, showError) {
		var userInput = {
			firstName : $('#firstName').val(),
			lastName : $('#lastName').val(),
			age : $('#age').val()
		};

		$.ajax({
			type : 'GET',
			url : '/write',
			dataType : 'json',
			data : userInput,
			success : successFunc,
			error : showError
		});
	};

	var writeJson = function() {
		writeJsonPrivate(function(data) {
			showDebug(data.result);
		},function(request, ajaxOptions, thrownError) {
			showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			showDebug(request.status);
			showDebug(request.statusText);
			showDebug(request.getAllResponseHeaders());
			showDebug(request.responseText);
		});
	};

	var showDebug = function(textToDisplay) {
		$("#debug").append('<li>' + textToDisplay + '</li>');
	};

	return App;

})();

$(document).ready(function() {'use strict';
	new App();
});