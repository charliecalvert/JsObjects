/**
 * Created by charlie on 12/1/15.
 */

describe('Test Twitter Fixture Timeline Suite', function() {

    'use strict';

    beforeEach(function() {
        elfLog.setLevel(elfLog.logLevelSilent);
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('twitter.html');
    });

    beforeEach(function() {
        spyOn($, 'getJSON').and.callFake(function(url, params, success) {
            success(tweetsTimeline);
            return {
                fail: function() {}
            };
        });
    });

    it('expects clicking getTimeLine button to call appendUrl', function() {
        var searchButton = document.getElementById('getTimeline');
        elfTwitter.twitterSetup();
        spyOn(elfTwitter, 'appendUrl');
        $(searchButton).trigger('click');
        expect(elfTwitter.appendUrl).toHaveBeenCalled();
    });

    it('expects clicking getTimeLine button to call renderTable', function() {
        var searchButton = document.getElementById('getTimeline');
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
