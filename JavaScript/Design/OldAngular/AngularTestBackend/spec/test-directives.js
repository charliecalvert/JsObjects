/**
 * Created by charlie on 4/24/16.
 */

describe('Test Directives Suite', function() {
    'use strict';
    var scope;
    var mainController;
    var $compile;
    var $templateCache;

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
            $scope: scope
        });
    }));

    it('should be possible to access the car fixture', function() {
        var spanElement = document.getElementById('cart');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('Cart');
    });

    it('replace angular expression with scope data', function() {
        // Get fixture
        var el = document.getElementById('cart');
        $templateCache.put('car', el);
        var element = $compile('<car></car>')(scope);
        scope.$digest();
        //console.log(element.html());
        expect(element.text()).toContain('Cart Scope Data');
    });

});
