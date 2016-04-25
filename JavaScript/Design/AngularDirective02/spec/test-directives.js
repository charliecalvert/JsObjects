/**
 * Created by charlie on 4/24/16.
 */

describe('Unit testing great quotes', function() {
    'use strict';
    var scope,
        mainController,
        $compile,
//        $rootScope,
        $templateCache;


    // Load the myApp module, which contains the directive
    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    /* beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_;
        //directiveElem = getCompiledElement();
    })); */

    beforeEach(inject(function(_$compile_, _$templateCache_, $controller, $rootScope) {
        scope = $rootScope;
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        // instantiate the controller stand-alone, without the directive
        mainController = $controller('MainController', {$scope: scope, $element: null});
    }));

    it('should have car element', function () {
        //var spanElement = directiveCar.html();
        var spanElement = document.getElementById('cart');
        console.log(spanElement.innerHTML);
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('Car');
    });

    fit('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        // $templateCache.put(templateUrl, jasmine.getFixtures().getFixtureHtml_(templateUrl));
        var el = document.getElementById('cart');
        var foo = el;
        console.log(mainController.mainData);
        console.log('foo', foo);
        // $templateCache.put('car', '<h3 id="car">CarFoo {{mainController.mainData}}</h3>');

        $templateCache.put('car', el);

        console.log('el.innerHTML', el.innerHTML);
        var element = $compile('<car></car>')(scope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        scope.$digest();
        // Check that the compiled element contains the templated content
        console.log(element.html());
        expect(element.text()).toContain("CarFoo Scope Data");
    });

});
