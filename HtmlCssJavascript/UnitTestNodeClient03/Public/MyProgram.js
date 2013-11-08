/**
 * @author Charlie Calvert
 */

 
 ELF.own.App = (function() {
 	
 	var ajaxBase = null;
 	
 	function App() {
 		$("#addNumbers").click(this.addNumbers);
 		$("#ajaxCall").click(readGrid);
 		ajaxBase = new ELF.own.AjaxBase;
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
 	
 	var readGrid = function() {
 		var gridString = '';
 		ajaxBase.readJson('Grid.json', function(data) {
 			for (var i = 0; i < data[0].length; i++) {
 				for (var j = 0; j < data[0].length; j++) {
					gridString += data[i][j] + '\t';
				}
				$('#debug').append('<li>' + gridString + '</li>');
				gridString = '';
			}
		}, showError);
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
 	new ELF.own.App();	
 });