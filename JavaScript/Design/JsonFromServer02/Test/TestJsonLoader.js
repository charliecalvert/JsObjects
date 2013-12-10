/**
 * @author Charlie Calvert
 */

describe("mycontrollertest", function() {'use strict';
	var myController = null;
	var $httpBackend = null;

	beforeEach(function() {
		module('jsonServerMod');	
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		myController = $rootScope.$new();
		$controller('myController', { $scope: myController });
	}));

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("Test hint", function() {
		expect(myController.hint).toEqual("<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>");
	});

	it("Test load json name", function() {
		$httpBackend.expectGET('data.json').respond({
			"name": "NPC01",
			"hitPoints": 1,
			"damage": 2
		});
		myController.loadJson();
		$httpBackend.flush();
		expect(myController.data.name).toEqual("NPC01");
	});

	it("Test load json hitPoints", function() {
		$httpBackend.expectGET('data.json').respond({
			"name": "NPC01",
			"hitPoints": 37,
			"damage": 5});
		myController.loadJson();
		$httpBackend.flush();
		expect(myController.data.hitPoints).toEqual(37);
	});

	it("Test load json damage", function() {
		$httpBackend.expectGET('data.json').respond({
			"name": "NPC01",
			"hitPoints": 37,
			"damage": 5});
		myController.loadJson();
		$httpBackend.flush();
		expect(myController.data.damage).toEqual(5);
	});
	
	it("Test Second load json name", function() {
		$httpBackend.expectGET('moreData.json').respond({
			"name": "NPC02",
			"hitPoints": 1,
			"damage": 2
		});
		myController.loadJson02('moreData.json');
		$httpBackend.flush();
		expect(myController.data2.name).toEqual("NPC02");
	});

});
