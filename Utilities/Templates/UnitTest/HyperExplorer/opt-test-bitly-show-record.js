/**
 * Created by charlie on 12/10/15.
 */

describe('Bitly Show Record Suite', function() {

    'use strict';

    var results = [];

    var sampleRecord = {
        'keyword_link': 'http://bit.ly/JasmineSpec',
        'archived': false,
        'user_ts': 1419783766,
        'title': 'Jasmine - Google Slides',
        'created_at': 1419783766,
        'tags': [],
        'modified_at': 1419783795,
        'campaign_ids': [],
        'private': false,
        'aggregate_link': 'http://bit.ly/1AXleS1',
        'long_url': 'https://docs.google.com/presentation/d/15dL4L65Sjz3_oqIs/edit#slide=id.p',
        'client_id': '298b336871d6aa29e06b3033269f21ced9717625',
        'link': 'http://bit.ly/1AXleS0'
    };

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('bitly.html');
    });

    beforeEach(function() {

        var ids = [
            'keywordLink', 'linkTitle', 'aggregateLink', 'longUrl',
            'clientId', 'link', 'userTs', 'createdAt', 'modifiedAt'
        ];

        elfDisplay.showRecord(sampleRecord);

        var keywordLink = $('#keywordLink').val();
        for (var i = 0; i < ids.length; i++) {
            var value = $('#' + ids[i]).val();
            // console.log(value);
            results.push(value);
        }
    });

    it('shows we can get the attributes of keywordLink', function() {
        var klink = $('#keywordLink');
        var name = $(klink).attr('name');
        expect(name).toBe('keywordLink');
    });

    it('shows we can find an element with an id of linkTitle', function() {
        var idName = 'linkTitle';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of aggregateLink', function() {
        var idName = 'aggregateLink';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of longUrl', function() {
        var idName = 'longUrl';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of clientId', function() {
        var idName = 'clientId';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of link', function() {
        var idName = 'link';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of userTs', function() {
        var idName = 'userTs';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of createdAt', function() {
        var idName = 'createdAt';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can find an element with an id of modifiedAt', function() {
        var idName = 'modifiedAt';
        var element = document.getElementById(idName);
        var name = $(element).attr('name');
        expect(name).toBe(idName);
    });

    it('shows we can get valid keywordLink data from showRecord', function() {
        expect(results).toContain(sampleRecord.keyword_link);
    });

    it('shows we can get valid linkTitle data from showRecord', function() {
        expect(results).toContain(sampleRecord.title);
    });

    it('shows we can get valid aggregateLink data from showRecord', function() {
        expect(results).toContain(sampleRecord.aggregate_link);
    });

    it('shows we can get valid longUrl data from showRecord', function() {
        expect(results).toContain(sampleRecord.long_url);
    });

    it('shows we can get valid clientId data from showRecord', function() {
        expect(results).toContain(sampleRecord.client_id);
    });

    it('shows we can get valid link data from calling showRecord', function() {
        expect(results).toContain(sampleRecord.link);
    });

    function getDataString(dateId) {
        return new Date(dateId * 1000).toString();
    }

    it('shows we can get valid userTs date data from showRecord', function() {
        expect(results).toContain(getDataString(sampleRecord.user_ts));
    });

    it('shows we can get valid createAt date data from showRecord', function() {
        expect(results).toContain(getDataString(sampleRecord.created_at));
    });

    it('shows we can get valid modifiedAt date data from showRecord', function() {
        expect(results).toContain(getDataString(sampleRecord.modified_at));
    });

});
