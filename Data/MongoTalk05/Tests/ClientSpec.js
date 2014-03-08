describe("Client Side Suite", function() {
	
	var mongoData = null;
	
	beforeEach(function() {
		mongoData = new MongoData();		
	});
	
	it("Proves Jasmine is working", function() {
		expect(true).toBe(true);
	});
	
	it("Proves we can create MongoData", function() {
		expect(mongoData).not.toBeNull();
	});
	
	it("Performs Async intergration test on readAll", function(done) {
		mongoData.readAll(function(data) {
			expect(data[0].firstName).toBe("George");
			done();
		});
	});
	
	it("Performs a mock test - a spy - on getJSON ", function() {
		spyOn($, "getJSON");
		mongoData.readAll(null);
		expect($.getJSON).toHaveBeenCalled();
	});
	
	it("Performs a mock test - a spy - on getJSON parameters", function() {
		spyOn($, "getJSON");
		mongoData.readAll(null);
		expect($.getJSON).toHaveBeenCalledWith("/readAll", null);
	});
	
	
});
