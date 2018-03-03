
function showDataOld() {

	$.getJSON('/read', function(data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
		}
	});

}

function showData() {
	fetch('/read')
		.then(function(response){ return response.json() })
		.then(function(json) {
			for (var i = 0; i < json.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(json[i]) + '</li>');
			}
		})

}


$(document).ready(function() {
	showData();
});
