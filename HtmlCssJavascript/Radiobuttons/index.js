$(document).ready(function() {
	$("#paragraph01").html("This sentence added by jQuery");
	$("input[name=mainGroup]:radio").click(displayRadioButtonSelection)
});

function displayRadioButtonSelection()
{		
	var id = $("input[name=mainGroup]:checked").attr('id');
	
	$("#paragraph01").html("You clicked " + id);
}