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
			getOptions();
		};

		var listBuckets = function() {
			$.getJSON("/listBuckets", function(data) {
				for (var i = 0; i < data.length; i++) {
					$("#buckets").append("<li>" + data[i] + "</li>");
				}
			});
		};

		var copyToS3 = function() {
			$.getJSON("/copyToS3", {options: options[dataIndex]}, function(data) {
				$("#copyResult").html("Result: " + data.result);
			});
		};

		var displayOptions = function(options) {
			$("#currentDocument").html(dataIndex + 1);
			$("#pathToConfig").html(options.pathToConfig);
			$("#reallyWrite").html(options.reallyWrite);
			$("#bucketName").html(options.bucketName);
			$("#folderToWalk").html(options.folderToWalk);
			$("#s3RootFolder").html(options.s3RootFolder);
			$("#createFolderToWalkOnS3").html(options.createFolderToWalkOnS3);
			$("#createIndex").html(options.createIndex);
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

		return AwsUi;
	}());

$(document).ready(function() {
	new AwsUi();
});
