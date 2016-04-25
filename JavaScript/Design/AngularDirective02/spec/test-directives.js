/**
 * Created by charlie on 4/24/16.
 */

describe('Unit testing great quotes', function() {
    'use strict';
    var scope,
        mainController,
        $compile,
        $templateCache;


    // Load the myApp module, which contains the directive
    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    beforeEach(inject(function(_$compile_, _$templateCache_, $controller, $rootScope) {
        scope = $rootScope;
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        // instantiate the controller stand-alone, without the directive
        mainController = $controller('MainController', {
            $scope: scope,
            $element: null
        });
    }));

    fit('should have car element', function() {
        //var spanElement = directiveCar.html();
        var spanElement = document.getElementById('cart');
        //console.log(spanElement.innerHTML);
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('Car');
    });

    fit('Replaces the element with the appropriate content', function() {
        // Get fixture
        var el = document.getElementById('cart');
        $templateCache.put('car', el);
        var element = $compile('<car></car>')(scope);
        scope.$digest();        
        //console.log(element.html());
        expect(element.text()).toContain("CarFoo Scope Data");
    });

});
