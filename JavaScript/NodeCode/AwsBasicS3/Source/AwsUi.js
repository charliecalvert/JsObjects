var AwsUi = ( function() {

		var buttons = null;
		var options = null;
		var dataIndex = 0;

		function AwsUi() {
			$("#listBuckets").click(listBuckets);
			$("#copyToS3").click(copyToS3);
			$("#getOptions").click(getOptions);
			$("#forwardButton").click(forward);
			$("#backButton").click(backward);
			$("#buildAll").click(buildAll);
			getOptions();
		};		
		
		var buildAll = function() {
			$.getJSON("/buildAll", function(result) {
				$("#buildData").empty();
				var fileArray = result.data.split("\n");
				for (var i = 0; i < fileArray.length; i++) {
					if (fileArray[i].length > 0) { 
						$("#buildData").append("<li>" + fileArray[i] + "</li>");
					}
				}
			});
		};		

		var copyToS3 = function() {
			$.getJSON("/copyToS3", {options: JSON.stringify(options[dataIndex])}, function(data) {
				$("#copyResult").html("Result: " + data.result);
			});
		};

		var displayOptions = function(options) {
			$("#currentDocument").html(dataIndex + 1);
			$("#pathToConfig").html(options.pathToConfig);
			$("#reallyWrite").html(options.reallyWrite ? "true" : "false");
			$("#bucketName").html(options.bucketName);
			$("#folderToWalk").html(options.folderToWalk);
			$("#s3RootFolder").html(options.s3RootFolder);
			$("#createFolderToWalkOnS3").html(options.createFolderToWalkOnS3 ? "true" : "false");
			$("#createIndex").html(options.createIndex ? "true" : "false");
			$("#filesToIgnore").html(options.filesToIgnore);
		};

		var getOptions = function() {
			$.getJSON("/getOptions", function(optionsInit) {
				options = optionsInit;
				$('#documentCount').html(options.length);				 
				displayOptions(options[0]);
			}).fail(function(a) {
				alert(JSON.stringify(a));
			});
		};

		var forward = function() {
			if (dataIndex < options.length - 1) {
				dataIndex++;
				displayOptions(options[dataIndex]);
			}
		};

		var backward = function() {
			if (dataIndex > 0) {
				dataIndex--;
				displayOptions(options[dataIndex]);
				return true;
			}
			return false;
		};

		var listBuckets = function() {
			$.getJSON("/listBuckets", function(data) {
				for (var i = 0; i < data.length; i++) {
					$("#buckets").append("<li>" + data[i] + "</li>");
				}
			});
		};
		
		return AwsUi;
	}());

$(document).ready(function() {
	new AwsUi();
});
