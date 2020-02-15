/**
 * Created by charlie on 10/7/15.
 */

describe('Test Directive Fixture Suite', function() {
    'use strict';
    var scope;
    var $compile;
    var mainController;
    var $templateCache;

    // Load the myApp module, which contains the directive
    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    beforeEach(inject(function(
        _$compile_,
        _$rootScope_,
        _$templateCache_,
        _$controller_
    ) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        // instantiate the controller stand-alone, without the directive
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('should be possible to access the car fixture', function() {
        var spanElement = document.getElementById('cart');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('Cart');
    });

    it('can access controllerAs variable', function() {
        expect(mainController.mainData).toBe('Main Data');
    });

    it('can access scope variables', function() {
        expect(scope.scopeData).toBe('Scope Data');
    });

    it('tests scope variable access in template loaded through raw text', function() {
        $templateCache.put('car', '<h3 id="car">CarFoo {{scopeData}}</h3>');

        var element = $compile('<car></car>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('CarFoo Scope Data');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        var el = document.getElementById('cart');
        $templateCache.put('car', el);
        var element = $compile('<car></car>')(scope);
        scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Cart Scope Data');
    });

    it('test controllerAs variable accessed in template loaded through fixture', function() {
        // Get element from fixture
        var el = document.getElementById('bart');
        $templateCache.put('car', el);
        var element = $compile('<car></car>')(scope);
        scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Bart Main Data');
    });
});
