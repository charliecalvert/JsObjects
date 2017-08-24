/**
 * Created by charlie on 3/1/16.
 */


describe('test elven log suite', function() {
    'use strict';

    var elfLog = new require('../index').elvenLog('test-elf-log');

    beforeEach(function() {

    });

    afterEach(function() {
        elfLog.showLog = true;
    });

    it('expects elflog to return Error: Ok', function() {
        elfLog.setLevel(elfLog.logLevelError);
        var result = elfLog.setMessage(elfLog.logLevelError, 'Ok');
        expect(result).toBe('Error\n  Ok');
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
        expect(result).toBe('Information\n  Ok');
    });

    it('expects to see warnings if level is warn', function() {
        elfLog.setLevel(elfLog.logLevelWarn);
        var result = elfLog.setMessage(elfLog.logLevelWarn, 'Ok');
        expect(result).toBe('Warning\n  Ok');
    });

    it('expects not to see errors if level is info', function() {
        elfLog.setLevel(elfLog.logLevelInfo);
        var result = elfLog.setMessage(elfLog.logLevelError, 'Ok');
        expect(result).toBe('');
    });

    it('expects to handle two parameter logs', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        var result = elfLog.setMessage(elfLog.logLevelDetails, 'Ok', 'Yes');
        expect(result).toBe('Details\n  Ok Yes');
    });

    it('expects to handle three parameter logs', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        var result = elfLog.setMessage(elfLog.logLevelDetails, 'Ok', 'Yes', 'Sir');
        expect(result).toBe('Details\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with say', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        elfLog.showLog = false;
        var result = elfLog.say('Ok', 'Yes', 'Sir');
        expect(result).toBe('Details\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with info', function() {
        elfLog.setLevel(elfLog.logLevelInfo);
        elfLog.showLog = false;
        var result = elfLog.info('Ok', 'Yes', 'Sir');
        expect(result).toBe('Information\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with warning', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        elfLog.showLog = false;
        var result = elfLog.warning('Ok', 'Yes', 'Sir');
        expect(result).toBe('Warning\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with error', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        elfLog.showLog = false;
        var result = elfLog.error('Ok', 'Yes', 'Sir');
        expect(result).toBe('Error\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with details', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        elfLog.showLog = false;
        var result = elfLog.details('Ok', 'Yes', 'Sir');
        expect(result).toBe('Details\n  Ok Yes Sir');
    });

    it('expects to handle three parameter logs with nano-details', function() {
        elfLog.setLevel(elfLog.logLevelNanoDetails);
        elfLog.showLog = false;
        var result = elfLog.nanoDetails('Ok', 'Yes', 'Sir');
        expect(result).toBe('Nano-Details\n  Ok Yes Sir');
    });

    it('expects to suppress message because level is too low', function() {
        elfLog.setLevel(elfLog.logLevelDetails);
        elfLog.showLog = false;
        var result = elfLog.nano('Ok', 'Yes', 'Sir');
        expect(result).toBe('');
    });

});
