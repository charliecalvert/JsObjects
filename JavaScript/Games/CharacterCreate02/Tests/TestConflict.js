/**
 * @author Charlie Calvert
 */

describe("Characters Test", function() {'use strict';

	var peopleManager = null;
    
	beforeEach(function() {
		module('characterMod');
	});
	
    beforeEach(inject(function($injector) {    	
        peopleManager = $injector.get('peopleManager'); 
    }));

    it("can find people factory", function() {
        expect(peopleManager).toNotEqual(null);
    });

	it("can have an encounter", function() {
		var hero = peopleManager.hero;
		var tower = peopleManager.tower;
		
	});
});    

