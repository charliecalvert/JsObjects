/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Sloop: true */

describe("Osmani Factory Suite", function() {

	it("proves we can run a test", function() {
		expect(true).toBe(true);
	});

	it("creates a sloop", function() {
		// Create an instance of our factory that makes boats
		var sloopFactory = new SailBoatFactory();
		var sloop = sloopFactory.createVehicle({
			vehicleType : "sloop",
			color : "yellow",
			sails : 3
		});

		// Test to confirm our Sloop was created
		expect(sloop instanceof Sloop).toBe(true);
	});

	it("creates a yellow sloop", function() {
		// Create an instance of our factory that makes boats
		var sloopFactory = new SailBoatFactory();
		var sloop = sloopFactory.createVehicle({
			vehicleType : "sloop",
			color : "yellow",
			sails : 3
		});
 
		expect(sloop.color).toBe('yellow');		
	});

	it("shows that our sloop has a keel", function() {
		var sloopFactory = new SailBoatFactory();
		var sloop = sloopFactory.createVehicle({
			vehicleType : "sloop",
			color : "yellow",
			sails : 3
		});

		expect(sloop.keel).toBe(true);
	});

});
