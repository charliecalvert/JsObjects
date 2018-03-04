define(['clientMongo', 'pubSub'], function(clientMongo) {'use strict';

	describe("Client Side Suite", function() {

		/* var mongoData = null; */

		beforeEach(function() {

		});

		it("Proves Jasmine is working", function() {
			expect(true).toBe(true);
		});

		it("Proves we can create clientMongo", function() {
			expect(clientMongo).toBeTruthy();
		});

		it("Performs Async intergration test on readAll", function(done) {
			clientMongo();
			$.publish('readAll', function(data) {
				expect(data[0].firstName).toBe("Suzy");
				done();
			});
		});
/*
		it("Performs a mock test - a spy - on getJSON ", function() {
			spyOn($, "getJSON");
			mongoData.readAll(null);
			expect($.getJSON).toHaveBeenCalled();
		});

		it("Performs a mock test - a spy - on getJSON parameters", function() {
			spyOn($, "getJSON");
			mongoData.readAll(null);
			expect($.getJSON).toHaveBeenCalledWith("/readAll", null);
		}); */
	});
});
