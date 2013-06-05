/**
 * @author Charlie Calvert
 */

ELF.own.App = (function() {
	
	function App() {
		$('#readHero').click({doc:'hero'}, readJson);
		$('#readPerson01').click({doc:'person01'}, readJson);
		$('#readPerson02').click({doc:'person02'}, readJson);
		$('#readPerson03').click({doc:'person03'}, readJson);
		$('#readPerson04').click({doc:'person04'}, readJson);
		$('#readPerson05').click({doc:'person05'}, readJson);
		$('#readGrid').click({doc:'grid'}, readJson);
		$('#readGameData').click({doc:'gameData'}, readJson);
	}
	
	var readJson = function(event) {
		showDebug('ReadJson called with: <strong>' + event.data.doc + '</strong>');
		var app = new ELF.own.AjaxBase();
		app.readJson(event.data.doc, function(data) {
			try {
			    var result = JSON.stringify(data);
				showDebug(result);
			} catch(err) {
				showDebug(err);
			} 
		},
		function(request, ajaxOptions, thrownError) {
			showDebug(request.responseText);
		});
	}
	
	var showDebug = function(value) {
		$('#debugList').append('<li>' + value + '</li>');
	}
	
	return App;
	
})();

$(document).ready(function() {
	"use strict";
	
	new ELF.own.App();
});
