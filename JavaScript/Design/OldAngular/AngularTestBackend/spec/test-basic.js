/**
 * Created by charlie on 10/7/15.
 */

describe('Test Basic Suite', function() {

    'use strict';

    var $compile;
    var scope;
    var mainController;
    var $templateCache;

    beforeEach(module('elfApp'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('car.html');
    });

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        $compile = _$compile_;
        scope = _$rootScope_.$new();
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });

    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('can access controllerAs variable', function() {
        expect(mainController.mainData).toBe('Main Data');
    });

    it('can not access scope variables', function() {
        expect(scope.scopeData).toBe('Scope Data');
    });

    it('tests scope variable access in template loaded through raw text', function() {
        // Get element from fixture
        var useRawText = false;
        var el = document.getElementById('cart');

        $templateCache.put('car', '<h3 id="car">CarFoo {{scopeData}}</h3>');

        var element = $compile('<car></car>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('CarFoo Scope Data');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        var useRawText = false;
        var el = document.getElementById('cart');

        if (useRawText) {
            $templateCache.put('car', '<h3 id="car">CarFoo {{scopeData}}</h3>');
        } else {
            $templateCache.put('car', el);
        }

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
