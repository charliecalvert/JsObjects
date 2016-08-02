/**
 * Created by charlie on 10/7/15.
 */

var elfUtils = require('../index').elfUtils;

describe('Elvenware Elf Utils Suite', function () {
    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('finds difference of two short string arrays. subtract them', function () {
        var one = ['a', 'b', 'c'];
        var two = ['b', 'c'];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual(['a']);
    });

    it('finds difference of two string arrays: subtract array1 from array2', function () {
        var one = ['a', 'b', 'c', 'd', 'e', 'f'];
        var two = ['b', 'd'];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual(['a', 'c', 'e', 'f']);
    });

    it('expects array to contain delta', function() {
        var nato = ['able', 'bravo', 'charlie', 'delta', 'echo'];
        expect(elfUtils.arrayContains(nato, 'delta')).toBe(true);
    });

    it('expects to see difference between two numeric arrays', function () {
        var one = [1, 2, 3];
        var two = [2, 3];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual([1]);
    });

    it('expects to see difference between two numeric arrays', function () {
        var one = [1, 2, 3, 4, 5, 6];
        var two = [2, 3];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual([1, 4, 5, 6]);
    });
});
