$(document).ready(function() {
	$("#paragraph01").html("This sentence added by jQuery");
	$("input[name=mainGroup]:checkbox").click(displayCheckboxSelection)
});

function displayCheckboxSelection()
{		
	if ($("#walk").is(':checked')) {
		$("#paragraph01").html("You clicked walk");
	} else {
		$("#paragraph01").html("Walk is not selected");
	}
	
	if ($("#drive").is(':checked')) {
		$("#paragraph02").html("You clicked drive");
	} else {
		$("#paragraph02").html("Drive is not checked");
	}
	
	if ($("#fly").is(':checked')) {
		$("#paragraph03").html("You clicked fly");
	} else {
		$("#paragraph03").html("Fly is not checked");
	}
}