/**
 * @author charlie
 */

 describe("GameBoard", function() {'use strict';
	var elfController = null;
	var gameBoard = null;
	var elfgameService = null;
	var gameEventService = null;

	beforeEach(function() {
		module('elfgame');
		module('elfworld');
	});

	/* beforeEach(inject(function($rootScope, $controller) {
		elfController = $rootScope.$new();
		gameEventService = $rootScope.$new();
		$controller('ElfController', { $scope: elfController, gameEventService: gameEventService });
	})); */

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

(function() {'use strict';
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var reporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(reporter);

	jasmineEnv.specFilter = function(spec) {
		return reporter.specFilter(spec);
	};

	var currentWindowOnload = window.onload;

	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
	};

	function execJasmine() {
		jasmineEnv.execute();
	}
})();
