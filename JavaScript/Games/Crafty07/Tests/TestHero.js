/**
 * @author Charlie
 */

describe("Test hero", function() {'use strict';
		
	var hero = null;
	
	beforeEach(function() {
		module('heroMod');				
	});
	
	beforeEach(inject(function($injector) {
		hero = $injector.get('hero');
	}));
	
	it("can get a race", function()  {			
		expect(hero).toNotEqual(null);
	});
	
	it("can get a dwarf", function()  {			
		expect(hero.name).toEqual('Sam');
	});
	
});