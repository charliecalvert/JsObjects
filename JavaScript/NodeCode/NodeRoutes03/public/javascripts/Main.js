var Main = (function() {

	var objectToSendFromClientToServer = {
		"firstName" : "Qux",
		"lastName" : "Garply"
	};

	// Constructor
	function Main() {
		$("#buttonGetJson").click(parseJson);
		$("#buttonGetJsonAjax").click(parseWithAjax);
		$("#buttonGetMarkdown").click(parseMarkdown);
		$("#buttonParseAjax").click(parseWithAjax);
	}

	function addNames(initFirstName, initLastName) {
		'use strict';

		var script = $("#nameItem").html(), template = Handlebars
				.compile(script);

		var result = template({
			firstName : initFirstName,
			lastName : initLastName
		});

		$("#nameDiv").append(result);
	}
	
	function clear() {
		$("#debug").empty();
		$("#radioDiv").empty();
	}

	function parseMarkdown() {
		$("#markdown").load("MarkdownSample.md");
	}

	function parseJson() {
		'use strict';

		$.getJSON('/getFullName',
			objectToSendFromClientToServer,
			function(data) {
				clear();
				$("#debug").html(data.fullName);
				utilities.createRadio(data.original.firstName, 'firstName');
				utilities.createRadio(data.original.lastName, 'lastName');
				console.log(data);
			})
			.success(function() {
				console.log("csc: success. Loaded index.json");
			})
			.error(function(jqXHR, textStatus, errorThrown) {
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
			data: objectToSendFromClientToServer,
			url : '/getFullName',
			dataType : 'json',
			success : function(data) {
				clear();
				showDebug(JSON.stringify(data));
			},
			error : function(request, ajaxOptions, thrownError) {
				showDebug("Error occurred: = " + ajaxOptions + " "
						+ thrownError);
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

	return Main;

}());

$(document).ready(function() {
	'use strict';
	var main = new Main();
});
