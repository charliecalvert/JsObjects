var App = (function() {
	
	function App() {
		$("#link01").click(linkClick);
		$("#button01").click(buttonClick);
	}
	
var linkClick = function() {
	$("#data01").html("Link clicked");
};

var buttonClick = function() {
	$("#data01").html("Button Clicked");
};

	return App;

})();

$(document).ready(function() {
	new App();
});
