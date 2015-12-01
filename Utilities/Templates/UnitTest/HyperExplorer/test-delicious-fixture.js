/**
 * Created by charlie on 12/1/15.
 */

describe('Test Delicous Fixture', function() {

    'use strict';

    beforeEach(function() {
        elfLog.setLevel(elfLog.logLevelSilent);
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('delicious.html');
    });

    beforeEach(function () {
        spyOn($, 'getJSON').and.callFake(function (url, success) {
            success(bitlyLinks);
            return {
                fail: function () {
                }
            };
        });
    });

    it('expects a checkbox with an id of #chJavaScript', function() {
        var checkBox = document.getElementById('chJavaScript');
        var id = $(checkBox).attr('id');
        expect(id).toBe('chJavaScript');
    });

    it('expects a checkbox with an id of #chJavaScript to be a checkbox', function() {
        var checkBox = document.getElementById('chJavaScript');
        var id = $(checkBox).attr('type');
        expect(id).toBe('checkbox');
    });

    it('expects a checkbox with an id of #chBootstrap', function() {
        var checkBox = document.getElementById('chBootstrap');
        var id = $(checkBox).attr('id');
        expect(id).toBe('chBootstrap');
    });

    it('expects a checkbox with an id of #chBootstrap to be a checkbox', function() {
        var checkBox = document.getElementById('chBootstrap');
        var id = $(checkBox).attr('type');
        expect(id).toBe('checkbox');
    });

    it('expects a checkbox with an id of #chNodeJs', function() {
        var checkBox = document.getElementById('chNodeJs');
        var id = $(checkBox).attr('id');
        expect(id).toBe('chNodeJs');
    });

    it('expects a checkbox with an id of #chNodeJs to be a checkbox', function() {
        var checkBox = document.getElementById('chNodeJs');
        var id = $(checkBox).attr('type');
        expect(id).toBe('checkbox');
    });

    it('expects selecting #chBootstrap to cause displayCheckBoxSelection to have been called', function() {
        var checkBox = document.getElementById('chBootstrap');
        spyOn(elfDelicious, 'displayCheckboxSelection');
        elfDelicious.deliciousSetup();
        $(checkBox).trigger('click');
        expect(elfDelicious.displayCheckboxSelection).toHaveBeenCalled();
    });

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
    });
});