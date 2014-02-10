/**
 * @author Charlie Calvert
 */

var LoadJson = (function() {

	function LoadJson() {
		$('#loadJson').click({
			fileName : "BackEndData.json"
		}, this.loadJson);
		// $('#loadJson02').click({ fileName: "Moredata.json" }, loadJson);
	}


	LoadJson.prototype.loadJson = function(event) {
		var fileName = event.data.fileName;

		$.getJSON(fileName, function(data) {
			$('#showJson').html(data.name);
		}).fail(function(jqxhr, textStatus, error) {
			console.log("error: " + error);
		});

		/* jqxhr.fail(function(jqxhr, textStatus, error) {
		 console.log( "error: " + error );
		 }); */
	};

	return LoadJson;

})();

$(document).ready(function() {
	new LoadJson();
});
