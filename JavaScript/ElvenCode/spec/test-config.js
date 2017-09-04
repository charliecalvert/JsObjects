/**
 * Created by charlie on 3/1/16.
 */

describe('test elven-config suite', function() {
    'use strict';

    const elfConfig = require('../index').elfConfig;
    const elfUtils = require('../index').elfUtils;
    const elfLog = require('../index').elfLog();
    elfLog.elfName = 'test-config';
    elfLog.setLevel(elfLog.logLevelDetails);

    beforeEach(function() {
        elfLog.nanoDetails('Before each called.');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
    });

    function errorHandler() {
        expect(false).toBe(true);
    }

    it('shows we can load the elf config async', function(done) {
        elfConfig.useLocalConfig = false;
        elfConfig.loadAsync()
            .then(function(data) {
                expect(data.calvert['base-dir']).toBe('/home/charlie/');
                expect(data.calvert['bootswatch']).toBeDefined();
                expect(data.calvert['most-recent-date']).toBeDefined();
                expect(data.calvert['site-dirs']).toBeDefined();
            })
            .catch(errorHandler)
            .then(done);
    });

    it('shows we can load the elf config', function() {
        elfConfig.useLocalConfig = false;
        const content = elfConfig.load();
        // [ 'calvert', 'selectedElvenImages', 'elvenImages' ]
        console.log(Object.keys(content));
        const home = elfUtils.ensureEndsWithPathSep(process.env.HOME);
        expect(content.calvert['base-dir']).toBe(home);
    });

    it('shows we can get the root keys which name the items in the config file', function(done) {
        elfConfig.loadAsync()
            .then(function() {
                const keys = elfConfig.keys();
                expect(keys).toContain('calvert');
                expect(keys).toContain('selectedElvenImages');
                expect(keys).toContain('elvenImages');
                expect(keys.length).toBe(3);
            })
            .catch(errorHandler)
            .then(done);
    });

    it('shows we can get the calvert keys', function(done) {
        elfConfig.loadAsync()
            .then(function() {
                const keys = elfConfig.keys('calvert');
                expect(keys[0]).toBe('base-dir');
            })
            .catch(errorHandler)
            .then(done);
    });

    it('shows we can get the calvert base dir', function(done) {
        elfConfig.loadAsync()
            .then(function() {
                const dir = elfConfig.get('calvert', 'base-dir');
                expect(dir).toBe('/home/charlie/');
            })
            .catch(errorHandler)
            .then(done);
    });

    it('shows we can get the california elvenImages', function(done) {
        elfConfig.useLocalConfig = false;
        elfConfig.loadAsync()
            .then(function() {
                const california = elfConfig.getElvenImage('california');
                expect(california.baseDir).toBe('/var/www/html/images');
            })
            .catch(errorHandler)
            .then(done);
    });

});
