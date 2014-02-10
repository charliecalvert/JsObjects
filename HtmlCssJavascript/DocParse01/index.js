
function displayCheckboxSelection()
{		
	if ($("#guest").is(':checked')) {		
		$('#showData').load('Week05.htm #guest');
	}
	
	if ($("#readOnlyJsObjects").is(':checked')) {
		$('#showData').load("Week05.htm #readOnlyJsObjects");		
	}
	
	if ($("#sshDiv").is(':checked')) {		
		$('#showData').load('Week05.htm #sshDiv');
	}
}


$(document).ready(function() {
	$("#description").load("Description.html");
	$("input[name=mainGroup]:radio").click(displayCheckboxSelection);
});
