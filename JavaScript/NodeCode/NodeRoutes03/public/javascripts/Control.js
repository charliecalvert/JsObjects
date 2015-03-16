var Control = (function() {

	var objectToSendFromClientToServer = {
		"firstName" : "Qux",
		"lastName" : "Garply"
	};

	// Constructor
	function Control() {
		$("#buttonGetJson").click(parseJson);
		$("#buttonGetJsonAjax").click(parseWithAjax);
		$("#buttonGetMarkdown").click(parseMarkdown);
		$("#buttonParseAjax").click(parseWithAjax);
        // page.base('/');

        page('/', function() {
            console.log("root");
        });

        page('/users/', function() {
            console.log('Simple user');
        });

        page('/users/:id', function(request) {
            var id = request.params.id
            var choice = ('Param: ' + id);
            $.getJSON('/users/' + id, function(response) {
                $('#response').html(JSON.stringify(response));
                $('#route').html(response.route);
                $('#result').html(response.result);
                $('#request').html(response.request);
                $('#params').html(response.params);
                utilities.showMessage(choice + ': ' + JSON.stringify(response));
            });
        });

        page();

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
                utilities.showDebug(JSON.stringify(data));
			},
			error : function(request, ajaxOptions, thrownError) {
				utilities.showDebug("Error occurred: = " + ajaxOptions + " "
						+ thrownError);
                utilities.showDebug(request.status);
                utilities.showDebug(request.statusText);
                utilities.showDebug(request.getAllResponseHeaders());
                utilities.showDebug(request.responseText);
			}
		});
	}


	return Control;

}());

$(document).ready(function() {
	'use strict';
	var control = new Control();
});
