/**
 * @author Charlie Calvert
 */

// specs code
describe("TestElfController", function() {'use strict';
	var elfController = null;	
	
	beforeEach(function() {
		module('elfPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		elfController = $rootScope.$new();		
		$controller('ElfController', { $scope: elfController});		
		
	}));

	it("Check Name", function() {
		var actual = elfController.name;		
		expect(actual).toEqual('ElfPlayer');
	});	
	
	it("Check Event Note", function() {
		var actual = elfController.eventNote;		
		expect(actual).toEqual('no messages');
	});
	
	it("Check Debug Messages", function() {
		var actual = elfController.debugMessages;		
		expect(actual).toEqual([]);
	});
	
	it("Check move Messages", function() {
		var actual = elfController.moveMessages;		
		expect(actual).toEqual([]);
	});	
});

