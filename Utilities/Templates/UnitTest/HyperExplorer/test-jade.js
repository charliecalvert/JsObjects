/**
 * Created by charlie on 11/10/15.
 */

/*
 * To create bitly.html and place it in the right location:
 *
 *      jade views/bitly.jade --out spec/fixtures/
 *
 */
describe('Test Jade', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('bitly.html');
    });

    it('shows we can get the attributes of keywordLink from bitly.html', function() {
        var klink = $('#keywordLink');
        var name = $(klink).attr('name');
        expect(name).toBe('keywordLink');
    });

    it('shows we can get all the attributes of keywordLink from bitly.html', function() {
        var el = document.getElementById('keywordLink');
        var atts = el.attributes;
        var n = atts.length;
        var arr = [];

        for (var i = 0; i < n; i++) {
            arr.push(atts[i].nodeName);
        }

        if (false) {
            console.log(arr);
            $.each(arr, function(index, value) {
                console.log(value + ': ' + $(el).attr(value));
            });
        }
        expect(arr.length).toBeGreaterThan(3);
    });

});
