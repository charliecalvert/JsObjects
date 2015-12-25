/**
 * Created by charlie on 10/1/15.
 */

function displayCheckboxSelection() {  'use strict';
	if ($("#checkBox01").is(':checked')) {
		$("#cb01").html("You checked CheckBox01");
	} else {
		$("#cb01").html("CheckBox01 is not selected");
	}

	if ($("#checkBox02").is(':checked')) {
		$("#cb02").html("You checked CheckBox02");
	} else {
		$("#cb02").html("CheckBox02 is not checked");
	}

	if ($("#checkBox03").is(':checked')) {
		$("#cb03").html("You clicked CheckBox03");
	} else {
		$("#cb03").html("CheckBox03 is not checked");
	}
}

function displayRadioButtonSelection(event) { 'use strict';
	var id = event.target.textContent;
	$("#rb01").html("You clicked " + id);
}

function buttonHandler(message) { 'use strict';
	$('#formResults').html(message);
}

$(document).ready(function() { 'use strict';
	$("#target").submit(function(event) {
		event.preventDefault();
		var userFormData = $(this).serialize();
		$('#formResults').html(userFormData);
	});

	$("input[name=check]:checkbox").click(displayCheckboxSelection);
	$('.elves .btn').click(displayRadioButtonSelection);
});