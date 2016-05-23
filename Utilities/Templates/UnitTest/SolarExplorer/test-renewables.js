/**
 * Created by charlie on 5/10/16.
 */

describe('Renewables Suite', function() {
    'use strict';

    var $httpBackend;
    var scope;
    var mainController;

    // Set up the module
    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$controller_) {
        scope = _$rootScope_.$new();
        var $compile = _$compile_;
        $httpBackend = _$httpBackend_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        //scope.renewableUtils.init(renewables);
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

    it('proves we can run tests', function() {
        expect(true).toBe(true);
    });

    it('proves we can get renewableUtils name', function() {
        expect(scope.renewableUtils.name).toBe('renewableUtils');
    });

    it('proves we can get renewableUtils method called getItemCount', function() {
        expect(scope.renewableUtils.getItemCount()).toBe(12);
    });

    it('proves we can get from renewableUtils a particular renewable object by index', function() {
        var renewable = scope.renewableUtils.getByIndex(0);
        expect(renewable.Year).toBe('2017');
    });

    it('proves we can transform our json into a new array consisting only of years', function() {
        var years = scope.renewableUtils.getYears();
    //    console.log(years);
        expect(years.length).toBe(12);
    });

    it('proves we can get our wood map', function() {
        var woods = scope.renewableUtils.getWood();
    //    console.log(woods);
        expect(woods.length).toBe(12);
        expect(woods[11]).toEqual({ wood: '2.099319235' });
    });

    it('proves our array of years contains the expected data', function() {
        var years = scope.renewableUtils.getYears();
        expect(years[0]).toBe('2017');
        expect(years[1]).toBe('2016');
        expect(years[5]).toBe('2012');
    });

    it('proves we can transform our json into an array with three properties: geo, solar, and wind', function() {
        var simpleFormat = scope.renewableUtils.getSimpleFormat();
        //console.log(JSON.stringify(simpleFormat, null, 4));
        var keys = Object.keys(simpleFormat[0]);
        keys.sort();
        expect(keys).toEqual(['geo', 'solar', 'wind']);
    });

    it('proves that getSimpleStringFormat returns the expected string data', function() {
        var simpleFormat = scope.renewableUtils.getSimpleStringFormat();
        expect(simpleFormat[0].geo).toBe('0.2349284');
        expect(simpleFormat[0].wind).toBe('2.202328');
        expect(simpleFormat[0].solar).toBe('0.8045307');
        expect(simpleFormat[5].geo).toBe('0.211592042');
        expect(simpleFormat[5].wind).toBe('1.3393646844');
        expect(simpleFormat[5].solar).toBe('0.227349746');
    });

    it('proves that getSimpleFormat returns the expected numeric data', function() {
        var simpleFormat = scope.renewableUtils.getSimpleFormat();
        expect(simpleFormat[0].geo).toBe(0.2349284);
        expect(simpleFormat[0].wind).toBe(2.202328);
        expect(simpleFormat[0].solar).toBe(0.8045307);
        expect(simpleFormat[5].geo).toBe(0.211592042);
        expect(simpleFormat[5].wind).toBe(1.3393646844);
        expect(simpleFormat[5].solar).toBe(0.227349746);
    });
});
