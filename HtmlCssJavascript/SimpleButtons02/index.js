var App = (function() {

	function App() {
		$("#link01").click(linkClick);
		$("#button01").click(buttonClick);
		$("#buttonInputData").click(buttonInputData);
	}

	var linkClick = function() {
		$("#data01").html("Link clicked");
	};

	var buttonClick = function() {
		$("#data01").html("Button Clicked");
	};
	
	var buttonInputData = function() {
		var inputData = $('#inputData').val();
		$('#data02').html('You entered: ' + inputData);
	};

	return App;

})();

$(document).ready(function() {
	new App();
});
