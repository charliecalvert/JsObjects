/**
 * @author Charlie Calvert
 */

// specs code
describe("ElfController", function() {'use strict';
		
	
	beforeEach(function() {
		module('elfGame');
		module('elfWorld');	
	});
	
	it("TestGameBoard Check ElfGame Width", inject(function(elfgameService) {
		var mapGrid = {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		};
		elfgameService.start(mapGrid);
		var actual = elfgameService.width();		
		expect(actual).toEqual(576);
	}));
});

