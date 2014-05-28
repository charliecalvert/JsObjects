/*globals describe:true, it:true, expect:true, define: true */

define(['SingletonModule'], function(SingletonModule) {
	'use strict';

	describe("Singleton Module Suite", function() {

		var a, b, c, d;
		
		beforeEach(function() {
			a = new SingletonModule();
			b = new SingletonModule();
			c = new SingletonModule();
			d = new SingletonModule();	
		});
		
		it("proves we can run a test", function() {
			expect(true).toBe(true);
		});

		it("proves we can create a singletonModule01", function() {		
			expect(a === b).toBe(true);
		});

		it("proves we can create a singletonModule02", function() {
			

			expect(a === c).toBe(true);
		});

		it("proves we can create a singletonModule03", function() {
			
			expect(a === d).toBe(true);
		});
		
		it("proves we can create a singletonModule04", function() {
			expect(b === c).toBe(true);
		});

		it("proves we can create a singletonModule05", function() {
			expect(c === d).toBe(true);
		});

		it("proves we can create a singletonModule06", function() {
			var e = [];
			expect(a === e).toBe(false);
		});

	});

});
