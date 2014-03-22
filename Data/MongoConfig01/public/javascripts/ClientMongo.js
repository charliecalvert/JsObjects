/**
 * @author Charlie Calvert
 */

var app = {
	mongoClient : null,
	init : function() {
		this.mongoClient = new this.MongoClient();
	}
};

app.MongoClient = (function() {
	var request = {
		query : null
	};

	function MongoClient() {
		$('#read').click(read);
		$('#insertConfig').click(insertConfig);
		$('#deleteData').click(deleteData);
		$('#runQuery01').click(runQuery01);
		$('#runQuery02').click(runQuery02);
		$('#queryProject').click(queryProject);
		$('#clear').click(clear);
	}

	var clear = function() {
		$('#config01').empty();
		$('#config02').empty();
		$('#config03').empty();
	};

	var read = function() {
		request.query = {
			"Name" : "ComplexConfig"
		};
		$.getJSON('/read', request, function(config) {
			$('#config01').text(JSON.stringify(config, null, 4));
		});
	};

	var insertConfig = function() {
		$.getJSON('/insertConfig', function(config) {
			$('#config01').text(JSON.stringify(config, null, 4));
		});
	};

	var deleteData = function() {
		$.getJSON('/deleteData', function(config) {
			$('#config01').text(JSON.stringify(config, null, 4));
		});
	};

	var runQuery01 = function(event) {
		var input = $('#userInput01').val();
		try {
			request.query = JSON.parse(input);
		} catch (err) {
			alert("Please enter valid JSON");
		}
		$.getJSON('/read', request, function(result) {
			$('#config02').text(JSON.stringify(result, null, 4));
		});
	};

	var queryProject = function(event) {
		var input = $('#userProject').val();
		try {
			request.query = JSON.parse(input);
		} catch (err) {
			alert("Please enter valid JSON");
		}
		$.getJSON('/queryProject', request, function(result) {
			$('#config02').text(JSON.stringify(result, null, 4));
		});
	};
	var runQuery02 = function(event) {
		var input = $('#userInput02').val();
		try {
			request.query = JSON.parse(input);
		} catch (err) {
			alert("Please enter valid JSON");
		}
		$.getJSON('/read', request, function(result) {
			$('#config03').text(JSON.stringify(result, null, 4));
		});
	};

	return MongoClient;
}());

$(document).ready(function() {
	app.init();
});