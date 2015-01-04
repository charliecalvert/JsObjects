/**
 * New node file
 */

/*
 * var requirejs = require("requirejs"); requirejs.config({ baseUrl: '.',
 * nodeRequire: require });
 */

describe('Require Js Test Suites', function() {
	'use strict';
	var myObject;	
	
	before(function(done) {		
		// This saves the modules for use in tests. You have to use
		// the done callback because this is asynchronous.
		requirejs(['MyObject'], function(mo) {
			myObject = mo;		
			done();
		});
		
		
	});

	describe('Requirejs Tests', function() {
		it('Does object exist', function() {
			expect(myObject.name).to.equal("MyObject");
		});

		it('proves true is true', function() {
			var a = true;
			a.should.equal(true);
		});
		
		it('proves myobject can add', function() {
			expect(myObject.add(3, 5)).to.equal(8);
		});
	});
});