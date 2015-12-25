/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function() {
    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

});

describe('Test Bitly Suite', function() {
    'use strict';

    var accessToken = '2ac4b4ccf91019cff6a6b3f23bcbe05ec2bf7a8c';

    it('gets a url', function() {
        var url = elfBitly.getUrl(accessToken);

        expect(url).toBeTruthy();
        expect(url).toContain(accessToken);
        expect(url).toContain('https');
    });

    it('tests the the local url we pass to getBitlyLinks', function() {
        var finalUrl;

        spyOn($, 'getJSON').and.callFake(function(url, success) {
            finalUrl = url;
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });

        elfBitly.getBitlyLinks(elfDownloads.dataTypes.dtLocal);
        expect(finalUrl).toBe(elfBitly.localUrl);
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

        elfBitly.getBitlyLinks(accessToken);
        expect(finalUrl).toContain(accessToken);
        expect(finalUrl).toContain('https');
    });

});

describe('Test Bitly Links', function() {
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
        elfBitly.getBitlyLinks();
        expect(elfBitly.bitlyLinks.status_code).toBe(200);
        expect(elfBitly.bitlyLinks.status_txt).toBe('OK');

    });

    it('shows we have a status code of 200', function() {

        elfBitly.getBitlyLinks();
        var statusCode = elfBitly.getStatusCode();
        expect(statusCode).toBe(200);
    });

    it('shows we have a status txt of OK', function() {

        elfBitly.getBitlyLinks();
        var statusText = elfBitly.getStatusText();
        expect(statusText).toBe('OK');
    });

    it('checks getBitlyLinks calls elfDisplay.renderTable', function() {
        spyOn(elfDisplay, 'renderTable');
        elfBitly.getBitlyLinks();
        expect(elfDisplay.renderTable).toHaveBeenCalled();
    });

    it('checks getBitlyLinks calls elfDisplay.render', function() {
        spyOn(elfDisplay, 'render');
        elfBitly.getBitlyLinks();
        expect(elfDisplay.render).toHaveBeenCalled();
    });

    it('checks getBitlyLinks calls elfBitly.getUrl', function() {
        spyOn(elfBitly, 'getUrl');
        elfBitly.getBitlyLinks();
        expect(elfBitly.getUrl).toHaveBeenCalled();
    });

    it('shows we have a count of 165 links', function() {

        elfBitly.getBitlyLinks();
        expect(elfBitly.bitlyLinks.data.result_count).toBe(165);
    });

    it('shows we can call getLinkHistoryArray', function() {
        elfBitly.getBitlyLinks();
        var historyArray = elfBitly.getLinkHistoryArray();
        expect(historyArray.length).toBe(50);
    });

    it('shows getLinkHistoryItem sets elfBitly.linkIndex', function() {
        elfBitly.getBitlyLinks();
        var historyArray = elfBitly.getLinkHistoryItem(12, true);
        expect(elfBitly.linkIndex).toBe(12);
    });

    it('show we can get the title of the first element', function() {
        elfBitly.getBitlyLinks();
        var firstLink = elfBitly.bitlyLinks.data.link_history[0];
        expect(firstLink.title).toBe('BootstrapBasics01Small.png (307×261)');
        expect(firstLink.title).toContain('BootstrapBasics01Small.png');
    });

    it('show we can get the first item from the link history', function() {
        elfBitly.getBitlyLinks();
        var firstLink = elfBitly.getLinkHistoryItem(0);
        expect(firstLink.title).toBe('BootstrapBasics01Small.png (307×261)');
        expect(firstLink.title).toContain('BootstrapBasics01Small.png');
    });

    it('Shows we can transform the data', function() {
        elfBitly.getBitlyLinks();
        var map = elfBitly.getMap();
        // console.log(JSON.stringify(map[0], null, 4));
        expect(map.length).toBe(50);
    });

});
