/**
 * Created by charlie on 11/14/15.
 */

describe('Test the midterm version of ElfBitly', function() {

    'use strict';

    var elfBitlyKeys;

    beforeEach(function() {
        elfBitlyKeys = Object.keys(elfBitly);
    });

    it('Expects elfBitly to contain getLinks', function() {
        expect(elfBitlyKeys.indexOf('getLinks')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly.getLinks to be defined', function() {
        expect(elfBitly.getLinks).toBeDefined();
    });

    it('Expects elfBitly.getBitlyLinks not to be defined', function() {
        expect(elfBitly.getBitlyLinks).not.toBeDefined();
    });

    /*
    it('Check that initialize calls getLinks, not getBitlyLinks', function() {
        spyOn(elfBitly, 'getLinks');
        elfMidterm.initialize();
        expect(elfBitly.getLinks).toHaveBeenCalled();
    }); */

    it('Expects elfBitly to contain getUrl', function() {
        expect(elfBitlyKeys.indexOf('getUrl')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain linkIndex', function() {
        expect(elfBitlyKeys.indexOf('linkIndex')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain bitlyLinks', function() {
        expect(elfBitlyKeys.indexOf('bitlyLinks')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain baseUrl', function() {
        expect(elfBitlyKeys.indexOf('baseUrl')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain localUrl', function() {
        expect(elfBitlyKeys.indexOf('localUrl')).toBeGreaterThan(-1);
    });

    it('checks for the value of elfBitly baseUrl', function() {
        expect(elfBitly.baseUrl).toContain('https://api-ssl.bitly.com/v3/user/link_history');
    });

    it('checks for the value of elfBitly localUrl', function() {
        expect(elfBitly.localUrl).toContain('data/bitly-links.json');
    });

    it('Expects elfBitly to contain getLinkHistoryArray', function() {
        expect(elfBitlyKeys.indexOf('getLinkHistoryArray')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain getLinkHistoryItem', function() {
        expect(elfBitlyKeys.indexOf('getLinkHistoryItem')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain getStatusText', function() {
        expect(elfBitlyKeys.indexOf('getStatusText')).toBeGreaterThan(-1);
    });

    it('Expects elfBitly to contain getStatusCode', function() {
        expect(elfBitlyKeys.indexOf('getStatusCode')).toBeGreaterThan(-1);
    });
});
