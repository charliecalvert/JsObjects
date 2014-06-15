/**
 * @author Charlie Calvert
 */

var assert = require("assert");
var eu = require("../ElfUtils");
var path = require("path");
var os = require("os");
var Guid = require("guid");

describe("Test01", function() {
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

    it('TestsPadNumber', function() {
        var numberToPad = 2;
        var padValue = 0;
        var width = 3;
        var expected = '002';
        var actual = eu.padNumber(numberToPad, width, padValue);
        expect(actual).toBe(expected);
    });

    it('TestsPadNumber01', function() {
        var numberToPad = 35;
        var padValue = 0;
        var width = 4;
        var expected = '0035';
        var actual = eu.padNumber(numberToPad, width, padValue);
        expect(actual).toBe(expected);
    });

    it('TestsPadNumber02', function() {
        var numberToPad = 35;
        var padValue = 1;
        var width = 6;
        var expected = '111135';
        var actual = eu.padNumber(numberToPad, width, padValue);
        expect(actual).toBe(expected);
    });

    it("shows we can get ends with", function() {
        var actual = eu.endsWith("This is foo and boo", "boo");
        expect(actual).toBeTruthy();
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


});

describe("Test White Space", function() {
    'use strict';

    
    it("strips white space", function() {
        var stringToStrip = "This string";
        var expected = "Thisstring";
        var actual = eu.stripWhiteSpace(stringToStrip);
        expect(actual).toBe(expected);
    });

    it("strips lots of white space", function() {
        var stringToStrip = "This string is long and full of words and spaces";
        var expected = "Thisstringislongandfullofwordsandspaces";
        var actual = eu.stripWhiteSpace(stringToStrip);
        expect(actual).toBe(expected);
    });

    it("strips white space with tabs", function() {
        var stringToStrip = "This\tstring is barly";
        var expected = "Thisstringisbarly";
        var actual = eu.stripWhiteSpace(stringToStrip);
        expect(actual).toBe(expected);
    });

    it("strips white space with tabs crlf", function() {
        var stringToStrip = "This\tstring is barly\r\n";
        var expected = "Thisstringisbarly";
        var actual = eu.stripWhiteSpace(stringToStrip);
        expect(actual).toBe(expected);
    });


    it("strips periods", function() {
        var stringToStrip = "This string is barly. And it is gold.";
        var expected = "This string is barly And it is gold";
        var actual = eu.stripPunctuation(stringToStrip);
        expect(actual).toBe(expected);
    });

    it("strips periods and bangs", function() {
        var stringToStrip = "This string is barly. And it is gold!";
        var expected = "This string is barly And it is gold";
        var actual = eu.stripPunctuation(stringToStrip);
        expect(actual).toBe(expected);
    });

    it("strips commas and question marks", function() {
        var stringToStrip = "This string is barly, and it is gold?";
        var expected = "This string is barly and it is gold";
        var actual = eu.stripPunctuation(stringToStrip);
        expect(actual).toBe(expected);
    });


    it('encodes html with escape', function() {
        var html = "<p>Foo</p>";
        var expected = "&lt;p&gt;Foo&lt;/p&gt;";
        var actual = eu.htmlEscape(html);
        expect(actual).toBe(expected);
    });

    it('encodes html with unescape', function() {
        var expected = "<p>Foo</p>";
        var html = "&lt;p&gt;Foo&lt;/p&gt;";
        var actual = eu.htmlUnescape(html);
        expect(actual).toBe(expected);
    });

    it('gets the home dir', function() {
        var homeDir = eu.getHomeDir();
        expect(homeDir).not.toBe(null);
    });
    
   
});
