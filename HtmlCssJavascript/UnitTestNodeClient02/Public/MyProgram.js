/**
 * @author Charlie Calvert
 */

 
 var App = (function() {
 	
 	function App() {
 		$("#clickMe").click(this.clickMe);
 		$("#ajaxCall").click(readJsonProgram);
 	}
 	
 	var privateAdd = function(operanda, operandb) {
 		return operanda + operandb;
 	}
 	
 	App.prototype.clickMe = function() {
 		var result = privateAdd(2, 3); 
 		$('#test01').html(result);
 	}
 	
 	App.prototype.add = function(operanda, operandb) {
 		return privateAdd(operanda, operandb);
 	}
 	
 	App.prototype.multiply = function(operanda, operandb) {
 		return operanda * operandb;
 	}
 	
 	var readJsonProgram = function() {
 		readJsonPrivate(function(data) {
			$('#test01').html(data.Result);
		},
		showError
		);
 	}
 	
 	var readJsonPrivate = function(fileName, success, failure) {
 		$.ajax({
			type : 'GET',
			url : fileName,
			cache : false,
			dataType : "json",
			success : success,
			error: failure
		});
 	}
 	
 	App.prototype.readJsonTest = function(fileName, success, failure) {
 		readJsonPrivate(fileName, success, failure);
 	};	
 	
 	var writeJsonPrivate = function(data, typeRequest, success, failure) {
 		$.ajax({
			type : typeRequest,
			url : '/writeJson',
			cache : false,
			data: data,
			dataType : "json",
			success : success,
			error: failure
		});
 	}
 	
 	App.prototype.writeJsonTest = function(data, success, failure) {
 		writeJsonPrivate(data, success, failure);
 	};	
 	
 	var showDebug = function(textToDisplay)
{
	$("#debug").append('<li>' + textToDisplay + '</li>');
};

	var showError = function(request, ajaxOptions, thrownError) {
		showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
		showDebug(request.status);
		showDebug(request.statusText);
		showDebug(request.getAllResponseHeaders());
		showDebug(request.responseText);
	};
 	
 	return App;
 	
 })();
 
 $(document).ready(function() {
 	new App();	
 });