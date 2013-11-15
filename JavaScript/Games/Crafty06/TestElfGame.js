/**
 * @author charlie
 */

 describe("GameBoard", function() {'use strict';

	beforeEach(function() {
		module('elfGameMod');
		module('elfPlayer');
	});


	it("Check ElfGame Width", inject(function(elfGameService) {
		var actual = elfGameService.reportEvent();
		expect(actual).toEqual(true);
	}));

	it("Test method to get the width of the playing field", inject(function(elfGameService) {
		elfGameService.initMapGrid({
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		});
		var actual = elfGameService.width();
		expect(actual).toEqual(576);
	}));

	it("Test method to get the height of the playing field", inject(function(elfGameService) {
		elfGameService.initMapGrid({
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		});
		var actual = elfGameService.height();
		expect(actual).toEqual(12 * 32);
	}));
	
});

