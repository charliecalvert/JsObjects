describe('Simple Format Fixture Suite', function() {

    'use strict';

    var scope;
    var element;
    var mainController;
    var $templateCache;
    var $compile;

    beforeEach(module('elfApp'));

    /*
     * instantiate the controller without the directive
     * Get the Angular compiler and templateCache for processing Angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;

        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('simple-format.html');
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('should find the index', function() {
        expect(scope.index).toBe(0);
    });

    it('should be possible to access the fixture', function() {
        var simpleFormatHtml = document.getElementById('simpleFormat');
        console.log(simpleFormatHtml);
        expect(simpleFormatHtml.innerHTML).toContain('Solar:');
        expect(simpleFormatHtml.innerHTML).toContain('Geo:');
        expect(simpleFormatHtml.innerHTML).toContain('Wind:');
    });

    it('should be possible to access the fixture and put real data in it.', function() {
        scope.simpleFormat = [{
            geo: 1,
            solar: 2,
            wind: 3
        }];

        var simpleFormatHtml = document.getElementById('simpleFormat');
        $templateCache.put('simple-format', simpleFormatHtml);
        var element = $compile('<elf-simple-format></elf-simple-format>')(scope);
        scope.$digest();

        console.log(simpleFormatHtml);
        expect(simpleFormatHtml.innerHTML).toContain('Solar: 2');
        expect(simpleFormatHtml.innerHTML).toContain('Geo: 1');
        expect(simpleFormatHtml.innerHTML).toContain('Wind: 3');
    });

});