var RouteMaster = ( function() {

		// Constructor
		function RouteMaster() {
			$("#getNine").click(getNine);
			$("#getNineParse").click(getNineParse);
			$("#add").click(add);
			$("#addPost").click(addPost);
		}

		var getNine = function() {
			var nineResult = $('#getNineResult');
			nineResult.load('/getNine', function(response, status, xhr) {
				if (status == "error") {
					nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
				}
			});
		};

		var getNineParse = function() {
			var nineResult = $('#getNineParseResult');
			$.get('/getNine', function(data) {
				nineResult.html("The value sent from the server is: <strong>" + data.result + "</strong>");
			});
		};

		var add = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandB").val();

			$.ajax({
				url : "/add",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#addResult").html(operandA + " + " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		var addPost = function() {
			var operandA = $("#operandAPost").val();
			var operandB = $("#operandBPost").val();

			$.ajax({
				url : "/add",
				type : "POST",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#addResultPost").html(operandA + " + " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		// Return constructor
		return RouteMaster;
	}());

$(document).ready(function() {
	new RouteMaster();
}); 