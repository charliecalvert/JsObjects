Jasmine Spy
===========

Demonstrates how to:

* Use Jasmine to make async calls
* SpyOn to create mock objects

## Async

The Async calls use done:

	it("Integration test makes a real AJAX request", function(done) {
		textLoader.loadFile("Sources.html", function(responseText) {
			var bar = $(responseText).filter('#paragraph04').html();
			expect(bar).toBe('Fine time.');
			done();
		});
	});
	
Looking at the function above, do you see that the test is past **done**
as a parmater? Notice also that it calls **done()** when it is finished.
The call to done notifies Jasmine that your callback is complete.

## SpyOn

Create a mock object and instrument the object so that you can learn 
key facts such as:

- Was the mock object called?
- What parameters were passed to the mock object

	it("Tests that loadFile is called with Sources.html", function() {
		// get is stubbed and never really called
		spyOn($, "get");
		textLoader.loadFile("Sources.html", function(data) {
			console.log(data);
		});
		expect($.get).toHaveBeenCalledWith("Sources.html", 	jasmine.any(Function));
	});
	
Here we use SpyOn to mock **jQuery.get()**: 

	spyOn($, "get");
	
Once we have mocked it, we cn ask questions, such what parameters was it called
with:

	expect($.get).toHaveBeenCalledWith("Sources.html", 	jasmine.any(Function));
	
Our question here is simple: *Was **get** called with two parameters. The first
a string, the second a function. We expect the first parameter, the string, to
be "Sources.html". 

When we mock an object, it is never called. Instead it is stubbed. A fake object
is put in its place.
