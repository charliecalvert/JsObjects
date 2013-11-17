/**
 * @author Charlie Calvert
 */

describe("Conflicts Test", function() {'use strict';

	var peopleManager = null;
	var $httpBackend = null;

	beforeEach(function() {
		module('characterMod');
		module('mongoTower');
	});

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));
	
	beforeEach(inject(function($injector) {
		peopleManager = $injector.get('peopleManager');
	}));

	it("can find people factory", function() {
		expect(peopleManager).toNotEqual(null);
	});
	
	it("can find hero hitpoints", function() {
		$httpBackend.expectGET('hero.json')
		.respond({ "hitPoints": 37, "damage": 5});
		peopleManager.loadDefaults();
		$httpBackend.flush();
		expect(peopleManager.hero.hitPoints).toEqual(37);
	});

	it("can find tower hitpoints", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/gameData?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
		.respond([{getHitPoints: function(){ return 5; }, hitPoints: 6}]);
		peopleManager.loadMongo();
		$httpBackend.flush();
		expect(peopleManager.tower.hitPoints).toEqual(6);
	});
	
	it("can have an encounter", function() {
		var hero = peopleManager.hero;
		var tower = peopleManager.tower;
		var saveHitPoints = 0;
		for (var i = 0; i < 10; i++) {
			saveHitPoints = tower.hitPoints;
			peopleManager.encounter();
			expect(tower.hitPoints).toBeLessThan(saveHitPoints);
		}	
	}); 
});

