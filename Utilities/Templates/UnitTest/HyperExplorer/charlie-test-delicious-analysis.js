/**
 * Created by charlie on 12/5/15.
 */

describe('Delicious Analyst Suite', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'ajax').and.callFake(function(ajaxObject) {
            ajaxObject.success(deliciousLinks);
            return {
                fail: function() {}
            };
        });
    });

    afterEach(function() {
        elfDelicious.deliciousLinks = null;
    });

    it('shows all expected methods are present', function() {
        var props = Object.getOwnPropertyNames(elfDeliciousUtils).sort();
        console.log(props);
        expect(props.length).toBeGreaterThan(6);
        expect(props.indexOf('filter')).not.toBe(-1);
        expect(props.indexOf('getAllUrls')).not.toBe(-1);
        expect(props.indexOf('getDescriptionTag')).not.toBe(-1);
        expect(props.indexOf('getMap')).not.toBe(-1);
        expect(props.indexOf('getMapBig')).not.toBe(-1);
        expect(props.indexOf('getMapMidSize')).not.toBe(-1);
        expect(props.indexOf('getOwnerNameMap')).not.toBe(-1);
    });

    it('get an array with only the url from the objects in mock delicious data', function() {
        elfDelicious.callDelicious('javascript');
        var allUrls = elfDeliciousUtils.getAllUrls();
        expect(allUrls.length).toBe(10);
        expect(allUrls[1]).toBe('http://speakingjs.com/es5/index.html');
        expect(allUrls[2]).toBe('https://leanpub.com/understandinges6/read/');
        expect(allUrls[4]).toBe('https://twitter.com/nodejs');
    });

    it('show we can get a map', function() {
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getMap();
        // console.log(JSON.stringify(map, null, 4));
        expect(map.length).toBe(10);
        expect(map[0].url).toContain('http');
        expect(map[0].url).toContain('web');
        expect(map[0].url).toContain('JavaScript');
    });

    it('show we can get an owner name map', function() {
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getOwnerNameMap();
        // console.log(JSON.stringify(map, null, 4));
        expect(map.length).toBe(10);
        expect(map[0].url).toContain('http');
        expect(map[0].url).toContain('web');
        expect(map[0].url).toContain('JavaScript');
        expect(map[0].ownerName).toBeTruthy();
    });

    it('shows we can get a midsize map', function() {
        var index = 0;
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getMapMidSize();
        expect(map.length).toBe(10);
        expect(map[index].url).toBeTruthy();
        expect(map[index].description).toBeTruthy();
        expect(map[index].date).toBeTruthy();
        expect(map[index].description).toBe('Elvenware JavaScript Home Page');
    });

    it('shows we can get a big map', function() {
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getMapBig();
        var index = 1;
        expect(map.length).toBe(10);
        expect(map[index].url).toBeTruthy();
        expect(map[index].description).toBeTruthy();
        expect(map[index].date).toBeTruthy();
        expect(map[index].description).toBe('Speaking JavaScript');
        expect(map[index].tags[2]).toBe('ebook');
    });

    it('shows we can map on description tag', function() {
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getDescriptionTag();
        var index = 1;
        expect(map.length).toBe(10);
        expect(map[index].url).toBeTruthy();
        expect(map[index].description).toBeTruthy();
        expect(map[index].description).toBe('Speaking JavaScript');
        expect(map[index].tags[2]).toBe('ebook');
    });

    it('shows we can filter a description tag', function() {
        elfDelicious.callDelicious('javascript');
        var map = elfDeliciousUtils.getDescriptionTag();
        var filter = elfDeliciousUtils.filter(map, 'nodejs');
        expect(filter.length).toBe(3);
    });

    it('shows that deliciousLink was set to null by afterEach', function() {
        expect(elfDelicious.deliciousLinks).toBeFalsy();
    });

    it('shows how toBeFalsy works', function() {
        expect(false).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(0).toBeFalsy();
        expect(-1).not.toBeFalsy();
        expect(true).not.toBeFalsy();
        //expect(elfDelicious.deliciousLinks).toBeFalsy();
        elfDelicious.callDelicious('javascript');
        expect(elfDelicious.deliciousLinks).not.toBeFalsy();
    });
});
