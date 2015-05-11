/**
 * @author Charlie Calvert
 */

(function () {

    'use strict';

    describe("mycontrollertest", function () {

        var myScope;
        var $httpBackend = null;

        beforeEach(function () {
            module('jsonServerMod');
        });

        beforeEach(inject(function ($rootScope, $controller) {
            myScope = $rootScope.$new();
            $controller('myController', {
	    	    $scope: myScope});
		    }));

        beforeEach(inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Test hint", function () {
            expect(myScope.hint).toEqual("<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>");
        });

        it("Test load json name", function () {
            $httpBackend.expectGET('data.json').respond({
                "name": "NPC01",
                "hitPoints": 1,
                "damage": 2
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.name).toEqual("NPC01");
        });

        it("Test load json hitPoints", function () {
            $httpBackend.expectGET('data.json').respond({
                "name": "NPC01",
                "hitPoints": 37,
                "damage": 5
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.hitPoints).toEqual(37);
        });

        it("Test load json damage", function () {
            $httpBackend.expectGET('data.json').respond({
                "name": "NPC01",
                "hitPoints": 37,
                "damage": 5
            });
            myScope.loadJson();
            $httpBackend.flush();
            expect(myScope.data.damage).toEqual(5);
        });

        it("Test Second load json name", function () {
            $httpBackend.expectGET('moreData.json').respond({
                "name": "NPC02",
                "hitPoints": 1,
                "damage": 2
            });
            myScope.loadJson02('moreData.json');
            $httpBackend.flush();
            expect(myScope.data2.name).toEqual("NPC02");
        });

    });

})();