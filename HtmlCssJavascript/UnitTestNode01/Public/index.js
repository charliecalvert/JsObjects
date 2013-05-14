/**
 * @author Charlie Calvert
 */

function myTests() {
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
	
	asyncTest('readJson', function() {
		var app = new App();
		app.readJsonTest(function(data) {
			var result = JSON.parse(data);
			equal(result.firstName, 'Suzie');
			equal(result.age, 3);
			ok(typeof result.age === "number");
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('writeJson', function() {
		var app = new App();
		var nameIt = { "firstName": "Suzie",
					   "lastName": "Lu",
					   "age": 3 };
		var data = { 
			names: JSON.stringify(nameIt),
			bar: 3
		};
		
		app.writeJsonTest(data, function(data) {
			equal(data.Result, 'Success');
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
}
 
 $(document).ready(function() {
 	myTests();	
 });