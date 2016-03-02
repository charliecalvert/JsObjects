/**
 * Created by charlie on 3/1/16.
 */

var elfLog = require('../index').elfLog;

describe('test log suite', function() {
    'use strict';
    it('expects elflog to return Error: Ok', function() {
        elfLog.setLevel(elfLog.logLevelError);
        var result = elfLog.setMessage(elfLog.logLevelError, 'Ok');
        expect(result).toBe('Error: Ok');
    });

    it('expects elflog to be silent', function() {
        elfLog.setLevel(elfLog.logLevelSilent);
        var result = elfLog.setMessage(elfLog.logLevelError, 'Ok');
        expect(result).toBe('');
    });

    it('expects elflog warning to be silent if level is info', function() {
        elfLog.setLevel(elfLog.logLevelInfo);
        var result = elfLog.setMessage(elfLog.logLevelWarn, 'Ok');
        expect(result).toBe('');
    });

    it('expects elflog info to be Information: Ok if level is info', function() {
        elfLog.setLevel(elfLog.logLevelInfo);
        var result = elfLog.setMessage(elfLog.logLevelInfo, 'Ok');
        expect(result).toBe('Information: Ok');
    });

    it('expects to see warnings if level is warn', function() {
        elfLog.setLevel(elfLog.logLevelWarn);
        var result = elfLog.setMessage(elfLog.logLevelWarn, 'Ok');
        expect(result).toBe('Warning: Ok');
    });

    it('expects not to see errors if level is info', function() {
        elfLog.setLevel(elfLog.logLevelInfo);
        var result = elfLog.setMessage(elfLog.logLevelError, 'Ok');
        expect(result).toBe('');
    });

});
