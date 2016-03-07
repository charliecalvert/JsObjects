/**
 * Created by charlie on 10/7/15.
 */

var utils = require('../image-help/utilities.js');
var elfConfig = require('elven-code').elfConfig;
var elfLog = require('elven-code').elfLog;
elfLog.setLevel(elfLog.logLevelDetails);

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    beforeEach(function() {
        elfConfig.useLocalConfig = true;
    });

    function handleError(err, done) {
        elfLog.log(elfLog.logLevelError, 'Error loading config file' + err.message);
        expect(err).toBeFalsy();
        done();
    }

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('expects configuration settings to exist', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                expect(settings).toBeTruthy();
                done();
            }
        });
    });

    it('expects configuration settings to have correct allImagesJsonFile', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                expect(settings.allImagesJsonFile).toBe('all-images.json');
                done();
            }
        });
    });

    it('expects configuration settings to contain markdownFileWithImages', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                var expected = process.env.HOME + '/Documents/AllTest/california.md';
                expect(settings.markdownFileWithImages).toBe(expected);
                done();
            }
        });
    });

    it('expects base in configuration settings to be apache dir', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                var expected = '/var/www/html';
                expect(settings.base).toBe(expected);
                done();
            }
        });
    });

    it('expects imageDir in configuration settings to be valid', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                var expected = '/images/california/';
                expect(settings.imageDir).toBe(expected);
                done();
            }
        });
    });

    it('expects notUsedDir in configuration settings to be valid', function(done) {
        elfConfig.load(function(err) {
            if (err) {
                handleError(err, done);
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                var expected = process.env.HOME + '/temp/not-used/california/';
                expect(settings.notUsedDir).toBe(expected);
                done();
            }
        });
    });

});
