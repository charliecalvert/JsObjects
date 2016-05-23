/**
 * Created by charlie on 5/18/16.
 */

describe('Renewable By Year Suite', function () {

    'use strict';

    var scope;
    var $httpBackend;
    var $templateCache;
    var $compile;

    beforeEach(module('elfApp'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$templateCache_, _$httpBackend_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        $httpBackend = _$httpBackend_;
        _$controller_('RenewableByYearController', {
            $scope: scope
        });
    }));

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('renewable-by-year.html');
    });

    beforeEach(function () {
        var requestHandler = $httpBackend
            .when('GET', 'data/Renewable.json')
            .respond(renewables);

        $httpBackend.expectGET('data/Renewable.json');
        scope.getRenewableByYear();
        $httpBackend.flush();
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('proves renewables.getByYear returns index & expected object with string year', function() {
        var renewableByYear = {
            "Year": "2015",
            "Solar (quadrillion Btu)": "0.532293912",
            "Geothermal (quadrillion Btu)": "0.22367033",
            "Other biomass (quadrillion Btu)": "0.513842275",
            "Wind power (quadrillion Btu)": "1.8151574968",
            "Liquid biofuels (quadrillion Btu)": "1.2204771324",
            "Wood biomass (quadrillion Btu)": "2.059217456",
            "Hydropower (quadrillion Btu)": "2.388612049"
        };

        var result = scope.renewableUtils.getByYear('2015');
        expect(result).toEqual({ index:2, renewable: renewableByYear });
    });

    it('proves renewables.getByYear returns index & expected object with numeric year', function() {
        var renewableByYear = {
            "Year": "2012",
            "Solar (quadrillion Btu)": "0.227349746",
            "Geothermal (quadrillion Btu)": "0.211592042",
            "Other biomass (quadrillion Btu)": "0.466604262",
            "Wind power (quadrillion Btu)": "1.3393646844",
            "Liquid biofuels (quadrillion Btu)": "1.0906491156",
            "Wood biomass (quadrillion Btu)": "2.010265721",
            "Hydropower (quadrillion Btu)": "2.628701965"
        };

        var result = scope.renewableUtils.getByYear(2012);
        expect(result).toEqual({ index:5, renewable: renewableByYear });

    });

    it('tests that we can get a renewable object by Year from our controller', function () {
        var renewableByYear = scope.getByYear('2015');
        //console.log(renewableByYear);
        expect(JSON.stringify(renewableByYear)).toContain('0.532293912');
    });

    it('tests that we can get a renewable object by Year in our elfRenewableByYear directive', function () {
        var simpleFormatHtml = document.getElementById('renewableByYear');
        $templateCache.put('renewable-by-year', simpleFormatHtml);
        var element = $compile('<elf-renewable-by-year></elf-renewable-by-year>')(scope);
        scope.$digest();
        var renewableByYear = scope.getByYear('2015');
        //console.log(renewableByYear);
        scope.$digest();
        //console.log(element.text());
        expect(element.text()).toContain('1.8151574968');
    });

});
