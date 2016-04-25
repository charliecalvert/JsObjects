/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    //var $httpBackend = null;

    var $compile,
        $rootScope,
        mainController,
        $templateCache;


    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: $rootScope,
            $element: null
        });
        //directiveElem = getCompiledElement();
    }));


    /*
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        directiveCar = getCompiledElementCar();
    }));

    function getCompiledElement() {
        var element = angular.element('<div first-directive></div>');
        var compiledElement = $compile(element)($rootScope);
        $rootScope.$digest();
        return compiledElement;
    }


    function getCompiledElementCar() {

        $httpBackend.whenGET("car").respond('<h1>Car {{mainController.mainData}}</h1>');
        var template = $templateCache.get('car');
        console.log('template', template);
        $templateCache.put('car',template);

        var element = angular.element('<car></car>');
        console.log('element', element);
        var compiledElement = $compile(element)($rootScope);
        console.log('compiledElement1', compiledElement);
        $rootScope.$digest();
        console.log('compiledElement2', compiledElement);
        return compiledElement;
    } */

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });


    it('should have span element', function() {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        //$httpBackend.expectGET("car").respond({ hello: 'World' });

        //var el = angular.element('<car></car>');
        //var element = $compile(el)($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        //$rootScope.$digest();
        // Check that the compiled element contains the templated content
        console.log('directiveCar', directiveCar);
        var car = directiveCar.find('h1');
        expect(car.text()).toContain("Car Bar");
    });

    it('test basic example', function() {
        // Compile a piece of HTML containing the directive
        // $templateCache.put(templateUrl, jasmine.getFixtures().getFixtureHtml_(templateUrl));
        var el = document.getElementById('cart');
        var foo = el;

        console.log('foo', foo);
        // $templateCache.put('car', '<h3 id="car">CarFoo {{mainController.mainData}}</h3>');

        $templateCache.put('car', el);

        console.log('el.innerHTML', el.innerHTML);
        var element = $compile('<car></car>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        console.log(element.html());
        expect(element.text()).toContain("CarFoo Scope Data");
    });

});
