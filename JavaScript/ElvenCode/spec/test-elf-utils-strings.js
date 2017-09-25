/**
 * Created by charlie on 3/6/16.
 */

describe('Elf String Util Suite', function() {
    'use strict';

    var elfUtils = require('../index').elfUtils;
    var path = require('path');

    describe('PadNumber tests', function() {

        it('TestsPadNumber', function() {
            var numberToPad = 2;
            var padValue = 0;
            var width = 3;
            var expected = '002';
            var actual = elfUtils.padNumber(numberToPad, width, padValue);
            expect(actual).toBe(expected);
        });

        it('TestsPadNumber01', function() {
            var numberToPad = 35;
            var padValue = 0;
            var width = 4;
            var expected = '0035';
            var actual = elfUtils.padNumber(numberToPad, width, padValue);
            expect(actual).toBe(expected);
        });

        it('TestsPadNumber02', function() {
            var numberToPad = 35;
            var padValue = 1;
            var width = 6;
            var expected = '111135';
            var actual = elfUtils.padNumber(numberToPad, width, padValue);
            expect(actual).toBe(expected);
        });

        it('expects padnumber 5,3,"0" to be 005', function() {
            var result = elfUtils.padNumber(5, 3, '0');
            expect(result).toBe('005');
        });

    });

    describe('Various ', function() {

        it('shows we can get ends with', function() {
            var actual = elfUtils.endsWith('This is foo and boo', 'boo');
            expect(actual).toBeTruthy();
        });

        it('shows we can get ends with 2', function() {
            var actual = elfUtils.endsWith('This is the end of the line', 'line');
            expect(actual).toBeTruthy();
        });

        it('shows we can get ends with 3', function() {
            var actual = elfUtils.endsWith('meatballs and chickens', 'kens');
            expect(actual).toBeTruthy();
        });

        it('shows we can get ends with false', function() {
            var actual = elfUtils.endsWith('meatballs and chickens', 'akens');
            expect(actual).toBeFalsy();
        });

        it('gets string from end of string at character', function() {
            const testString = '/home/charlie/ElvenCode/spec.md';
            const result = elfUtils.getEndFromCharacter(testString, path.sep);
            expect(result).toBe('spec.md');
        });
        
        it('removes from end of a string at character', function() {
            var testString = '/home/charlie/ElvenCode/spec';
            var result = elfUtils.removeFromEndAtCharacter(testString, path.sep);
            expect(result).toBe('/home/charlie/ElvenCode');
        });

        it('removes characters from string', function() {
            var testString = '/basics$to';
            var result = elfUtils.removeFromEndAtCharacter(testString, '$');
            expect(result).toBe('/basics');
        });

        it('expects to get last character of string', function() {
            var result = elfUtils.getLastCharacterOfString('12345');
            expect(result).toBe('5');
        });

        it('removes X characters from start of string string', function() {
            var testString = '/basics';
            var result = elfUtils.removeCharactersFromStartOfString(testString, 1);
            expect(result).toBe('basics');
        });

        it('expects to get the first word', function() {
            var test = 'The first word';
            var expected = 'The';
            var result = elfUtils.getFirstWord(test);
            expect(result).toBe(expected);
        });

        it('expects to get the first word from single word', function() {
            var test = 'The';
            var expected = 'The';
            var result = elfUtils.getFirstWord(test);
            expect(result).toBe(expected);
        });

        it('encodes html with escape', function() {
            var html = '<p>Foo</p>';
            var expected = '&lt;p&gt;Foo&lt;/p&gt;';
            var actual = elfUtils.htmlEscape(html);
            expect(actual).toBe(expected);
        });

        it('encodes html with unescape', function() {
            var expected = '<p>Foo</p>';
            var html = '&lt;p&gt;Foo&lt;/p&gt;';
            var actual = elfUtils.htmlUnescape(html);
            expect(actual).toBe(expected);
        });

    });

    describe('Test String White Space', function() {

        it('strips white space', function() {
            var stringToStrip = 'This string';
            var expected = 'Thisstring';
            var actual = elfUtils.stripWhiteSpace(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips lots of white space', function() {
            var stringToStrip = 'This string is long and full of words and spaces';
            var expected = 'Thisstringislongandfullofwordsandspaces';
            var actual = elfUtils.stripWhiteSpace(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips white space with tabs', function() {
            var stringToStrip = 'This\tstring is barly';
            var expected = 'Thisstringisbarly';
            var actual = elfUtils.stripWhiteSpace(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips white space with tabs crlf', function() {
            var stringToStrip = 'This\tstring is barly\r\n';
            var expected = 'Thisstringisbarly';
            var actual = elfUtils.stripWhiteSpace(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips periods', function() {
            var stringToStrip = 'This string is barly. And it is gold.';
            var expected = 'This string is barly And it is gold';
            var actual = elfUtils.stripPunctuation(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips periods and bangs', function() {
            var stringToStrip = 'This string is barly. And it is gold!';
            var expected = 'This string is barly And it is gold';
            var actual = elfUtils.stripPunctuation(stringToStrip);
            expect(actual).toBe(expected);
        });

        it('strips commas and question marks', function() {
            var stringToStrip = 'This string is barly, and it is gold?';
            var expected = 'This string is barly and it is gold';
            var actual = elfUtils.stripPunctuation(stringToStrip);
            expect(actual).toBe(expected);
        });

    });
});

