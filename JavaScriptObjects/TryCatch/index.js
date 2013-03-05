/**
 * @author Charlie
 */

var TryCatch = (function() {

	function TryCatch() {
	}

	var usePresident = function(i, president) {
		$('#data01').append("<li>" + president.firstName + ' ' + president.lastName + "</li>");
	};

	TryCatch.prototype.loadData = function() {
		$.getJSON("index.json", function(json) {
			$('#data01').empty();

			// Our callback is the usePresident method above
			$.each(json, usePresident);
			
			try {
				$('#data01').listview('refresh');
			} catch(error) {
				alert(error.message);
			}
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			alert("error calling JSON:" + errorThrown + ". Try JSONLint or JSLint: " + textStatus);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	}

	return TryCatch;

})();

$(document).ready(function() {"use strict";
	var tryCatch = new TryCatch();
	tryCatch.loadData();
}); 