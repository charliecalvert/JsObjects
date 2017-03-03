/**
 * Created by charlie on 7/18/16.
 */

var elfUtils = require('../index').elfUtils;
var walker = require('../walker');
var path = require('path');

function getRoot() {
    'use strict';
    return elfUtils.removeFromEndAtCharacter(__dirname, path.sep);
}

describe('Elvenware Walker Suite', function() {

    'use strict';

    beforeEach(function() {
        walker.options.filters = ['node_modules', '.idea'];
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('expects to walk to find at least three files', function(done) {
        var root = getRoot();
        walker.walkDirs(root, '.js', function(report) {
            report = walker.getFileNames(report);
            expect(report.length).toBeGreaterThan(3);
            done();
        });
    });

    it('expects to walk to find at least three files with array of extensions', function(done) {
        var root = getRoot();
        walker.walkDirs(root, ['.js', '.JS'], function(report) {
            report = walker.getFileNames(report);
            //console.log(report);
            expect(report.length).toBeGreaterThan(3);
            done();
        });
    });

    it('expects to walk and find Gruntfile', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getFileNames(report);
            expect(report).toContain('Gruntfile.js');
            done();
        });
    });

    it('expects to walk and find Gruntfile full path', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getFullFileNames(report);
            var rootPath = getRoot();
            var gruntPath = elfUtils.ensureEndsWithPathSep(rootPath) + 'Gruntfile.js';
            expect(report[0]).toContain(gruntPath);
            done();
        });
    });

    it('expects to walk and find Gruntfile', function(done) {
        walker.walkDirs(getRoot(), '.js', function(report) {
            report = walker.getBasics(report);
            expect(report[0].fileName).toBe('Gruntfile.js');
            done();
        });
    });

});
