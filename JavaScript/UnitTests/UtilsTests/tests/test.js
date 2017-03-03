/**
 * @author Charlie Calvert
 */

var assert = require("assert");
var eu = require("../ElfUtils");
var path = require("path");
var os = require("os");
var Guid = require("guid");

describe("File Tests", function() {
    'use strict';
    var elfPathSep = path.sep;

    it("Is 3 equal to 3", function() {
        var actual = 3;
        var expected = 3;
        assert.equal(expected, actual);
    });

    it("EstablishPathSep", function() {
        var actual = path.sep;
        // On Windows:
        var expected = '/';
        if (os.platform() === 'linux') {
            expected = '/';
        } else if (os.platform() === 'win32') {
            expected = '\\';
        }
        // On Linux: var expected = '/';
        assert.equal(expected, actual);
    });

    it('TestEnsureStartsWithPathSep01', function() {
        var value = 'sam';
        var expected = path.sep + 'sam';
        var actual = eu.ensureStartsWithPathSep(value);
        assert.equal(expected, actual);
    });

    it('TestEnsureStartsWithPathSep03', function() {
        var value = 'sam.js';
        var actual = eu.ensureStartsWithPathSep(value);
        var expected = path.sep + 'sam.js';
        assert.equal(expected, actual);
    });

    it('TestEnsureStartsWithPathSep04', function() {
        var value = path.sep + 'sam.js';
        var expected = path.sep + 'sam.js';
        var actual = eu.ensureStartsWithPathSep(value);
        assert.equal(expected, actual);
    });

    it('TestEnsureEndsWithPathSep01', function() {
        var value = 'sam';
        var expected = 'sam' + elfPathSep;
        var actual = eu.ensureEndsWithPathSep(value);
        assert.equal(expected, actual);
    });

    it('TestEnsureEndsWithPathSep02', function() {
        var value = __dirname;
        var expected = __dirname + elfPathSep;
        var actual = eu.ensureEndsWithPathSep(value);
        assert.equal(expected, actual);
    });


    it('TestElfJoin01', function() {
        var pathName = __dirname;
        var fileName = 'Sam.txt';
        var expected = __dirname + elfPathSep + fileName;
        var actual = eu.elfJoin(pathName, fileName);
        assert.equal(expected, actual);
    });

    it('TestElfJoin02', function() {
        var pathName = __dirname + elfPathSep;
        var fileName = 'Sam.txt';
        var expected = __dirname + elfPathSep + fileName;
        var actual = eu.elfJoin(pathName, fileName);
        assert.equal(expected, actual);
    });

    it('TestElfJoin03', function() {
        var pathName = __dirname + elfPathSep;
        var fileName = elfPathSep + 'Sam.txt';
        var expected = __dirname + fileName;
        var actual = eu.elfJoin(pathName, fileName);
        assert.equal(expected, actual);
    });

    it ("shows we can get an extension", function () {
        var actual = eu.getExtension("/tom/sam/adam.md");
        expect(actual).toBe('md');
    });

    it ("shows we can get an extension with no extension", function () {
        var actual = eu.getExtension("/tom/sam/adam");
        expect(actual).toBe('');
    });

    it ("shows we can get an extension with complex string", function () {
        var actual = eu.getExtension("/tom/sam/tim.doo/adam.json");
        expect(actual).toBe('json');
    });

    it ("shows we can swap extensions for linux", function() {
        var test = "/tom/sam/tim.doo/adam.json";
        var actual = eu.swapExtension(test, ".md");
        expect(actual).toBe("/tom/sam/tim.doo/adam.md");
    });

    it ("shows we can swap extensions for windows", function() {
        var test = "C:\\Sam\\adam.json";
        var actual = eu.swapExtension(test, ".md");
        expect(actual).toBe("C:\\Sam\\adam.md");
    });

    it ("shows we can get a file name from a linux long path", function() {
        var test = "/tom/sam/tim.doo/adam.json";
        var actual = eu.getFileNameFromPath(test, '/');
        expect(actual).toBe("adam.json");
    });

    it ("shows we can get a file name from no path", function() {
        var test = "adam.json";
        var actual = eu.getFileNameFromPath(test);
        expect(actual).toBe("adam.json");
    });

    it ("shows we can get a file name from a windows path", function() {
        var test = "C:\\Sam\\adam.json";
        var actual = eu.getFileNameFromPath(test, "\\");
        expect(actual).toBe("adam.json");
    });

});


describe("Basic Tests", function() {
    'use strict';

    it ("shows we can create a guid", function() {
        var guid = eu.getGuid();
        expect(guid).not.toBeNull();
    });

    it ("shows we can create a guid and test that it is a guid", function() {
        var guid = eu.getGuid();
        expect(Guid.isGuid(guid)).toBe(true);
    });

    it ("shows we can create a guid and test that it is a string", function() {
        var guid = eu.getGuid();
        expect(typeof guid.toString()).toBe('string');
    });

    it ("matches a guid in markdown", function(done) {
        eu.getGuidFromMarkdown(__dirname + '/Test.md', function(guid) {
            expect(guid).toBe('NONE');
            done();
        });

    });

    it('gets the home dir', function() {
        var homeDir = eu.getHomeDir();
        expect(homeDir).not.toBe(null);
    });

});


describe("Test Arrays", function() {
    'use strict';

    it("proves it is an array", function() {
        var myArray = [];
        expect(eu.isArray(myArray)).toBe(true);
    });

    it("proves it is not an array", function() {
        var myArray = {};
        expect(eu.isArray(myArray)).toBe(false);
    });
});



