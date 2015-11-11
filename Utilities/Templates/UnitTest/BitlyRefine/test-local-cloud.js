/**
 * Created by charlie on 11/10/15.
 */


describe('Test Local Cloud Options Suite', function() {
    'use strict';

    beforeEach(function () {
        var fixture = '<div id="fixture"><div role="group" id="dataSource">' +
            '<div class="radio">' +
                '<label for="localData">' +
                '<input type="radio" name="radio" value="localData" id="localData">' +
                '<strong>Local Data</strong></label>' +
            '</div>' +
            '<div class="radio">' +
                '<label for="cloudData">' +
                '<input type="radio" name="radio" value="cloudData" id="cloudData">' +
                '<strong>Cloud Data</strong></label>' +
            '</div></div></div>';
        //console.log(fixture);
        document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });


    it('checks for local data selection', function() {
        document.getElementById('localData').checked = true;
        // $('#localData').prop('checked', true);
        elfDownloads.dataTypeSelection();
        var result = elfDownloads.dataType === elfDownloads.dataTypes.dtLocal;
        
        expect(result).toBeTruthy();
    });

    it('checks for cloud data selection', function() {
        document.getElementById('cloudData').checked = true;
        elfDownloads.dataTypeSelection();
        var result = elfDownloads.dataType === elfDownloads.dataTypes.dtCloud;
        expect(result).toBeTruthy();
    });

    function doSpy(testUrl) {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            expect(url).toContain(testUrl);
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });
    }


    it('checks for local data selection triggering local URL', function() {
        doSpy(elfBitly.localUrl);
        document.getElementById('localData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getBitlyData();
    });

    it('checks for cloud data selection triggering cloud URL', function() {
        doSpy(elfBitly.baseUrl);
        document.getElementById('cloudData').checked = true;
        elfDownloads.dataTypeSelection();
        elfDownloads.getBitlyData();
    });

});