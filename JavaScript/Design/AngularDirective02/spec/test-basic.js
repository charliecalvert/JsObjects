/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function() {

    'use strict';



    var $compile,
        $rootScope,
        mainController,
        directiveElem,
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
        directiveElem = getCompiledElement();
    }));

    function getCompiledElement() {
        var element = angular.element('<div first-directive></div>');
        var compiledElement = $compile(element)($rootScope);
        $rootScope.$digest();
        return compiledElement;
    }

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('should have span element', function() {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });

    it('test basic example', function() {
        // Compile a piece of HTML containing the directive
        // $templateCache.put(templateUrl, jasmine.getFixtures().getFixtureHtml_(templateUrl));
        var el = document.getElementById('cart');

        //$templateCache.put('car', '<h3 id="car">CarFoo {{scopeData}}</h3>');

        $templateCache.put('car', el);

        //console.log('el.innerHTML', el.innerHTML);
        var element = $compile('<car></car>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        //console.log(element.html());
        expect(element.text()).toContain("CarFoo Scope Data");
    });

});
