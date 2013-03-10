var Folks = (function() {

	function Folks() {
		$("#buttonParse").click(parse);
	}

	function addNames(initFirstName, initLastName) {'use strict';

		var script = $("#nameItem").html();
		var template = Handlebars.compile(script);

		var result = template({
			firstName : initFirstName,
			lastName : initLastName
		});

		$("#nameDiv").append(result);
	}

	function parse() {
		$.getJSON('/read', function(data) {
			$.each(data, function(i, item) {
				addNames(item.firstName, item.lastName);
			});
			addNames(data[0].firstName, data[0].lastName);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			alert("error calling JSON. Try JSONLint or JSLint: " + textStatus);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	}

	var showError = function(request, ajaxOptions, thrownError) {
		showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
		showDebug(request.status);
		showDebug(request.statusText);
		showDebug(request.getAllResponseHeaders());
		showDebug(request.responseText);
	};

	var showDebug = function(data) {
		$("#debugList").append("<li>" + data + "</li>");
	};

	return Folks;
})();

$(document).ready(function() {
	new Folks();
});
