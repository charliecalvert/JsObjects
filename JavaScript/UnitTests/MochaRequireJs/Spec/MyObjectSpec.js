/**
 * New node file
 */

'use strict';
var requirejs = require("requirejs");
requirejs.config({
	baseUrl : '.',
	paths : {
		'MyObject' : 'Source/MyObject',
	},
	nodeRequire : require
});

describe('Require Js Test Suites', function() {
	var myObject;
	var assert;

	before(function(done) {
		// This saves the module foo for use in tests. You have to use
		// the done callback because this is asynchronous.
		requirejs([ 'MyObject', "assert" ], function(myobj, asrt) {
			console.log("Require called");
			myObject = myobj;
			assert = asrt;
			done();
		});
	});

	describe('Requirejs Tests', function() {
		it('Does object exist', function() {
			assert.equal(myObject.name, "MyObject");
		});

		it("Test for true", function() {
			assert.equal(true, true);
		});

		it("can multiply", function() {
			assert.equal(myObject.multiply(8, 7), 56);
		});
	});
});