/**
 * Created by charlie on 12/1/15.
 */

describe('Test Movement', function() {

    'use strict';

    beforeEach(function() {
        elfLog.setLevel(elfLog.logLevelSilent);
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('bitly.html');
    });

    beforeEach(function() {
        spyOn($, 'getJSON').and.callFake(function(url, success) {
            success(bitlyLinks);
            return {
                fail: function() {}
            };
        });
    });

    it('expects a button with an id of #leftButton', function() {
        var button = document.getElementById('leftButton');
        var id = $(button).attr('id');
        expect(id).toBe('leftButton');
    });

    it('expects a button with an id of #rightButton', function() {
        var button = document.getElementById('rightButton');
        var id = $(button).attr('id');
        expect(id).toBe('rightButton');
    });

    it('shows that elfMovement.left is called when selecting left button', function() {
        spyOn(elfMovement, 'left');
        spyOn(elfMovement, 'right');
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        $('#leftButton').trigger('click');
        expect(elfMovement.left).toHaveBeenCalled();
        expect(elfMovement.right).not.toHaveBeenCalled();
    });

    it('shows that elfMovement.right is called when selecting right button', function() {
        spyOn(elfMovement, 'left');
        spyOn(elfMovement, 'right');
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        $('#rightButton').trigger('click');
        expect(elfMovement.left).not.toHaveBeenCalled();
        expect(elfMovement.right).toHaveBeenCalled();
    });

    it('shows that elfDisplay.render is not called when selecting only left button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'render');
        $('#leftButton').trigger('click');
        expect(elfDisplay.render).not.toHaveBeenCalled();
    });

    it('shows that elfDisplay.render is called when selecting right then left button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        expect(elfBitly.linkIndex).toBe(0);
        spyOn(elfDisplay, 'render');
        $('#rightButton').trigger('click');
        expect(elfBitly.linkIndex).toBe(1);
        $('#leftButton').trigger('click');
        expect(elfDisplay.render).toHaveBeenCalled();
    });

    it('shows that elfDisplay.render is called when selecting right button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'render');
        $('#rightButton').trigger('click');
        expect(elfDisplay.render).toHaveBeenCalled();
    });

    it('shows that elfDisplay.showRecord is not called when selecting only left button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'showRecord');
        $('#leftButton').trigger('click');
        expect(elfDisplay.showRecord).not.toHaveBeenCalled();
    });

    it('shows that elfDisplay.showRecord is called when selecting right then left button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'showRecord');
        $('#rightButton').trigger('click');
        $('#leftButton').trigger('click');
        expect(elfDisplay.showRecord).toHaveBeenCalled();
    });

    it('shows that elfDisplay.showRecord is called when selecting right button', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'showRecord');
        $('#rightButton').trigger('click');
        expect(elfDisplay.showRecord).toHaveBeenCalled();
    });

    it('shows that elfDisplay.showRecord gets valid data', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        spyOn(elfDisplay, 'showRecord');
        var secondRecord = bitlyLinks.data.link_history[1];
        $('#rightButton').trigger('click');
        expect(elfDisplay.showRecord).toHaveBeenCalled();
        expect(elfDisplay.showRecord).toHaveBeenCalledWith(secondRecord);
    });

    it('shows that movement.right called even if we click many times past end of array', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        for (var i = 0; i < 275; i++) {
            $('#rightButton').trigger('click');
        }
        spyOn(elfMovement, 'right');
        $('#rightButton').trigger('click');
        expect(elfMovement.right).toHaveBeenCalled();
    });

    it('shows that the right boundary condition is checked', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        for (var i = 0; i < 250; i++) {
            $('#rightButton').trigger('click');
        }
        spyOn(elfDisplay, 'render');
        $('#rightButton').trigger('click');
        expect(elfDisplay.render).not.toHaveBeenCalled();
    });

    it('shows that the right boundary condition gets valid data', function() {
        elfBitly.getLinks(elfDownloads.dataTypes.dtBitly);
        var lastRecord = bitlyLinks.data.link_history[49];
        elfLog.log(elfLog.logLevelDetails, lastRecord.title);
        for (var i = 0; i < 48; i++) {
            $('#rightButton').trigger('click');
        }
        spyOn(elfDisplay, 'showRecord');
        $('#rightButton').trigger('click');
        expect(elfDisplay.showRecord).toHaveBeenCalledWith(lastRecord);
    });
});
