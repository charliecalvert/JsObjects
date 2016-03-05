/**
 * Created by charlie on 10/7/15.
 */

var elfUtils = require('../index').elfUtils;
var walker = require('../index').walker;
var path = require('path');

function getRoot() {
    'use strict';
    return elfUtils.removeFromEndAtCharacter(__dirname, path.sep);
}

describe('Elvenware Simple Plain Suite', function () {
    'use strict';

    beforeEach(function () {
        walker.options.filters = ['node_modules', '.idea'];
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('expects to get last character of string', function () {
        var result = elfUtils.getLastCharacterOfString('12345');
        expect(result).toBe('5');
    });

    it('expects ensure path sep when path does not end with path sep', function () {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar');
        expect(result).toBe('/foo/bar/');
    });

    it('expects ensure path sep when path does end with path sep', function () {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar/');
        expect(result).toBe('/foo/bar/');
    });


    it('removes from end of a string at character', function () {
        var testString = '/home/charlie/ElvenCode/spec';
        var result = elfUtils.removeFromEndAtCharacter(testString, path.sep);
        expect(result).toBe('/home/charlie/ElvenCode');
    });

    it('expects to walk to find at least three files', function (done) {
        var root = getRoot();
        walker.walkDirs(root, '.js', function (report) {
            report = walker.getFileNames(report);
            expect(report.length).toBeGreaterThan(3);
            done();
        });
    });

    it('expects to walk and find Gruntfile', function (done) {
        walker.walkDirs(getRoot(), '.js', function (report) {
            report = walker.getFileNames(report);
            expect(report).toContain('Gruntfile.js');
            done();
        });
    });

    it('expects to walk and find Gruntfile full path', function (done) {
        walker.walkDirs(getRoot(), '.js', function (report) {
            report = walker.getFullFileNames(report);
            var home = elfUtils.ensureEndsWithPathSep(process.env.HOME);
            expect(report[0]).toContain(home + 'Git/JsObjects/JavaScript/ElvenCode/Gruntfile.js');
            done();
        });
    });

    it('expects to walk and find Gruntfile', function (done) {
        walker.walkDirs(getRoot(), '.js', function (report) {
            report = walker.getBasics(report);
            expect(report[0].fileName).toBe('Gruntfile.js');
            done();
        });
    });

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
