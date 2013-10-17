/**
 * @author Charlie
 */
var DataInput = (function() {

	function DataInput() {
		$("#buttonAddNine").click(addNine);
		$("#buttonAddFive").click(addFive);
	}

	function getUserNumber() {
		return $("#userNumber").val();
	}

	// This is the best way to POST data to the server
	function addFive() {
		var data = {
			value : getUserNumber()
		};

		$.ajax({
			type : "POST",
			url : 'http://54.235.65.161:30025/addToFive',
			dataType : "json",
			cache : 'False',
			data : data,
			success : function(json) {
				var result = "<p>Result: " + json.result + "</p>";
				var value = "<p>Value: " + json.value + "</p>";
				$("#resultDiv").html(result + value);
			},
			error : showError
		});
	}

	// This is a okay way to post data to the server
	// If you need to pass a lot of data, use POST,
	// as shown above.
	function addNine() {
		$.getJSON('http://54.235.65.161:30025/addToNine?userNumber=' + getUserNumber(), function(data) {
			var result = "<p>Result: " + data.result + "</p>";
			var value = "<p>Value: " + data.value + "</p>";
			$("#resultDiv").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
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

	return DataInput;
})();

$(document).ready(function() {
	new DataInput();
});
