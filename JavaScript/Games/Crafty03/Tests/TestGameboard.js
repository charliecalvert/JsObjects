/**
 * @author Charlie Calvert
 */

// specs code
describe("ElfController", function() {'use strict';
		
	
	beforeEach(function() {
		module('elfGameMod');
		module('elfWorld');	
	});
	
	it("TestGameBoard Check ElfGame Width", inject(function(elfGameService) {
		var mapGrid = {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		};
		elfGameService.start(mapGrid);
		var actual = elfGameService.width();		
		expect(actual).toEqual(576);
	}));
});

