/**
 * Created by charlie on 6/3/16.
 */

describe('Elvenware Home Directive Suite', function() {
    'use strict';

    var scope;
    var $templateCache;
    var $compile;

    beforeEach(module('elfApp'));

    /*
     * instantiate the controller without the directive
     * Get the Angular compiler and templateCache for processing Angular templates
     */
    beforeEach(inject(function(
        _$compile_,
        _$rootScope_,
        _$templateCache_,
        _$controller_
    ) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;

        _$controller_('HomeController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('home-description.html');
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('should be possible to access the fixture', function() {
        var spanElement = document.getElementById('homeDescription');
        //console.log(spanElement);
        expect(spanElement.innerHTML).toContain('{{desc');
    });

    it('should be able to see the directive content', function() {
        var el = document.getElementById('homeDescription');
        //console.log(el);
        $templateCache.put('home-description', el);
        var element = $compile('<elf-home-description></elf-home-description>')(
            scope
        );
        scope.$digest();
        //console.log(element);
        expect(element.text()).toContain('HomeController Data');
    });
});
