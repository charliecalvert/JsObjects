/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		"Sloop" : 'Boats/Sloop',
		"Ketch" : 'Boats/Ketch',
		"Yawl" : 'Boats/Yawl',
		"Control": "Control",
		"jquery" : 'jquery-2.1.0.min'
	}
});

require([ 'jquery', "Elf", "Control" ], function(jq, elf, Control) {
	'use strict';

	
	elf.control = new Control(elf);
	elf.control.runSailor();
});
