/**
 * Created by charlie on 3/1/16.
 */

var elfConfig = require('../index').elfConfig;
var elfLog = require('../index').elfLog;
elfLog.setLevel(elfLog.logLevelSilent);

describe('test elven-config suite', function() {
    'use strict';

    it('shows we can create the elf config', function(done) {
        elfConfig.useLocalConfig = false;
        elfConfig.load(function(err, data) {
            if (err) {
                throw err;
            }
            expect(data.calvert['base-dir']).toBe('/home/charlie/');
            done();
        });
    });

    it('shows we can get the root keys which name the items in the config file', function(done) {
        elfConfig.load(function(data) {
            var keys = elfConfig.keys();
            expect(keys[0]).toBe('calvert');
            done();
        });
    });

    it('shows we can get the calvert keys', function(done) {
        elfConfig.load(function(data) {
            var keys = elfConfig.keys('calvert');
            expect(keys[0]).toBe('base-dir');
            done();
        });
    });

    it('shows we can get the calvert base dir', function(done) {
        elfConfig.load(function(data) {
            var dir = elfConfig.get('calvert', 'base-dir');
            expect(dir).toBe('/home/charlie/');
            done();
        });
    });

    it('shows we can get the california elvenImages', function(done) {
        elfConfig.load(function(data) {
            var california = elfConfig.getElvenImage('california');
            expect(california.baseDir).toBe('/var/www/html');
            done();
        });
    });

});
