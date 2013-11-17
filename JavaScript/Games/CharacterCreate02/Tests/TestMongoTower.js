/**
 * @author Charlie Calvert
 */

describe("Test MongoTower", function() {'use strict';

	var peopleController = null;
	var $httpBackend = null;

	beforeEach(function() {
		module('diceTools');
		module('mongoTower');
		module('characterMod');
	});

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	beforeEach(inject(function($rootScope, $controller) {
		peopleController = $rootScope.$new();
		$controller('peopleController', { $scope: peopleController});
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("can find people controller", function() {
		expect(peopleController).toNotEqual(null);
	});

	it("can find people controller hint", function() {
		expect(peopleController.hint).toEqual('peopleController');
	});

	it("can find hero hitpoints", function() {
		$httpBackend.expectGET('hero.json')
		.respond({ "hitPoints": 35, "damage": 5});
		peopleController.loadDefaults();
		$httpBackend.flush();
		expect(peopleController.hero.hitPoints).toEqual(35);
	});

	it("can find tower hitpoints", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/gameData?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
		.respond([{getHitPoints: function(){ return 5; }, hitPoints: 6}]);
		peopleController.loadMongo();
		$httpBackend.flush();
		expect(peopleController.tower.hitPoints).toEqual(6);
	});

	/* it("can find hitPoints", function() {
		console.log("Can Find hitpoints");

		var data = towerData.query({}, function(tower) {
			console.log("Query called");
			// tower = people.tower();
			expect(tower.getHitPoints()).toEqual(35);
		}, function(err) {
			console.log("Error");
		});
		console.log("Mongo Data: " + data);
		$httpBackend.flush();
	}); */
});
