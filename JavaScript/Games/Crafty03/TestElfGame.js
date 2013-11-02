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

	beforeEach(inject(function($rootScope, $controller) {
		elfController = $rootScope.$new();
		gameEventService = $rootScope.$new();
		$controller('ElfController', { $scope: elfController, gameEventService: gameEventService });
	}));

	beforeEach(inject(function($rootScope, $controller) {
		gameBoard = $rootScope.$new();
		gameEventService = $rootScope.$new();
		elfgameService = $rootScope.$new();
		$controller('GameBoard', { $scope: gameBoard, gameEventService: gameEventService, elfgameService: elfgameService });
	}));


	it("Width", function() {
		var actual = elfgameService.reportEvent('a');
		expect(actual).toEqual('3');
	});

	it("Check ElfGame Width", inject(function(GameBoard) {
		var actual = elfgameService.width();
		expect(actual).toEqual(3);
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
