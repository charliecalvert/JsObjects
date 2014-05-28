/*globals describe:true, it:true, expect:true, define: true */

define(["Singleton"], function(Singleton) {
	'use strict';

	describe("Singleton Module Suite", function() {

		
		var a, b, c, d;
		
		beforeEach(function() {
			a = new Singleton();
			b = new Singleton();
			c = new Singleton();
			d = new Singleton();
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


		it("proves we can create a singleton", function() {
			// This example is confusing. We create an instance of the class
			// with new, and then even if we don't call new when assigning 
			// b, we still get back the instance that was created with new. 
			// And shared is available on all "instances", since each 
			// "instance" is really just the first instance.
			var a = new MySingletonClass();
			var b = MySingletonClass(); // jshint ignore: line
			var c = new MySingletonClass();
			var d = MySingletonClass(); // jshint ignore: line
			a.display(a === b);
			b.display(a === c);
			a.display(a === d);
			a.display(b === c);
			b.display(c === d);
			var e = {};
			a.display(a === e);
			a.display(a.shared);
			a.display(b.shared);

		});
	});

});
