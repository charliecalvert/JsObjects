/**
 * @author Charlie Calvert
 */

function myTests() {'use strict';

	test('MyFirstTest', function() {
		ok(true);
	});

	test('MySecondTest', function() {
		ok(1 === 1);
	});

	test('TestAdd', function() {
		var app = new App();
		var result = app.add(2, 3);
		var expected = 5;
		equal(result, expected);
	});

	test('TestAdd2', function() {
		var app = new App();
		var result = app.add(2, 3);
		var expected = 5;
		ok(result === expected, 'result for now: ' + result);
	});

	test('TestMultiply', function() {
		var app = new App();
		var result = app.multiply(2, 3);
		var expected = 6;
		equal(result, expected, 'result for now: ' + result);
	});

	/* asyncTest('readJson', function() {
		var app = new App();
		app.readJsonTest(function(data) {
			equal(data.Result, 'Success');
			start();
		}, function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	}); */
	
	
	test('readJson', function() {

		$.ajax = function(options) {
			equal(options.url, "MyData.json");
			options.success({
				"Result" : "Success"
			});
		};

		var app = new App();
		app.readJsonTest(function(data) {
			equal(data.Result, 'Success');
			//start();
		}, function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			//start();
		});
	}); 

}


$(document).ready(function() {'use strict';
	myTests();
}); 