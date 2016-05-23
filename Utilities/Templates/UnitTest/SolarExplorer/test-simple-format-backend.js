/**
 * Created by charlie on 5/10/16.
 */

describe('Simple Format HttpBack Suite', function() {

    'use strict';

    var scope;
    var $httpBackend;
    var mainController;
    var $templateCache;
    var $compile;

    beforeEach(module('elfApp'));

    /*
     * instantiate the controller without the directive
     * Get the Angular compiler and templateCache for processing Angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        $httpBackend = _$httpBackend_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        scope.index = 5;
        var requestHandler = $httpBackend
            .when('GET', 'data/Renewable.json')
            .respond(renewables);

        $httpBackend.expectGET('data/Renewable.json');
        scope.getRenewable();
        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('simple-format.html');
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('tests simple-format directive loaded through fixture with httpBackend', function() {

        var el = document.getElementById('simpleFormat');

        $templateCache.put('simple-format', el);
        var element = $compile('<elf-simple-format></elf-simple-format>')(scope);
        scope.$digest();

        //console.log(JSON.stringify(scope.simpleFormat, null, 4));
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('804');
        expect(element.text()).toContain('2.2');
    });

    it('tests that we can index through simple-format directive', function() {

        var el = document.getElementById('simpleFormat');
        //console.log(el);
        $templateCache.put('simple-format', el);
        var element = $compile('<elf-simple-format></elf-simple-format>')(scope);
        scope.$digest();
        scope.index = 5;
        scope.$digest();
        expect(element.text()).toContain('227');
        expect(element.text()).toContain('1.339');
        //console.log(element);
    });

});
