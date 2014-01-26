var App = (function() {

	function App() {
		$("#link01").click(linkClick);
		$("#button01").click(buttonClick);
		$("#buttonGetInputData").click(buttonInputData);
	}

	var linkClick = function() {
		$("#data01").html("Link clicked");
	};

	var buttonClick = function() {
		$("#data01").html("Button Clicked");
	};
	
	var buttonInputData = function() {
		var inputData = $('#inputData').val();
		var stringToShowUser = 'You entered: ' + inputData;
		$('#data02').html(stringToShowUser);
		$('#inputData').val(stringToShowUser);
	};

	return App;

})();

$(document).ready(function() {
	new App();
});
