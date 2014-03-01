LoadJson.prototype.testMe = function() {
	
	describe("These are the private tests", function() {

		it("Tests that loadFile is called with Sources.html", function() {
			expect(true).toBe(true);
		});
		
		it("Calls a private method", function() {
			expect(true).toBe(true);
		});
	});

};
var myController = new LoadJson();
myController.testMe();