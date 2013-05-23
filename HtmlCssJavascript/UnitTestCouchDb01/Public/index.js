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
		var app = new ELF.own.App();
		var result = app.add(2, 3);
		var expected = 5;
		equal(result, expected);
	});
	
	test('TestAdd2', function() {
		var app = new ELF.own.App();
		var result = app.add(2, 3);
		var expected = 5;
		ok(result === expected, 'result for now: ' + result);
	});
	
	test('TestMultiply', function() {
		var app = new ELF.own.App();
		var result = app.multiply(2, 3);
		var expected = 6;
		equal(result, expected, 'result for now: ' + result);
	});
};

var createDatabase = function() {
    module("Create Database")
    
    asyncTest('createDatabase', function() {
        var app = new ELF.own.AjaxBase();
        app.noData('/createDatabase', function() {
            ok(true);
            start();
        },
        function(err) {
            ok(false, err.responseText)
            start(); 
        });
    });
}

var ajaxWriteTests = function(moduleName, typeRequest) {

	module(moduleName);
	
	asyncTest('writeJson', function() {
		var app = new ELF.own.AjaxBase();
		
		var dataInfo = {
	    	dataType: 0,
	    	docName: 'Names',
			fileName: 'Names.json',
	    };
	    
		var person = { "firstName": "Sarah",
					   "lastName": "Lu",
					   "age": 3 };
		var data = { 
			dataInfo: JSON.stringify(dataInfo),
			names: JSON.stringify(person)			
		};
		
		app.writeJson(data, typeRequest, function(data) {
			equal(data.Result, 'Success');
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('writeJson', function() {
		var app = new ELF.own.AjaxBase();
		
		var person = { 
			"firstName": "Macy",
			"lastName": "Ng",
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
			docNamePerson: 'Person',
			docNameNpcs: 'Npcs',
			docNameGrid: 'Grid'
	    };
	    
		var data = { 
			dataInfo: JSON.stringify(dataInfo), 
			person: JSON.stringify(person),
			npcs: JSON.stringify(npcs),
			grid: JSON.stringify(grid)		
		};
		
		app.writeJson(data, typeRequest, function(data) {
			equal(data.Result, 'Success');
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to writeJson failed: ' + request.responseText);
			start();
		});
	});
	
};

var ajaxReadTests = function(moduleName, typeRequest) {
    
	asyncTest('readJsonPerson', function() {
		var app = new ELF.own.AjaxBase();
		app.readJson('Person', function(data) {
			try {
			    var result = JSON.parse(data.person);
				equal(result.firstName, 'Macy');
				equal(result.age, 3);
				ok(typeof result.age === "number");
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
		var app = new ELF.own.AjaxBase();
		app.readJson('Npcs', function(data) {
			try {
			    var result = JSON.parse(data.npc);
				equal(result[0].row, 6);			
				ok(typeof result[0].row === "number");
				equal(result[0].traits.Core.Health, -1);
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
		var app = new ELF.own.AjaxBase();
		app.readJson('Grid', function(data) {
		    var result = JSON.parse(data.grid);
			try {
				equal(result[0][0], 0);			
				ok(typeof result[0][0] === "number");
				equal(result[2][4], 1);
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
 //	mathTests();
 //	createDatabase();
    ajaxWriteTests('POST Tests', 'POST');
 	ajaxWriteTests('GET Tests', 'GET');
    ajaxReadTests('GET Tests', 'GET');
 });