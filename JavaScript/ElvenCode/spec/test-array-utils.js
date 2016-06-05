/**
 * Created by charlie on 3/6/16.
 */

var elfUtils = require('../elf-utils');

describe('Test Array Utils Suite', function() {

    it('expects to see difference between two string arrays. We Subtract arrayTwo from arrayOne', function () {
        var one = ['a', 'b', 'c'];
        var two = ['b', 'c'];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual(['a']);
    });

    it('expects to see difference between two string arrays. We Subtract arrayTwo from arrayOne', function () {
        var one = ['a', 'b', 'c', 'd', 'e', 'f'];
        var two = ['b', 'd'];
        var diff = elfUtils.arrayDifference(one, two);
        expect(diff).toEqual(['a', 'c', 'e', 'f']);
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