/**
 * New node file
 */

var Interface = require("./Interface").Interface;
var Sloop = require("./Sloop").Sloop;
var Yawl = require("./Yawl").Yawl;
var Ketch = require("./Ketch").Ketch;

var Boat = new Interface('Boat', ['tack', 'luff', 'reach']);
var OverNight = new Interface('OverNight', ['anchor', 'dock']);

/* BicycleShop class. */

var BoatBuilder = function() {
};

BoatBuilder.prototype = {
	buildBoat : function(model) {
		var boat;

		switch (model) {
		case 'Sloop':
			boat = new Sloop();
			break;
		case 'Yawl':
			boat = new Yawl();
			break;
		case 'Ketch':
			boat = new Ketch();
			break;
		default:
			boat = new Sloop();
		}
		Interface.ensureImplements(boat, Boat, OverNight);

		boat.tack();
		boat.anchor();		

		return boat;
	}
};

var b = new BoatBuilder();
b.buildBoat("Sloop");
b.buildBoat("Yawl");
b.buildBoat("Ketch");

