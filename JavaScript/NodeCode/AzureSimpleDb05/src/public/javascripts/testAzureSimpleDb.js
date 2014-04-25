/* jshint jquery: true, unused: true */
/* globals test: true, Presidents: true, ok: true, start: true, asyncTest: true, equal: true */

$('document').ready(function() {
	'use strict';
	runTest();
	ajaxTestGood();
	$('#debug').append('<li>Document Ready Called</li>');
});

function TestDisplay() {
	'use strict';
	this.debugData = [];
	this.responseData = [];
	this.rowData = [];
	var that = this;

	TestDisplay.prototype.showDebug = function(textToDisplay) {
		that.showDebugTest(textToDisplay);
		this.debugData.push(textToDisplay);
	};
}

TestDisplay.prototype.showError = function(request, ajaxOptions, thrownError) {
	'use strict';
	console.log(request + ' ' + ajaxOptions + ' ' + thrownError);
};

TestDisplay.prototype.clearResponse = function(request, ajaxOptions, thrownError) {
	'use strict';
	console.log(request + ' ' + ajaxOptions + ' ' + thrownError);
	this.responseData = [];
};

TestDisplay.prototype.showDebugTest = function(textToDisplay) {
	'use strict';
	$('#debug').append('<li>' + textToDisplay + '</li>');
};

TestDisplay.prototype.showResponse = function(textToDisplay) {
	'use strict';
	this.responseData.push(textToDisplay);
};

TestDisplay.prototype.displayRow = function(row) {
	'use strict';
	// thisTestDisplay.showDebugTest(row);
	this.rowData.push(row);
};

function runTest() {
	'use strict';
	module('Basic');

	var presidents = null;
	var testDisplay = null;
	
	test("testOne", function() {
		var testDisplay = new TestDisplay();
		presidents = new Presidents(testDisplay);
		presidents.dirName();
		var len = testDisplay.debugData.length;
		ok( len = 1);
	});

	test("testDisplayRowJ", function() {
		testDisplay = new TestDisplay();
		// var states = new Presidents(testDisplay);
		var row = {};
		row.stateName = 'foo';
		row.abbreviation = 'bar';
		row.capital = "fo";
		row.population = 'ten';
		testDisplay.displayRow(row);
		equal(testDisplay.rowData[0].stateName, "foo", "call display row, check data is correct");
	});

	function pauseCode(ms) {
		ms += new Date().getTime();
		while (new Date() < ms) {
		}
	}

	module("dataTests", {
		setup : function() {
			var testDisplay = new TestDisplay();
			presidents = new Presidents(testDisplay);
			testDisplay.showDebugTest("Calling deleteAll");
			presidents.deleteAll();
			testDisplay.showDebugTest("Calling addListOfPresidents");
			presidents.addListOfPresidents();
			pauseCode(500);
			ok(true, "once extra assert per test");
		},
		teardown : function() {
			pauseCode(500);
			ok(true, "and one extra assert after each test");
		}
	});

	asyncTest("testTwo", function() {
		testDisplay.showDebugTest("Test Two started");
		presidents.getPresidents(function() {
			testDisplay.showDebugTest("Test Two Callback");
			var len = testDisplay.rowData.length;
			ok(len > 0, "Len was: " + len);
			start();
			testDisplay.showDebugTest("Test restarted");
		});
	});

	asyncTest("testForWashington", function() {
		presidents.getPresidents(function() {
			var result = false;
			for (var i = 0; i < testDisplay.rowData.length; i++) {
				if (testDisplay.rowData[i].LastName == "Washington") {
					result = true;
					break;
				}
			}
			ok(result, "Could not find Washington");
			start();
		});
	});
}

function ajaxTestGood(url) {
	'use strict';
	asyncTest("ajaxTestGood", function() {
		$('#debug').append('<li>Bar Test called</li>');
		$.ajax({
			type : "GET",
			url : url,
			dataType : "xml",
			cache : 'False',
			success : function(xml) {
				$('#debug').append('<li>Success: ' + xml + '</li>');
				ok(true, url);
				start();
			},
			error : function(request, ajaxOptions, thrownError) {
				$('#debug').append('<li>Failure: ' + request + '</li>');
				$('#debug').append('<li>Failure: ' + ajaxOptions + '</li>');
				$('#debug').append('<li>Failure: ' + thrownError + '</li>');
				ok(false, url);
				start();
			}
		});
	});
}
