/**
 * @author Charlie Calvert
 */

var App = (function() {
'use strict';
	function App() {
		$("#clickMe").click(this.clickMe);
		$("#ajaxCall").click(readJsonProgram);
	}

	var privateAdd = function(operanda, operandb) {
		return operanda + operandb;
	};

	App.prototype.clickMe = function() {
		var result = privateAdd(2, 3);
		$('#test01').html(result);
	};

	App.prototype.add = function(operanda, operandb) {
		return privateAdd(operanda, operandb);
	};

	App.prototype.multiply = function(operanda, operandb) {
		return operanda * operandb;
	};

	var readJsonProgram = function() {
		readJsonPrivate(function(data) {
			$('#test01').html(data.Result);
		}, showError);
	};

	var readJsonPrivate = function(success, failure) {
		$.ajax({
			type : "get",
			url : 'Data.json',
			cache : false,
			dataType : "json",
			success : success,
			error : failure
		});
	};

	App.prototype.readJsonTest = function(success, failure) {
		readJsonPrivate(success, failure);
	};

	var writeJsonPrivate = function(data, success, failure) {
		$.ajax({
			type : "get",
			url : '/writeJson',
			cache : false,
			data : data,
			dataType : "json",
			success : success,
			error : failure
		});
	};

	App.prototype.writeJsonTest = function(data, success, failure) {
		writeJsonPrivate(data, success, failure);
	};

	var showDebug = function(textToDisplay) {
		$("#debug").append('<li>' + textToDisplay + '</li>');
	};

	var showError = function(request, ajaxOptions, thrownError) {
		showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
		showDebug(request.status);
		showDebug(request.statusText);
		showDebug(request.getAllResponseHeaders());
		showDebug(request.responseText);
	};

	return App;

})();

$(document).ready(function() {
	'use strict';
	new App();
}); 