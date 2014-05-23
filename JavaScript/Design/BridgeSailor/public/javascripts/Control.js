/**
 * New node file
 */

define([ 'SailorBridgeExpert', 'SailorBridge', 'Sloop', 'Ketch', 'Yawl',
		"Utilities" ], function(SailorBridgeExpert, SailorBridge, sloop, ketch,
		yawl, utilities) {
	'use strict';

	var Control = (function() {

		var elf;

		// Constructor
		function Control(elfInit) {
			console.log("Control called.");

			elf = elfInit;

			elf.sloop = sloop;
			elf.ketch = ketch;
			elf.yawl = yawl;

			elf.sailorBridge = new SailorBridge();
			elf.SailorBridgeExpert = new SailorBridgeExpert();

			$("#sailor").click(this.runSailor);
			$("#sailorExpert").click(runSailExpert);
			$("#unitTest").click(unitTest);
		}

		Control.prototype.runSailor = function(bridge) {
			setBridge(elf.sailorBridge);
		};

		var runSailExpert = function() {
			setBridge(elf.SailorBridgeExpert);
		};

		var setBridge = function(bridge) {
			bridge.setBoat(elf.sloop);
			runBridge(bridge, "Sloop", true);

			bridge.setBoat(elf.yawl);
			runBridge(bridge, "Yawl", false);

			bridge.setBoat(elf.ketch);
			runBridge(bridge, "Ketch", false);
		};

		var runBridge = function(bridge, message, clearList) {
			if (clearList) {
				elf.utilities.clear();
			}

			elf.utilities.banner(message);
			elf.utilities.show(bridge.tack());
			elf.utilities.show(bridge.tack());
			elf.utilities.show(bridge.tack());
		};

		var unitTest = function() {
			window.open('/UnitTest');
		};

		return Control;

	}());

	return Control;

});