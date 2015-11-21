/**
 * Created by charlie on 11/9/15.
 */

describe('Test Url Suite', function() {
    'use strict';

    var accessToken = elfDownloads.accessToken;

    it('gets a local url', function() {
        var url = elfBitly.getUrl(elfDownloads.dataTypes.dtLocal);
        expect(url).toBeTruthy();
        expect(url).toContain('data/bitly-links.json');
    });

    it('gets a bitly url', function() {
        var url = elfBitly.getUrl(elfDownloads.dataTypes.dtBitly);

        expect(url).toBeTruthy();
        expect(url).toContain('api-ssl.bitly.com/v3/user/link_history');
        expect(url).toContain('https');
    });

    it('tests the the local url we pass to getLinks', function() {
        var finalUrl;

        spyOn($, 'getJSON').and.callFake(function(url, success) {
            finalUrl = url;
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });

        elfBitly.getLinks(elfDownloads.dataTypes.dtLocal);
        expect(finalUrl).toBe('./data/bitly-links.json');
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

        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        expect(finalUrl).toContain(accessToken);
        expect(finalUrl).toContain('https');
    });

});
