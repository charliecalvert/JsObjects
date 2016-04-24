/**
 * Created by charlie on 4/24/16.
 */

describe('Unit testing great quotes', function() {
    'use strict';
    var $compile,
        $rootScope,
        directiveElem,
        directiveCar;

    var $httpBackend = null;

    // Load the myApp module, which contains the directive
    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        //directiveElem = getCompiledElement();
    }));
/*
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        directiveCar = getCompiledElementCar();
    }));

    function getCompiledElement(){
        var element = angular.element('<div first-directive></div>');
        var compiledElement = $compile(element)($rootScope);
        $rootScope.$digest();
        return compiledElement;
    }

    function getCompiledElementCar(){
    //    $httpBackend.whenGET("car").respond('<h1>Car Bar</h1>');
        var element = angular.element('<div car></div>');
        var compiledElement = $compile(element)($rootScope);
        $rootScope.$digest();
        return compiledElement;
    } */

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });

    fit('should have car element', function () {
        //var spanElement = directiveCar.html();
        var spanElement = document.getElementById('car');
        console.log(spanElement.innerHTML);
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toEqual('Car Bar');
    });

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        $httpBackend.expectGET("car").respond({ hello: 'World' });

        var el = angular.element('<car></car>');
        var element = $compile(el)($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        console.log(element.html());
        expect(element.html()).toContain("Car Bar");
    });
});
