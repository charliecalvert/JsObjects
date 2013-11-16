/**
 * @author Charlie Calvert
 */

describe("Test Broadcasts: gameEventService", function() {'use strict';
	var elfController = null;	
	var gameEventService = null;
	
	beforeEach(function() {
		module('elfPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		elfController = $rootScope.$new();		
		$controller('ElfController', { $scope: elfController});
		gameEventService = $injector.get('gameEventService');
		
	}));

	it("Change Direction Broadcast", function() {
		gameEventService.changeDirectionBroadcast("bar");
		var actual = elfController.moveMessages;			
		expect(actual).toEqual(['bar']);
	});
});