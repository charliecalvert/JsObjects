/*globals describe:true, it:true, expect:true, define: true */

define(function(require) {
	'use strict';

	describe("Singleton Module Suite", function() {

		it("proves we can run a test", function() {
			expect(true).toBe(true);
		});

		it("proves we can create a singletonModule", function() {
			var a = new elf.SingletonModule();
			var b = new elf.SingletonModule();
			var c = new elf.SingletonModule();
			var d = new elf.SingletonModule();
			expect(a === b).toBe(true);
			expect(a === c).toBe(true);
			expect(a === d).toBe(true);
			expect(b === c).toBe(true);
			expect(c === d).toBe(true);
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
