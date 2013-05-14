/**
 * @author Charlie Calvert
 */

 
 var App = (function() {
 	
 	function App() {
 		$("#clickMe").click(this.clickMe);
 		// $("#ajaxCall").click(readJsonPrivate);
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
 	
 	
 	App.prototype.readJson = function(success, failure) {
 		$.ajax({
			type : "get",
			url : 'MyData.json',
			cache : false,
			dataType : "json",
			success : success,
			error: failure
		});
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