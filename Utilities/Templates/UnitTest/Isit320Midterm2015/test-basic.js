/**
 * Created by charlie on 10/7/15.
 */

describe('Test Basic Original Bitly Link Checks', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });
    });

    it('shows we can directly get the status code and text', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        expect(elfBitly.bitlyLinks.status_code).toBe(200);
        expect(elfBitly.bitlyLinks.status_txt).toBe('OK');

    });

    it('shows we have a status code of 200', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var statusCode = elfBitly.getStatusCode();
        expect(statusCode).toBe(200);
    });

    it('shows we have a status txt of OK', function() {

        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var statusText = elfBitly.getStatusText();
        expect(statusText).toBe('OK');
    });

    it('shows we have a count of 165 links', function() {

        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        expect(elfBitly.bitlyLinks.data.result_count).toBe(165);
    });

    it('show we can get the title of the first element', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var firstLink = elfBitly.bitlyLinks.data.link_history[0];
        expect(firstLink.title).toBe('BootstrapBasics01Small.png (307×261)');
        expect(firstLink.title).toContain('BootstrapBasics01Small.png');
    });

    it('show we can get the first item from the link history', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var firstLink = elfBitly.getLinkHistoryItem(0);
        expect(firstLink.title).toBe('BootstrapBasics01Small.png (307×261)');
        expect(firstLink.title).toContain('BootstrapBasics01Small.png');
    });

    it('Shows we can transform the data', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var map = elfBitly.getMap();
        // console.log(JSON.stringify(map[0], null, 4));
        expect(map.length).toBe(50);
    });
});
