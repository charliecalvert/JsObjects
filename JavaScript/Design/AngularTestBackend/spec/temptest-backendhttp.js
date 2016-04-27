/**
 * Created by charlie on 10/7/15.
 */

describe('Http back End Simple Plain Suite', function() {

    'use strict';

    var $httpBackend = null;

    var $compile,
        $rootScope,
        mainController,
        directiveElem,
        directiveCar,
        $templateCache;


    beforeEach(module('elfApp'));


    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: $rootScope,
            $element: null
        });
    }));


    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        directiveCar = getCompiledElementCar();
    }));



    function getCompiledElementCar() {

        $httpBackend.whenGET("car").respond('<h1>Cars {{scopeData}}</h1>');
        var template = $templateCache.get('car');
        console.log('template', template);
        $templateCache.put('car', template);

        var element = angular.element('<car></car>');
        console.log('element', element);
        var compiledElement = $compile(element)($rootScope);
        console.log('compiledElement1', compiledElement);
        $rootScope.$digest();
        console.log('compiledElement2', compiledElement);
        return compiledElement;
    }

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });


    it('Tries HTTP BackEnd', function() {
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

});
