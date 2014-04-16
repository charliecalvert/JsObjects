/**
 * @author Charlie Calvert
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

// Types.js - Constructors used behind the scenes
// A constructor for defining new cars

// FactoryExample.js
// Define a skeleton vehicle factory
function SailBoatFactory() {
}

// Define the prototypes and utilities for this factory

// Our default boat is Sloop
SailBoatFactory.prototype.vehicleClass = Sloop;

// Our Factory method for creating new Vehicle instances
SailBoatFactory.prototype.createVehicle = function(options) {

	switch (options.vehicleType) {
	case "sloop":
		this.vehicleClass = Sloop;
		break;
	case "yawl":
		this.vehicleClass = Yawl;
		break;
	// defaults to VehicleFactory.prototype.vehicleClass (Car)
	}

	return new this.vehicleClass(options);

};

