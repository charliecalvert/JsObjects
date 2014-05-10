function addNames(initFirstName, initLastName) {
	'use strict';

	var script = $("#nameItem").html(), template = Handlebars.compile(script);

	var result = template({
		firstName : initFirstName,
		lastName : initLastName
	});

	$("#nameDiv").append(result);
}

function parse() {
	'use strict';

	$.getJSON('/read', function(data) {
		$.each(data, function(i, item) {
			addNames(item.firstName, item.lastName);
		});
		addNames(data[0].firstName, data[0].lastName);
	}).success(function() {
		console.log("csc: success. Loaded index.json");
	}).error(
			function(jqXHR, textStatus, errorThrown) {
				alert("error calling JSON. Try JSONLint or JSLint: "
						+ textStatus + errorThrown);
			}).complete(function() {
		console.log("csc: completed call to get index.json");
	});
}

function parseWithAjax() {
	'use strict';

	var jqxhr = $.ajax({
		type : 'GET',
		url : '/read',
		dataType : 'json',		
		success : function(data) {
			$.each(data, function(i, item) {
				addNames(data[0].firstName, data[0].lastName);
			});
		},
		error : function(request, ajaxOptions, thrownError) {
			showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			showDebug(request.status);
			showDebug(request.statusText);
			showDebug(request.getAllResponseHeaders());
			showDebug(request.responseText);
		}
	});
}

var showDebug = function(textToDisplay) {
    $("#debug").append('<li>' + textToDisplay + '</li>');
};

$(document).ready(function() {
	'use strict';
	$("#buttonParseGetJson").click(parse);
	$("#buttonParseAjax").click(parseWithAjax);
});
