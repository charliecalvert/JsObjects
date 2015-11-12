/**
 * Created by charlie on 11/10/15.
 */

describe('Test Jade', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
    });

    it('checks that we can run tests in Test Jade', function() {
        //expect(true).toBeTruthy();
        var foo = $('#foo');
        //console.log(jasmine.getFixtures().fixturesPath);
        //expect(foo).toBeEmpty();
    });

    it('shows we can load a fixture with jasmine-jquery now', function() {
        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('temp01.html');
        var foo = $('#my_fixture').html();
        console.log(foo);
        expect($('#my-fixture')).toBeTruthy();
    });

    it('shows we can load fixture temp01.html with jasmine-jquery', function() {
        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('temp01.html');
        var foo = $('#bar01').html();
        console.log(foo);
        expect(foo).toBe('foo1');
    });

    it('shows we can load a fixture temp.html with jasmine-jquery', function() {
        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('temp.html');
        var test01 = $('#test01');
        expect(test01).toBeEmpty();
    });

    it('shows we can load fixture test02', function() {
        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('temp.html');
        var test01 = $('#test02').html();
        expect(test01).toBe('test02');
    });

    it('shows we can get the attributes of keywordLink from dest.html', function() {
        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('dest.html');
        var klink = $('#keywordLink');
        var name = $(klink).attr('name');

        expect(name).toBe('keywordLink');
    });

    it('shows we can get all the attributes of keywordLink from dest.html', function() {
        var el;
        var arr = [];

        jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        loadFixtures('dest.html');

        el = document.getElementById('keywordLink');
        var atts = el.attributes;
        var n = atts.length;

        for (var i = 0; i < n; i++) {
            arr.push(atts[i].nodeName);
        }
        console.log(arr);
        $.each(arr, function(index, value) {
            console.log(value + ': ' + $(el).attr(value));
        });
        expect(arr.length).toBe(6);
    });

    /*
    it('shows we can load a fixture with html2js', function() {
        //jasmine.getFixtures().fixturesPath = '/base/spec/javascripts/fixtures/';
        //console.log(jasmine.getFixtures().fixturesPath);
        var foo = window.__html__;
        setFixtures(foo['base/javascripts/fixtures/temp.html']);
        // $('#my-fixture').myTestedPlugin();
        expect($('#my-fixture')).toBeTruthy();
        var elfDiv = $('#test01');
        console.log(elfDiv);
        expect(elfDiv).toBeEmpty();
    });


    it('shows we can load a fixture', function() {
        var foo = window.__html__;
        console.log(typeof foo);
        console.log(Object.keys(foo));
        console.log(foo['base/javascripts/fixtures/temp.html']);
    }); */

});
