/**
 * @author Charlie Calvert
 */

 var assert = require("assert");
 var eu = require("../ElfUtils");
 var path = require("path");
 
describe("Test01", function() {

	var elfPathSep = '\\';

    it ("Is 3 equal to 3",  function() {
    	var actual = 3;
    	var expected = 3;
        assert.equal(expected, actual);
    });
    
    it ("EstablishPathSep",  function() {
    	var actual = path.sep;
    	// On Windows: 
    	var expected = '\\';
    	// On Linux: var expected = '/';
        assert.equal(expected, actual);
    });
    
    it ('TestEnsureStartsWithPathSep01', function() {
    	var value = 'sam';
    	var expected = '\\sam';
    	var actual = eu.ensureStartsWithPathSep(value);
 		assert.equal(expected, actual);	   	
    });
    
    it ('TestEnsureStartsWithPathSep02', function() {
    	var value = '\\sam';
    	var expected = '\\sam';
    	var actual = eu.ensureStartsWithPathSep(value);
 		assert.equal(expected, actual);	   	
    });
    
    it ('TestEnsureStartsWithPathSep03', function() {
    	var value = 'sam.js';
    	var actual = eu.ensureStartsWithPathSep(value);
    	var expected = '\\sam.js';
 		assert.equal(expected, actual);	   	
    });
    
    it ('TestEnsureStartsWithPathSep04', function() {
    	var value = '\\sam.js';
    	var expected = '\\sam.js';
    	var actual = eu.ensureStartsWithPathSep(value);
 		assert.equal(expected, actual);	   	
    });
	
	   it ('TestEnsureEndsWithPathSep01', function() {
    	var value = 'sam';
    	var expected = 'sam' + elfPathSep;
    	var actual = eu.ensureEndsWithPathSep(value);
 		assert.equal(expected, actual);	   	
    });
	
	it ('TestEnsureEndsWithPathSep02', function() {
    	var value = __dirname;
    	var expected =  __dirname + elfPathSep;
    	var actual = eu.ensureEndsWithPathSep(value);
 		assert.equal(expected, actual);	   	
    });
	
	it ('TestElfJoin01', function() {
		var pathName = __dirname;
    	var fileName = 'Sam.txt';
    	var expected =  __dirname + elfPathSep + fileName;
    	var actual = eu.elfJoin(pathName, fileName);
 		assert.equal(expected, actual);	   	
    });
	
	it ('TestElfJoin02', function() {
		var pathName = __dirname + elfPathSep;
    	var fileName = 'Sam.txt';
    	var expected =  __dirname + elfPathSep + fileName;
    	var actual = eu.elfJoin(pathName, fileName);
 		assert.equal(expected, actual);	   	
    });
	
	it ('TestElfJoin03', function() {
		var pathName = __dirname + elfPathSep;
    	var fileName = elfPathSep + 'Sam.txt';
    	var expected =  __dirname + fileName;
    	var actual = eu.elfJoin(pathName, fileName);
 		assert.equal(expected, actual);	   	
    });
    
    it ('TestsPadNumber', function() {
    	var numberToPad = 2;
    	var padValue = 0;
    	var width = 3;
    	var expected = '002';
    	var actual = eu.padNumber(numberToPad, width, padValue);
    	expect(actual).toBe(expected);
    });
    
    it ('TestsPadNumber01', function() {
    	var numberToPad = 35;
    	var padValue = 0;
    	var width = 4;
    	var expected = '0035';
    	var actual = eu.padNumber(numberToPad, width, padValue);
    	expect(actual).toBe(expected);
    });
    
    it ('TestsPadNumber02', function() {
    	var numberToPad = 35;
    	var padValue = 1;
    	var width = 6;
    	var expected = '111135';
    	var actual = eu.padNumber(numberToPad, width, padValue);
    	expect(actual).toBe(expected);
    });
    
    it ('encodes html', function() {
    	var html = "<p>Foo</p>";
    	var expected = "&lt;p&gt;Foo&lt;/p&gt;";
    	var actual = eu.htmlEscape(html);
    	expect(actual).toBe(expected);
    });
    
    it ('encodes html', function() {
    	var expected = "<p>Foo</p>";
    	var html = "&lt;p&gt;Foo&lt;/p&gt;";
    	var actual = eu.htmlUnescape(html);
    	expect(actual).toBe(expected);
    });

});