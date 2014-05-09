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

require(['jquery', 'Elf', 'SailorExpertBridge', 'SailorBridge', 'SailorDisplay', 'Sloop', 'Ketch', 'Yawl'], function(jq, elf, SailorExpert, Sailor, SailorDisplay, sloop, ketch, yawl) {'use strict';

	elf.sloop = sloop;
	elf.ketch = ketch;
	elf.yawl = yawl;

	elf.sailorTools = {};

	elf.sailorTools.sailorSloop = new Sailor(sloop);
	elf.sailorTools.sailorKetch = new Sailor(ketch);
	elf.sailorTools.sailorYawl = new Sailor(yawl);

	elf.sailorTools.sailorExpertSloop = new SailorExpert(sloop);
	elf.sailorTools.sailorExpertKetch = new SailorExpert(ketch);
	elf.sailorTools.sailorExpertYawl = new SailorExpert(yawl);

	elf.display = new SailorDisplay(elf.sailorTools);

	// Make a global we can find.
	this.AAAElvenwareBridge = elf;
});
