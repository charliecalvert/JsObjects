/**
 * Created by charlie on 11/10/15.
 */

describe('Test ElfMidterm Suite', function() {
    'use strict';

    var midtermKeys;

    beforeEach(function() {
        midtermKeys = Object.keys(elfMidterm);
    });

    it('Expects there to be at least 1 properties or methods in elfMidterm', function() {
        //console.log(midtermKeys);
        expect(midtermKeys.length).toBeGreaterThan(0);
    });

    it('Expects elfMidterm to contain initialize', function() {
        expect(midtermKeys.indexOf('initialize')).toBeGreaterThan(-1);
    });

});
