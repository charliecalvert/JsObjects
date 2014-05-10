/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		"Sloop" : 'Boats/Sloop',
		"Ketch" : 'Boats/Ketch',
		"Yawl" : 'Boats/Yawl',
		"jquery" : 'jquery-2.1.0.min'
	}
});

require(['jquery', 'Elf', 'SailorExpertBridge', 'SailorBridge', 'SailorDisplay', 'Sloop', 'Ketch', 'Yawl'], 
		function(jq, elf, SailorExpertBridge, SailorBridge, SailorDisplay, sloop, ketch, yawl) {'use strict';

	elf.sloop = sloop;
	elf.ketch = ketch;
	elf.yawl = yawl;

	elf.sailorTools = {};

	elf.sailorTools.sailorSloop = new SailorBridge(sloop);
	elf.sailorTools.sailorKetch = new SailorBridge(ketch);
	elf.sailorTools.sailorYawl = new SailorBridge(yawl);

	elf.sailorTools.sailorExpertSloop = new SailorExpertBridge(sloop);
	elf.sailorTools.sailorExpertKetch = new SailorExpertBridge(ketch);
	elf.sailorTools.sailorExpertYawl = new SailorExpertBridge(yawl);

	elf.display = new SailorDisplay(elf.sailorTools);

	// Make a global we can find.
	this.AAAElvenwareBridge = elf;
});
