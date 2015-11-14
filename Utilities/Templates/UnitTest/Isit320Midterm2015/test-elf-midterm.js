/**
 * Created by charlie on 11/10/15.
 */

describe('Test ElfMidterm Suite', function() {
    'use strict';

    var midtermKeys;

    beforeEach(function() {
        midtermKeys = Object.keys(elfMidterm);
    });

    it('Expects there to be at least 10 properties or methods in elfMidterm', function() {
        console.log(midtermKeys);
        expect(midtermKeys.length).toBeGreaterThan(10);
    });

    it('Expects elfMidterm to contain initialize', function() {
        expect(midtermKeys.indexOf('initialize')).toBeGreaterThan(-1);
    });

    it('Expects elfMidterm to contain getLinks', function() {
        expect(midtermKeys.indexOf('getLinks')).toBeGreaterThan(-1);
    });

    it('Expects elfMidterm.getLinks to be defined', function() {
        expect(elfMidterm.getLinks).toBeDefined();
    });

    it('Expects elfMidterm.getBitlyLinks not to be defined', function() {
        expect(elfMidterm.getBitlyLinks).not.toBeDefined();
    });

    it('Check that initialize calls getLinks, not getBitlyLinks', function() {
        spyOn(elfMidterm, 'getLinks');
        elfMidterm.initialize();
        expect(elfMidterm.getLinks).toHaveBeenCalled();
    });

});
