/**
 * Created by charlie on 11/10/15.
 */

describe('Test Local Cloud Options Suite', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('test-local-cloud.html');
    });

    function simpleGetJsonSpy() {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });
    }

    it('checks for local data selection triggering call to getUrl', function() {
        simpleGetJsonSpy();
        spyOn(elfBitly, 'getUrl');
        document.getElementById('localData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getLinkData();
        expect(elfBitly.getUrl).toHaveBeenCalled();
    });

    it('checks for local data selection triggering call to getLinks', function() {
        simpleGetJsonSpy();
        spyOn(elfBitly, 'getLinks');
        document.getElementById('localData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getLinkData();
        expect(elfBitly.getLinks).toHaveBeenCalled();
    });

    it('checks for local data selection', function() {
        simpleGetJsonSpy();
        document.getElementById('localData').checked = true;
        // $('#localData').prop('checked', true);
        elfDownloads.dataTypeSelection();
        var result = elfDownloads.dataType === elfDownloads.dataTypes.dtLocal;
        expect(result).toBeTruthy();
    });

    it('checks for bitly data selection', function() {
        document.getElementById('bitlyData').checked = true;
        elfDownloads.dataTypeSelection();
        var result = elfDownloads.dataType === elfDownloads.dataTypes.dtBitly;
        expect(result).toBeTruthy();
    });

    function getJsonSpy(testUrl, callbackTest) {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            callbackTest(url, testUrl);
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });
    }

    it('checks for local data selection triggering local URL', function() {
        getJsonSpy(elfBitly.localUrl, function(url, testUrl) {
            expect(url).toContain(testUrl);
        });
        document.getElementById('localData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getLinkData();
    });

    it('checks for cloud data selection triggering cloud URL', function() {
        getJsonSpy(elfBitly.baseUrl, function(url, testUrl) {
            expect(url).toContain(testUrl);
        });
        document.getElementById('bitlyData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getLinkData();
    });

});
