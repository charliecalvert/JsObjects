/**
 * @author charlie
 */

 describe("Test Elf Game", function() {'use strict';
 	var elfController = null;
 	var elfGameService = null;

	beforeEach(function() {
		module('elfGameMod');
		module('elfPlayer');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {	
		elfController = $rootScope.$new();		
		$controller('ElfController', { $scope: elfController});
		elfGameService = $injector.get('elfGameService');		
	}));
	
	it("Can create gameEventService", function() {
		expect(elfGameService).toNotEqual(null);
	});
	

	it("gets the width of the playing field", function() {
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
	});

	it("gets the height of the playing field", function() {
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
	});
	
	it("reports an event", function() {
		var actual = elfGameService.reportEvent();
		expect(actual).toEqual(true);
	});
	
	it("sends a change direction message", function() {
		var testValue = "turtled change direction message";
		var actual = elfGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
	});
	
	it("sends a change direction message to elfcontroller", function() {
		var testValue = "turtle soup in elf controller";
		var actual = elfGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
		expect(elfController.eventNote).toEqual(testValue);
	});
	
	
});

