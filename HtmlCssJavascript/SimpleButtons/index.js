
var linkClick = function() {
	$("#data01").html("Link clicked");
};

var buttonClick = function() {
	$("#data01").html("Button Clicked");
};


$(document).ready(function() { 
	$("#link01").click(linkClick);
	$("#button01").click(buttonClick);
});