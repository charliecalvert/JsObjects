/**
 * Created by charlie on 12/1/15.
 */

describe('Test Twitter Fixture Search Suite', function() {

    'use strict';

    beforeEach(function() {
        elfLog.setLevel(elfLog.logLevelSilent);
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('twitter.html');
    });

    beforeEach(function() {
        /* spyOn($, 'getJSON').and.callFake(function (url, params, success) {
            success(tweets);
            return {
                done: function () {
                    return {
                        fail: function () {
                            return {
                                always: function () {
                                }
                            };
                        }
                    };
                }
            };
        }); */

        spyOn($, 'getJSON').and.callFake(function(url, params, success) {
            success(tweets);
            return {
                fail: function() {}
            };
        });
    });

    it('expects a input with an id of #searchQuery', function() {
        var input = document.getElementById('searchQuery');
        var id = $(input).attr('id');
        expect(id).toBe('searchQuery');
    });

    it('expects an input with an id of #searchQuery to be a text input', function() {
        var input = document.getElementById('searchQuery');
        var id = $(input).attr('type');
        expect(id).toBe('text');
    });

    it('expects an input with an id of #timelineQuery', function() {
        var input = document.getElementById('timelineQuery');
        var id = $(input).attr('id');
        expect(id).toBe('timelineQuery');
    });

    it('expects an input with an id of #timelineQuery to be a text input', function() {
        var input = document.getElementById('timelineQuery');
        var id = $(input).attr('type');
        expect(id).toBe('text');
    });

    it('expects a button with an id of #search', function() {
        var button = document.getElementById('search');
        var id = $(button).attr('id');
        expect(id).toBe('search');
    });

    it('expects a button with an id of #search to be a button', function() {
        var button = document.getElementById('search');
        var id = $(button).attr('type');
        expect(id).toBe('button');
    });

    it('expects a button with an id of #getTimeline', function() {
        var button = document.getElementById('getTimeline');
        var id = $(button).attr('id');
        expect(id).toBe('getTimeline');
    });

    it('expects a button with an id of #getTimeline to be a button', function() {
        var button = document.getElementById('getTimeline');
        var id = $(button).attr('type');
        expect(id).toBe('button');
    });

    it('expects clicking search button to call appendUrl', function() {
        var searchButton = document.getElementById('search');
        elfTwitter.twitterSetup();
        spyOn(elfTwitter, 'appendUrl');
        $(searchButton).trigger('click');
        expect(elfTwitter.appendUrl).toHaveBeenCalled();
    });

    it('expects clicking search button to call renderTable', function() {
        var searchButton = document.getElementById('search');
        elfTwitter.twitterSetup();
        spyOn(elfTwitter, 'renderTable');
        $(searchButton).trigger('click');
        expect(elfTwitter.renderTable).toHaveBeenCalled();
    });

    /*
    it('expects selecting #chBootstrap to cause callDelicious to be called', function() {
        elfDelicious.deliciousSetup();
        var checkBox = document.getElementById('chBootstrap');
        spyOn(elfDelicious, 'callDelicious');
        $(checkBox).trigger('click');
        expect(elfDelicious.callDelicious).toHaveBeenCalled();
    });

    it('expects selecting #chBootstrap to cause callDelicious to be called with bootstrap', function() {
        elfDelicious.deliciousSetup();
        var checkBox = document.getElementById('chBootstrap');
        spyOn(elfDelicious, 'callDelicious');
        $(checkBox).trigger('click');
        expect(elfDelicious.callDelicious).toHaveBeenCalledWith('bootstrap');
    });

    it('expects selecting #chJavaScript to cause callDelicious to be called with javascript', function() {
        elfDelicious.deliciousSetup();
        var checkBox = document.getElementById('chJavaScript');
        spyOn(elfDelicious, 'callDelicious');
        $(checkBox).trigger('click');
        expect(elfDelicious.callDelicious).toHaveBeenCalledWith('javascript');
    });

    it('expects selecting #chNodeJs to cause callDelicious to be called with nodejs', function() {
        elfDelicious.deliciousSetup();
        var checkBox = document.getElementById('chNodeJs');
        spyOn(elfDelicious, 'callDelicious');
        $(checkBox).trigger('click');
        expect(elfDelicious.callDelicious).toHaveBeenCalledWith('nodejs');
    });

    it('selecting #chNodeJs & #chJavaScript to cause callDelicious to be called with javascript+nodejs', function() {
        elfDelicious.deliciousSetup();
        var checkBoxNode = document.getElementById('chNodeJs');
        var checkBoxJavaScript = document.getElementById('chJavaScript');
        spyOn(elfDelicious, 'callDelicious');
        $(checkBoxNode).trigger('click');
        $(checkBoxJavaScript).trigger('click');
        expect(elfDelicious.callDelicious).toHaveBeenCalledWith('javascript+nodejs');
    }); */
});
