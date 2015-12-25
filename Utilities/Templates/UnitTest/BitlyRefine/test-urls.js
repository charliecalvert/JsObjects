/**
 * Created by charlie on 11/9/15.
 */

describe('Test Url Suite', function() {
    'use strict';

    var accessToken = elfDownloads.accessToken;

    it('gets a local url', function() {
        var url = elfBitly.getUrl(elfDownloads.dataTypes.dtLocal);

        expect(url).toBeTruthy();
        expect(url).toContain(elfBitly.localUrl);
    });

    it('gets a cloud url', function() {
        var url = elfBitly.getUrl(elfDownloads.dataTypes.dtCloud);

        expect(url).toBeTruthy();
        expect(url).toContain('api-ssl.bitly.com');
        expect(url).toContain('https');

    });

    it('tests the the local url we pass to getBitlyLinks', function() {
        var finalUrl;

        spyOn($, 'getJSON').and.callFake(function(url, success) {
            finalUrl = url;
            expect(finalUrl).toBe('data/bitly-links.json');
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });

        elfBitly.getBitlyLinks(elfDownloads.dataTypes.dtLocal);

    });

    it('tests the accesstoken url we pass to getBitlyLinks', function() {
        var finalUrl;

        spyOn($, 'getJSON').and.callFake(function(url, success) {
            finalUrl = url;
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });

        elfBitly.getBitlyLinks(elfDownloads.dataTypes.dtCloud);
        expect(finalUrl).toContain(accessToken);
        expect(finalUrl).toContain('https');
    });

});
