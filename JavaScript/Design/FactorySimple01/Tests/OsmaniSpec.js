/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Car: true */

describe("Osmani Factory Suite", function() {

	it("proves we can run a test", function() {
		expect(true).toBe(true);
	});

	it("creates a sloop", function() {
		// Create an instance of our factory that makes cars
		var sloopFactory = new SailBoatFactory();
		var sloop = sloopFactory.createVehicle({
			vehicleType : "sloop",
			color : "yellow",
			sails : 3
		});

		// Test to confirm our car was created
		expect(sloop instanceof Sloop).toBe(true);

		// Outputs: Car object of color "yellow", doors: 6 in a "brand new" 
		expect(sloop.color).toBe('yellow');
		expect(sloop.keel).toBe(true);
	});

});
