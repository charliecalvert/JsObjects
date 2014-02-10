/**
 * @author Charlie Calvert
 */

var LoadJson = (function() {

	function LoadJson() {
		$('#loadJson').click({ fileName : "BackEndData.json" }, this.loadJson);		
	}

	var showResult = function(data) {
		$('#showJson').html(data.name);
	};

	LoadJson.prototype.loadJson = function(event) {
		var fileName = event.data.fileName;

		$.getJSON(fileName, function(data) {
			showResult(data);
		}).fail(function(jqxhr, textStatus, error) {
			console.log("error: " + error);
		});
	};
	

	return LoadJson;

})();

$(document).ready(function() {
	new LoadJson();
});
