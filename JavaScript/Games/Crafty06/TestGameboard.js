/**
 * @author Charlie Calvert
 */

// specs code
describe("TestGameboard", function() {'use strict';
		
	
	beforeEach(function() {
		module('gameWrapper');
		module('elfGameMod');
		module('elfPlayer');				
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

