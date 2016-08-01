/**
 * Created by charlie on 10/7/15.
 */

var elfUtils = require('../index').elfUtils;

describe('Elvenware Elf Utils Suite', function () {
    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('expects ensure path sep when path does not end with path sep', function () {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar');
        expect(result).toBe('/foo/bar/');
    });

    it('expects ensure path sep when path does end with path sep', function () {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar/');
        expect(result).toBe('/foo/bar/');
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

    it('expects bashrc to exist', function() {
        var bash = elfUtils.ensureEndsWithPathSep(process.env.HOME) + '.bashrc';
        var result = elfUtils.fileExists(bash);
        expect(result).toBe(true);
    });

    it('expects bashrc-foo not to exist', function() {
        var bash = elfUtils.ensureEndsWithPathSep(process.env.HOME) + '.bashrc-foo';
        var result = elfUtils.fileExists(bash);
        expect(result).toBe(false);
    });

    it('expects platform neutral HOME directory to exist', function() {
        var home = elfUtils.getHomeDir();
        expect(elfUtils.directoryExists(home)).toBe(true);
    });

    it('expects directory not to exist', function() {
        var home = elfUtils.getHomeDir();
        expect(elfUtils.directoryExists(home + 'wahblah23423#$$$234')).toBe(false);
    });
});
