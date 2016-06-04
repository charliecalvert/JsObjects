/**
 * Created by charlie on 6/3/16.
 */


describe('Elvenware Test Fixture Suite', function () {

    'use strict';

    var scope;
    var $templateCache;
    var $compile;

    beforeEach(module('elfApp'));

    /*
     * instantiate the controller without the directive
     * Get the Angular compiler and templateCache for processing Angular templates
     */
    beforeEach(inject(function (_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;

        _$controller_('HomeController', {
            $scope: scope
        });
    }));

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('home-page.html');
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('should be possible to access the fixture', function() {
        var spanElement = document.getElementsByTagName('h1');
        expect(spanElement[0].innerHTML).toBe('Home');
    });
});
