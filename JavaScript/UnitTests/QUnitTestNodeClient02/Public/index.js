/**
 * @author Charlie Calvert
 */

function mathTests() {
	module('Math Tests');
	
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
};

var ajaxTests = function(moduleName, typeRequest) {

	module(moduleName);
	
	asyncTest('writeJson', function() {
		var app = new App();
		
		var dataInfo = {
	    	dataType: 0,
			fileName: 'Names.json',
	    };
	    
		var nameIt = { "firstName": "Suzie",
					   "lastName": "Lu",
					   "age": 3 };
		var data = { 
			dataInfo: JSON.stringify(dataInfo),
			names: JSON.stringify(nameIt)			
		};
		
		app.writeJsonTest(data, typeRequest, function(data) {
			equal(data.Result, 'Success');
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('writeJson', function() {
		var app = new App();
		
		var person = { 
			"firstName": "Suzie",
			"lastName": "Lu",
			"age": 3 
		};
		
		var npcs = [
		{
	        "column": 1,
	        "row": 6,
	        "npcNumber": 5,
	        "traits": {
	            "Core": {
	                "Type": "Orc",
	                "Confidence": 0,
	                "Experience": 0,
	                "Health": -1,
	                "Knowledge": 0,
	                "Moves": 0,
	                "Strength": 3,
	                "Wisdom": 1
	            },
	            "Items": {
	                "Bread": 0,
	                "Plants": 0,
	                "Water": 0
	            }
	        },
	        "npcName": "Orc-1-6-5"
	    },
	    {
	        "column": 5,
	        "row": 1,
	        "npcNumber": 1,
	        "traits": {
	            "Core": {
	                "Type": "Orc",
	                "Confidence": 0,
	                "Experience": 0,
	                "Health": 5,
	                "Knowledge": 0,
	                "Moves": 0,
	                "Strength": 3,
	                "Wisdom": 1
	            },
	            "Items": {
	                "Bread": 0,
	                "Plants": 0,
	                "Water": 0
	            }
	        },
	        "npcName": "Orc-5-1-1"
	    }];
	    
	    var grid = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];
		
	    var dataInfo = {
	    	dataType: 1,
			fileNamePerson: 'Person.json',
			fileNameNpcs: 'Npcs.json',
			fileNameGrid: 'Grid.json'
	    };
	    
		var data = { 
			dataInfo: JSON.stringify(dataInfo), 
			person: JSON.stringify(person),
			npcs: JSON.stringify(npcs),
			grid: JSON.stringify(grid)		
		};
		
		app.writeJsonTest(data, typeRequest, function(data) {
			equal(data.Result, 'Success');
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('readJsonPerson', function() {
		var app = new App();
		app.readJsonTest('Person.json', function(data) {
			try {
				equal(data.firstName, 'Suzie');
				equal(data.age, 3);
				ok(typeof data.age === "number");
			} finally {
				start();
			}
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('readJsonNpcs', function() {
		var app = new App();
		app.readJsonTest('Npcs.json', function(data) {
			try {
				equal(data[0].row, 6);			
				ok(typeof data[0].row === "number");
				equal(data[0].traits.Core.Health, -1);
			} finally {
				start();
			}
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('readJsonGrid', function() {
		var app = new App();
		app.readJsonTest('Grid.json', function(data) {
			try {
				equal(data[0][0], 0);			
				ok(typeof data[0][0] === "number");
				equal(data[2][4], 1);
			} finally {
				start();
			}
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
};

 $(document).ready(function() {
 	mathTests();
 	ajaxTests('POST Tests', 'POST');
 	ajaxTests('GET Tests', 'GET');
 });