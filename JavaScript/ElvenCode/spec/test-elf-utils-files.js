/**
 * Created by charlie on 10/7/15.
 */

var elfUtils = require('../index').elfUtils;

describe('Elvenware Elf Utils Files Suite', function() {
    'use strict';

    it('expects ensure path sep when path does not end with path sep', function() {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar');
        expect(result).toBe('/foo/bar/');
    });

    it('expects ensure path sep when path does end with path sep', function() {
        var result = elfUtils.ensureEndsWithPathSep('/foo/bar/');
        expect(result).toBe('/foo/bar/');
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

    it('expects to write file to $HOME/temp/temp01', function(done) {
        var home = elfUtils.getHomeDir();
        home = elfUtils.ensureEndsWithPathSep(home);
        home = elfUtils.ensureEndsWithPathSep(home + 'temp');
        expect(elfUtils.directoryExists(home)).toBe(true);
        var fileName = home + 'temp01';
        elfUtils.writeFile(fileName, 'bar-bar\nfoo-foo\n', function(result) {
            var foundFile = elfUtils.fileExists(fileName);
            expect(foundFile).toBe(true);
            done();
        });
    });

    it('expects to write file using promise', function(done) {
        var home = elfUtils.getHomeDir();
        home = elfUtils.ensureEndsWithPathSep(home);
        home = elfUtils.ensureEndsWithPathSep(home + 'temp');
        expect(elfUtils.directoryExists(home)).toBe(true);
        var fileName = home + 'temp01';
        elfUtils.writeFile(fileName, 'bar-bar\nfoo-foo\n').then(function(result) {
            //console.log(result);
            var foundFile = elfUtils.fileExists(fileName);
            expect(foundFile).toBe(true);
            done();
        });
    });

    it('Ensure we can stripExtension from a string', function() {
        const testString = '/home/charlie/ElvenCode/spec.md';
        const expected = '/home/charlie/ElvenCode/spec';
        const result = elfUtils.stripExtension(testString);
        expect(result).toBe(expected);
    })
});
