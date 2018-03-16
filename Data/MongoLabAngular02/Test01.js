/**
 * @author Charlie
 */

describe("mycontrollertest", function() {'use strict';
    var myController = null;    
    var $httpBackend = null;
    
    beforeEach(function() {
        module("elvenApp");
    });
    
    beforeEach(inject(function($rootScope, $controller) {        
        myController = $rootScope.$new();
        $controller('MyController', { $scope: myController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Test hint", function() {
        expect(myController.hint).toEqual("<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>");
    });    
    
    it("can find tower hitpoints", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Foo?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        .respond([
            {presidentName: "George Washington", termEnd: 1, termStart: 11},
            {presidentName: "John Adams", termEnd: 2, termStart: 22},
            {presidentName: "Thomas Jefferson", termEnd: 3, termStart: 33}
          ]);
        myController.loadPresidents();
        $httpBackend.flush();
        expect(myController.presidents[0].presidentName).toEqual('George Washington');
    });
});

