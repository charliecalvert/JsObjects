/**
 * Created by charlie on 11/11/15.
 */

describe('Test Jade Interface for Program Interface', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('bitly.html');
    });

    it('shows we can get the attributes of keywordLink', function() {
        var klink = $('#keywordLink');
        var name = $(klink).attr('name');
        expect(name).toBe('keywordLink');
    });

    it('shows we can get all the attributes of the text input keywordLink', function() {
        var element = document.getElementById('keywordLink');
        var arr = elfTestUtils.getAttributesFromElement(element);
        // elfTestUtils.showAttributes(element, arr);
        expect(arr.length).toBeGreaterThan(3);
    });

    it('shows we can get at least 8 text inputs', function() {
        var inputs = $('input:text');
        //showHtmlElements(inputs);
        expect(inputs.length).toBeGreaterThan(7);
    });

    it('shows we can get at least 2 checkbox inputs', function() {
        var inputs = $('input:checkbox');
        // elfTestUtils.showHtmlElements(inputs);
        expect(inputs.length).toBeGreaterThan(1);
    });

    it('shows we can get 1 table', function() {
        var table = $('table');
        expect(table.length).toBe(1);
    });

    it('shows we can get 1 scroller', function() {
        var table = $('.scroller');
        expect(table.length).toBe(1);
    });
});
