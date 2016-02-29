/**
 * Created by charlie on 10/7/15.
 */

var elfUtils = require('../index').elfUtils;
var walker = require('../index').walker;
var path = require('path');

function getRoot() {
    return elfUtils.removeFromEndAtCharacter(__dirname, path.sep);
}

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    beforeEach(function() {
        walker.options.filters = ['node_modules', '.idea'];
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('expects ensure path sep', function() {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar');
        expect(result).toBe('/foo/bar/')
    });

    it('removes from end of a string at character', function() {
        var testString = '/home/charlie/ElvenCode/spec';
        var result = elfUtils.removeFromEndAtCharacter(testString, path.sep);
        expect(result).toBe('/home/charlie/ElvenCode');
    });

    it('expects to walk to find at least three files', function(done) {
        var root = getRoot();
        walker.walkDirs(root, '.js', function(report) {
            report = walker.getFileNames(report);
            expect(report.length).toBeGreaterThan(3);
            done();
        })
    });

    it('expects to walk and find Gruntfile', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getFileNames(report);
            expect(report).toContain('Gruntfile.js');
            done();
        })
    });

    it('expects to walk and find Gruntfile full path', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getFullFileNames(report);
            var home = elfUtils.ensureEndsWithPathSep(process.env.HOME);
            expect(report[0]).toContain(home + 'Git/JsObjects/JavaScript/ElvenCode/Gruntfile.js');
            done();
        })
    });

    it('expects to walk and find Gruntfile', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getBasics(report);
            expect(report[0].fileName).toBe('Gruntfile.js');
            done();
        })
    });

});
