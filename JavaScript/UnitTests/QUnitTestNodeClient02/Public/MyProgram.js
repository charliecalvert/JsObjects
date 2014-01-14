/**
 * @author Charlie Calvert
 */

 
 var App = (function() {
 	
 	function App() {
 		$("#addNumbers").click(this.addNumbers);
 		$("#ajaxCall").click(readJsonProgram);
 	}
 	
 	var privateAdd = function(operanda, operandb) {
 		return operanda + operandb;
 	};
 	
 	App.prototype.addNumbers = function() {
 		var operanda = parseInt($('#operanda').val(), 10);
 		var operandb = parseInt($('#operandb').val(), 10);
 		var result = privateAdd(operanda, operandb); 
 		$('#addResult').html(operanda + ' + ' + operandb + ' = ' + result);
 	};
 	
 	App.prototype.add = function(operanda, operandb) {
 		return privateAdd(operanda, operandb);
 	};
 	
 	App.prototype.multiply = function(operanda, operandb) {
 		return operanda * operandb;
 	};
 	
 	var readJsonProgram = function() {
 		var gridString = '';
 		readJsonPrivate('Grid.json', function(data) {
 			for (var i = 0; i < data[0].length; i++) {
 				for (var j = 0; j < data[0].length; j++) {
					gridString += data[i][j] + '\t';
				}
				$('#debug').append('<li>' + gridString + '</li>');
				gridString = '';
			}
		},
		showError
		);
 };
 	
 	var readJsonPrivate = function(fileName, success, failure) {
 		$.ajax({
			type : 'GET',
			url : fileName,
			cache : false,
			dataType : "json",
			success : success,
			error: failure
		});
 	};
 	
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
 	};
 	
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