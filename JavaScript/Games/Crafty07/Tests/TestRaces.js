/**
 * @author Charlie
 */

describe("TestRaces", function() {'use strict';
		
	var races = null;
	
	beforeEach(function() {
		module('raceMod');				
	});
	
	beforeEach(inject(function($injector) {
		races = $injector.get('races');
	}));
	
	it("can get a race", function()  {			
		expect(races).toNotEqual(null);
	});
	
	it("can get a dwarf", function()  {			
		expect(races[0].name).toNotEqual('Dwarf');
	});
	
	it("can find halflings", function() {
    	var singleRace = races[1];
	    expect(singleRace.name).toEqual('Halflings');
	    expect(singleRace.description.length).toEqual(88);
	    expect(singleRace.hitDie).toEqual(6);
	    expect(singleRace.languages[0]).toEqual('Common');
	    expect(singleRace.classes[0]).toEqual('Cleric');
	});
});