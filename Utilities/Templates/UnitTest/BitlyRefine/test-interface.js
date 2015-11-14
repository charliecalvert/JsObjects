/**
 * Created by charlie on 11/11/15.
 */

describe('Test Jade Interface for Program Interface', function() {
    'use strict';

    beforeEach(function() {
        elfFixtureUtil.loadFixture('fixture.html', 'test-interface.js');
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
        expect(arr.length).toBe(6);
    });

    it('shows we can get at least 8 text inputs', function() {
        var inputs = $('input:text');
        //showHtmlElements(inputs);
        expect(inputs.length).toBeGreaterThan(7);
    });

    it('shows we can get at least 2 radio inputs', function() {
        var inputs = $('input:radio');
        //elfTestUtils.showHtmlElements(inputs);
        expect(inputs.length).toBeGreaterThan(1);
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

    it('shows we have a div with an id of dataSource', function() {
        var dataSource = $('#dataSource');
        // console.log('length:', dataSource.length);
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of localData', function() {
        var dataSource = $('#dataSource #localData');
        // console.log('length:', dataSource.length);
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of cloudData', function() {
        var dataSource = $('#dataSource #cloudData');
        // console.log('length:', dataSource.length);
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });
});
