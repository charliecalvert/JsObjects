/**
 * @author Charlie Calvert
 * 
 * Create Boats
 * 
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */


define(function(require) {
	'use strict';

	var SailBoatFactory = (function() {
		var Sloop = require("Sloop");
		var Yawl = require("Yawl");

		// Define a SailBoat factory constructor function
		function SailBoatFactory() {
		}

		// By default we create Sloops
		SailBoatFactory.prototype.product = Sloop;

		// Create a Boat with this function
		SailBoatFactory.prototype.createBoat = function(options) {

			switch (options.boatType) {
			case "sloop":
				this.product = new Sloop(options);
				break;
			case "yawl":
				this.product = new Yawl(options);
				break;
			default:
				this.product = new Sloop(options);
			}

			return this.product;

		};

		return SailBoatFactory;

	}());

	return SailBoatFactory;
});