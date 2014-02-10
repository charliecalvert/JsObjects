/**
 * @author Charlie Calvert
 */


var LoadJson = (function() {
	
	function LoadJson() {
		$('#loadJson').click({ fileName: "BackEndData.json" }, this.loadJson);	
		// $('#loadJson02').click({ fileName: "Moredata.json" }, loadJson);
	}
	
	LoadJson.prototype.loadJson = function(event) {
		var fileName = event.data.fileName;
		
		var jqxhr = $.getJSON(fileName, function(data) {
			$('#showJson').html(data.name);
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
