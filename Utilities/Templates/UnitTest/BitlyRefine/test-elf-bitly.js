/**
 * Created by charlie on 11/10/15.
 */

describe('Test ElfBitly Suite', function() {
    'use strict';

    var elfBitlyKeys;

    beforeEach(function() {
        elfBitlyKeys = Object.keys(elfBitly);
    });

    it('Expects there to be at least 10 properties or methods in elfBitly', function() {
        console.log(elfBitlyKeys);
        expect(elfBitlyKeys.length).toBeGreaterThan(10);
    });

    it('Expects elfDownloads to contain linkIndex', function() {
        expect(elfBitlyKeys.indexOf('linkIndex')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain bitlyLinks', function() {
        expect(elfBitlyKeys.indexOf('bitlyLinks')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain baseUrl', function() {
        expect(elfBitlyKeys.indexOf('baseUrl')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain localUrl', function() {
        expect(elfBitlyKeys.indexOf('localUrl')).toBeGreaterThan(-1);
    });

    it('checks for the value of elfBitly baseUrl', function() {
        expect(elfBitly.baseUrl).toContain('https://api-ssl.bitly.com/v3/user/link_history');
    });

    it('checks for the value of elfBitly localUrl', function() {
        expect(elfBitly.localUrl).toContain('data/bitly-links.json');
    });

    it('Expects elfDownloads to contain getLinkHistoryArray', function() {
        expect(elfBitlyKeys.indexOf('getLinkHistoryArray')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain getLinkHistoryItem', function() {
        expect(elfBitlyKeys.indexOf('getLinkHistoryItem')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain getBitlyLinks', function() {
        expect(elfBitlyKeys.indexOf('getBitlyLinks')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain getUrl', function() {
        expect(elfBitlyKeys.indexOf('getUrl')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain getStatusText', function() {
        expect(elfBitlyKeys.indexOf('getStatusText')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain getStatusCode', function() {
        expect(elfBitlyKeys.indexOf('getStatusCode')).toBeGreaterThan(-1);
    });
});
