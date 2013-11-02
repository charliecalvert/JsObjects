/**
 * @author Charlie Calvert
 */

// specs code
describe("ElfController", function() {'use strict';
		
	var gameBoard = null;
	var elfgameService = null;
	var gameEventService = null;	
	
	beforeEach(function() {
		module('elfgame');	
	});
	
	/* beforeEach(inject(function($rootScope, $controller) {
		gameBoard = $rootScope.$new();
		gameEventService = $rootScope.$new();
		elfgameService = $rootScope.$new();		 
		$controller('GameBoard', { $scope: gameBoard, gameEventService: gameEventService, elfgameService: elfgameService });
	})); */

	
	/* it("Check Name", function() {
		var actual = elfgameService.width();		
		expect(actual).toEqual('3');
	}); */
	
	it("Check ElfGame Width", inject(function(elfgameService) {
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
