/**
 * @author charlie
 */

 describe("GameBoard", function() {'use strict';
	// var elfController = null;
	var gameBoard = null;
	var elfgameService = null;
	var gameEventService = null;

	beforeEach(function() {
		module('elfgame');
		module('elfworld');
	});

	beforeEach(inject(function($rootScope, $controller) {
		gameBoard = $rootScope.$new();
		gameEventService = { towerBroadcast: function() { return true; } };
		elfgameService = $rootScope.$new();
		$controller('GameBoard', { $scope: gameBoard, gameEventService: gameEventService, elfgameService: elfgameService });
	})); 

	it("Check ElfGame Width", function() {
		var actual = elfgameService.reportEvent();
		expect(actual).toEqual(true);
	});

	it("Test method to get the width of the playing field", inject(function(elfgameService) {
		elfgameService.initMapGrid({
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		});
		var actual = elfgameService.width();
		expect(actual).toEqual(576);
	}));

	it("Test method to get the height of the playing field", inject(function(elfgameService) {
		elfgameService.initMapGrid({
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		});
		var actual = elfgameService.height();
		expect(actual).toEqual(12 * 32);
	}));
	
});

