/**
 * @author Charlie Calvert
 */

// specs code
describe("TestElfController", function() {'use strict';
	var elfController = null;	
	
	beforeEach(function() {
		module('elfPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		elfController = $rootScope.$new();		
		$controller('ElfController', { $scope: elfController, gameEventService: null});
	}));

	it("Check Name", function() {
		var actual = elfController.name;		
		expect(actual).toEqual('ElfPlayer');
	});	
});

