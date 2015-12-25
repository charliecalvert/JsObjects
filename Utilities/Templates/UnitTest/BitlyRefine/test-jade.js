/**
 * Created by charlie on 11/10/15.
 */

describe('Test Jasmine-JQuery Fixture Loading', function() {
    'use strict';

    beforeEach(function() {
        elfFixtureUtil.loadFixture('fixture.html', 'test-jade');
    });

    it('checks that we can run tests in Test Jade', function() {
        var checkBoxPrivate = document.getElementById('checkBoxPrivate');
        var name = $(checkBoxPrivate).attr('name');
        var id = $(checkBoxPrivate).attr('id');
        var type = $(checkBoxPrivate).attr('type');
        expect(type).toBe('checkbox');
        expect(name).toBe('checkBoxPrivate');
    });

    it('shows we can get the attributes of keywordLink from fixture.html', function() {
        var klink = $('#keywordLink');
        var name = $(klink).attr('name');
        expect(name).toBe('keywordLink');
    });

    /*
    it('shows we can get all the attributes of keywordLink from fixture.html', function() {
        var el = document.getElementById('keywordLink');
        var attributes = el.attributes;
        console.log(attributes);
        var props = Object.keys(attributes);
        expect(props.length).toBe(7);
        for (var i = 0; i < attributes.length; i++) {
            console.log(attributes[i]);
        }
        var placeholder = $(el).attr('placeholder');
        expect(placeholder).toBe('keywordLink');


    }); */

    /*
    it('shows we can load a fixture', function() {
        var foo = window.__html__;
        console.log(typeof foo);
        console.log(Object.keys(foo));
        console.log(foo['base/javascripts/fixtures/temp.html']);
    }); */

});
