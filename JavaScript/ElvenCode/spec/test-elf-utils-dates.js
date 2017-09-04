/***************
 * test-elf-utils dates
 **************/


describe('Elf Utils Date Suite', function() {
    'use strict';

    var elfUtils = require('../index').elfUtils;
    var mkdirp = require('mkdirp');
    var dateDirString = '';

    afterAll(function(done) {
        if (dateDirString.length > 0) {
            elfUtils.deleteDirectory(dateDirString)
            .then(done);
            dateDirString = '';
        }
    });

    function elfDateMatch(value, rule) {
        return new RegExp(rule).test(value);
    }

    it('tests the hypen date formate', function() {
        var dateString = elfUtils.getHyphenDate();
        console.log(dateString);
        var testResult = elfDateMatch(dateString, "\\d\\d\\d\\d-\\d\\d-\\d\\d-\\d\\d-\\d\\d-\\d\\d");
        expect(testResult).toBe(true);
    });

    it('tests the normal date formate', function() {
        var dateString = elfUtils.getNormalDate();
        console.log(dateString);
        var testResult = elfDateMatch(dateString, "\\d\\d\\d\\d-\\d\\d-\\d\\d \\d\\d:\\d\\d:\\d\\d");
        expect(testResult).toBe(true);
    });


    it('creates the date directory', function() {
        /*dateDirString = elfUtils.ensureEndsWithPathSep(process.env.HOME) +
            elfUtils.getHyphenDate();
        console.log(dateDirString);
        elfUtils.ensureDir(dateDirString);*/
        dateDirString = elfUtils.createDateDir();
    });

});
