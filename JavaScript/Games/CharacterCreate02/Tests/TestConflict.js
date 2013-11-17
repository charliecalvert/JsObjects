/**
 * @author Charlie Calvert
 */

describe("Conflicts Test", function() {'use strict';

	var peopleManager = null;

	beforeEach(function() {
		module('characterMod');
		module('mongoTower');
	});

	beforeEach(inject(function($injector) {
		peopleManager = $injector.get('peopleManager');
	}));

	it("can find people factory", function() {
		expect(peopleManager).toNotEqual(null);
	});

	/* it("can have an encounter", function() {
		var hero = peopleManager.hero;
		var tower = peopleManager.tower;
		expect(tower.hitPoints).toEqual(8);
	}); */
});

