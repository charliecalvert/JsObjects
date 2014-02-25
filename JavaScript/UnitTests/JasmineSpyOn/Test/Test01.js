/**
 * @author charlie
 */

describe("Test loading file", function() {

	it("Tests that function is called with Sources.html", function() {
		var data = 'Glossotherium (literally "Tongue Beast") was a genus of ground sloth. It was a heavily built animal with a length of about 4 metres (13 ft) snout to tail-tip and a weight estimated at 1002.6 kg (2210.3 lbs), and could potentially assume a slight bipedal stance.';
		spyOn($, "get").and.returnValue({
			fail : function(c) {
				c(data);
			}
		});
		textLoader.loadFile("Sources.html", function(data) {
			console.log(data);
		});
		expect($.get).toHaveBeenCalledWith("Sources.html", jasmine.any(Function));
	});

});

describe("Async file", function() {

	it("should make a real AJAX request", function(done) {
		textLoader.loadFile("Sources.html", function(responseText) {
			var bar = $(responseText).filter('#paragraph04').html();
			expect(bar).toBe('Fine time.');
			done();
		});

	});

	it("Tests that the call back is called", function(done) {

		var data = 'Glossotherium (literally "Tongue Beast") was a genus of ground sloth. It was a heavily built animal with a length of about 4 metres (13 ft) snout to tail-tip and a weight estimated at 1002.6 kg (2210.3 lbs), and could potentially assume a slight bipedal stance.';
		/*spyOn($, "get").and.returnValue({
			fail : function(c) {
				c(data);
			}
		}); */
		 spyOn($, "get").and.callFake(function(options, foo) { 
		 	foo(); // This is the call back
		 	expect(callback).toHaveBeenCalled();		 	
         	done();
         }); 
		var callback = jasmine.createSpy();
		// var callback = function() { done(); };
		//spyOn(callback);
		textLoader.loadFile("Sources.html", callback);
		
	});
});
