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
	
	it("Test Two Direction Broadcasts", function() {
		gameEventService.changeDirectionBroadcast("bar");
		gameEventService.changeDirectionBroadcast("foo");
		var actual = elfController.moveMessages;			
		expect(actual).toEqual(['foo', 'bar']);
	});
	
	it("Change Tower Broadcast", function() {
		gameEventService.towerBroadcast("Goober");
		var actual = elfController.eventNote;			
		expect(actual).toEqual('Goober');
	});
	
	it("Tests a Debug Broadcast", function() {
		gameEventService.debugBroadcast("Qux");
		var actual = elfController.debugMessages;			
		expect(actual).toEqual(['Qux']);
	});
	
	it("Two Debug Broadcast", function() {
		gameEventService.debugBroadcast("Qux");
		gameEventService.debugBroadcast("QuxFoo");
		var actual = elfController.debugMessages;			
		expect(actual).toEqual(['QuxFoo', 'Qux']);
	});
	
	it("Tests Encounter Broadcast", function() {
		gameEventService.encounterBroadcast("Encounter");
		var actual = elfController.encounterMessage;			
		expect(actual).toEqual('Encounter');
	});
	
});