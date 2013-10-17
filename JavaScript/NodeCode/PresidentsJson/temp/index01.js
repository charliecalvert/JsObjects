var presidents =
{
	cgiPath: "/cgi-bin/Presidents/",
	readXml: cgiPath + "PresidentsXml.py",
	postXml: cgiPath + "AddingDataXml.py",

	readPresidents: function() {
		$("#items").empty();
		$("#debug").empty();
		request = $.ajax({
			type: "GET",
			url: readXml,
			cache: false,
			dataType: "xml",
			success: function (xml) {
				$(xml).find('president').each(function () {
					var first = $(this).find('first').text();
					var last = $(this).find('last').text();
					var president = first + " " + last;
					$("#items").append("<li>" + president + "</li>");
				});
			},
			error: function(request, ajaxOptions, thrownError) {
				showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
				showDebug(request.status);
				showDebug(request.statusText);
				showDebug(request.getAllResponseHeaders());
				showDebug(request.responseText);
			}
		});
	},

	postPresidents: function(first, last) {
		$("#items").empty();
		$("#debug").empty();
		dataRequest = "first=" + first + "&last=" + last;
		showDebug(dataRequest);
		request = $.ajax(
		{
			type: "POST",
			data: dataRequest,
			url: postXml,
			dataType: "xml",
			success: function (xml) {
				$(xml).find('president').each(function () {
					var first = $(this).find('first').text();
					var last = $(this).find('last').text();
					var additions = first + " " + last;
					$("#items").append("<li>" + additions + "</li>");
				});
			},
			error: function(request, ajaxOptions, thrownError) {
				showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
				showDebug(request.status);
				showDebug(request.statusText);
				showDebug(request.getAllResponseHeaders());
				showDebug(request.responseText);
			}
		});
	},

	showDebug: function(textToDisplay) {
		$("#debug").append('<li>' + textToDisplay + '</li>');
	}
};