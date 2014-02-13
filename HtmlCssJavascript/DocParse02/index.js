
function displayCheckboxSelection()
{		
	if ($("#guest").is(':checked')) {
		$.get("Week05.htm", function(data) {			
			var foo = $("#install-guest-additions-in-linux", '<div>' + data + '</div>')
				.nextUntil('#get-readonly-jsobjects')
				.addBack();
			$('#showData').html(foo);
		});	
	}
	
	if ($("#readOnlyJsObjects").is(':checked')) {
		$.get("Week05.htm", function(data) {			
			var foo = $("#get-readonly-jsobjects", '<div>' + data + '</div>')
				.nextUntil('#share-clipboard-between-windows-and-linux')
				.addBack();
			$('#showData').html(foo);
		});	
	}
	
	if ($("#shareClipBoard").is(':checked')) {		
		$.get("Week05.htm", function(data) {			
			var foo = $("#share-clipboard-between-windows-and-linux", '<div>' + data + '</div>')
				.nextUntil('#virtual-appliances')
				.addBack();
			$('#showData').html(foo);
		});	
	}
	
	if ($("#highlight").is(':checked')) {
		$('#showData').load("Week05.htm", function() {
			$("#get-readonly-jsobjects")
				.nextUntil('#share-clipboard-between-windows-and-linux')
				.addBack().css("background", "#668800");
		});
	} 	
}
	


$(document).ready(function() {
	$("#description").load("Description.html");
	$("input[name=mainGroup]:radio").click(displayCheckboxSelection);
});
