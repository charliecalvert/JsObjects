



$(document).ready(function() {

	$.getJSON('/read', function(data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
		}
	});
});
