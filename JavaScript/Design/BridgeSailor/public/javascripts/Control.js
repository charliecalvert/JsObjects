/**
 * New node file
 */

define([ 'SailorBridgeExpert', 'SailorBridge', 'SailorDisplay', 'Sloop',
		'Ketch', 'Yawl', "Utilities" ], function(SailorBridgeExpert,
		SailorBridge, SailorDisplay, sloop, ketch, yawl, utilities) {

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
		}

		Control.prototype.runSailor = function(bridge) {
			setBridge(elf.sailorBridge);			
		};
		
		var runSailExpert = function() {
			setBridge(elf.SailorBridgeExpert);
		};

		var setBridge = function(bridge) {
			bridge.setBoat(elf.sloop);
			runBridge("Sloop", true);

			bridge.setBoat(elf.yawl);
			runBridge("Yawl", false);

			bridge.setBoat(elf.ketch);
			runBridge("Ketch", false);
		};

		var runBridge = function(message, clearList) {
			if (clearList) {
				elf.utilities.clear();
			}

			elf.utilities.banner(message);
			elf.utilities.show(elf.sailorBridge.tack());
			elf.utilities.show(elf.sailorBridge.tack());
			elf.utilities.show(elf.sailorBridge.tack());
		};

		return Control;

	}());

	return Control;

});