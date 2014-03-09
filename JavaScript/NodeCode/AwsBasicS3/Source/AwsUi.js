
var AwsUi = (function() {

	function AwsUi() {
		$("#listBuckets").click(listBuckets);
		$("#copyToS3").click(copyToS3);		
	};

	var listBuckets = function() {
		$.getJSON("/listBuckets", function(data) {
			for (var i = 0; i < data.length; i++) {
				$("#buckets").append("<li>" + data[i] + "</li>");
			}
		});
	};
	
	var copyToS3 = function() {
		$.getJSON("/copyToS3", function(data) {
			$("#copyResult").html("Result: " + data.result);			
		});
	};

	return AwsUi;
}());

$(document).ready(function() {
	new AwsUi();
});