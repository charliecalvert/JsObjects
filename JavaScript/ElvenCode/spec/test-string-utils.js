/**
 * Created by charlie on 3/6/16.
 */

describe('Elf String Util Suite', function () {
    'use strict';

    var elfUtils = require('../index').elfUtils;
    var path = require('path');

    it('expects to get last character of string', function () {
        var result = elfUtils.getLastCharacterOfString('12345');
        expect(result).toBe('5');
    });

    it('removes from end of a string at character', function () {
        var testString = '/home/charlie/ElvenCode/spec';
        var result = elfUtils.removeFromEndAtCharacter(testString, path.sep);
        expect(result).toBe('/home/charlie/ElvenCode');
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
});

