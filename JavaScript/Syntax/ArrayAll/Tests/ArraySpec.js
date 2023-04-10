describe('An Array Suite', function () {
    'use strict';

    const app = require('../public/app.js');

    beforeAll(function () {
        app.init();
    });

    it('contains spec with an expectation', function () {
        expect(true).toBe(true);
    });

    it('Can create ArrayAll', function () {
        expect(app.arrayAll).not.toBeNull();
    });

    it('can find emptyArray', function () {
        expect(app.arrayAll.emptyArrayCount()).toBe(0);
    });

    it('shows empty array is an array', function () {
        const emptyArray = app.arrayAll.emptyArray();
        const isArray = Array.isArray(emptyArray);
        expect(isArray).toBe(true);
    });

    it('can count letterArray', function () {
        expect(app.arrayAll.letterArray()).toBe(3);
    });

    it('can find an item in constructor array', function () {
        expect(app.arrayAll.arrayConstructor()[1]).toBe(2);
    });

    it('can find an item in a mixedArray', function () {
        expect(app.arrayAll.mixedArray()[1]).toBe(23);
    });

    it('can iterate over an array with a for loop', function () {
        var mixedArray = app.arrayAll.mixedArray();
        expect(mixedArray).not.toBeNull();
        for (var i = 0; i < mixedArray.length; i++) {
            var value = mixedArray[i];
            if (i === 2) {
                expect(value).toBe(false);
            }
        }
    });

    it('can convert text to an array', function () {
        var robertFrostQuote =
            'Education is the ability to listen to almost anything without losing your temper or your self-confidence.';
        var robertFrostArray = app.arrayAll.convertTextToArray(
            robertFrostQuote
        );
        var value = robertFrostArray[3];
        expect(value).toBe('ability');
    });

    it('can convert CSV to an array', function () {
        var csv = '1, 2, 3, "four", 5, "six"';

        var array = app.csvToArray.convertCsvToArray(csv);
        var value = array[3];
        expect(value).toBe('four');
    });

    it('can convert CSV to an array with apostrophe', function () {
        var csv = '1, 2, 3, "four", 5, "six", "can\'t"';

        var array = app.csvToArray.convertCsvToArray(csv);
        var value = array[6];
        // eslint-disable-next-line quotes
        expect(value).toBe("can't");
    });

    it('can convert CSV to an array with RegEx', function () {
        var csv = '1, 2, 3, "four", 5, "six"';
        var array = app.csvToArray.convertCsvToArrayRegEx(csv);
        var value = array[3];
        expect(value).toBe('four');
    });

    it('can convert CSV to an array with Nadel', function () {
        var csv = '1,2,3,"four",5,"six"';
        var array = app.csvToArray.convertCsvToArrayNadel(csv);
        var value = array[0][3];
        expect(value).toBe('four');
    });

    it('can get first element from an array', function () {
        var natoAlphabet = ['Alpha', 'Bravo', 'Charlie'];
        var first = app.arrayAll.getFirst(natoAlphabet);
        expect(first).toBe('Alpha');
        expect(app.arrayAll.isEqual(natoAlphabet, ['Bravo', 'Charlie'])).toBe(
            true
        );
    });
});
