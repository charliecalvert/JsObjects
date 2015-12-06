/**
 * Created by charlie on 11/10/15.
 */

describe('Downloads Suite', function() {
    'use strict';

    var downloadKeys;

    beforeEach(function() {
        downloadKeys = Object.keys(elfDownloads);
    });

    it('expects elfDownloads to be defined', function() {
        var isDefined = typeof elfDownloads !== 'undefined';
        expect(isDefined).toBe(true);
    });

    it('Expects elfDownloads to contain Keys', function() {
        var downloadKeys = Object.keys(elfDownloads);
        expect(downloadKeys).toBeTruthy();
    });

    it('Expects elfDownloads to contain accessToken', function() {
        expect(downloadKeys.indexOf('accessToken')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain dataTypes', function() {
        expect(downloadKeys.indexOf('dataTypes')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain dataType', function() {
        expect(downloadKeys.indexOf('dataType')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads to contain dataTypeSelection', function() {
        expect(downloadKeys.indexOf('dataTypeSelection')).toBeGreaterThan(-1);
    });

    it('Shows that elfDownloads.getBitlyData has been renamed', function() {
        expect(elfDownloads.getBitlyData).not.toBeDefined();
    });

    it('Expects elfDownloads to contain getLinkData (but not getBitlyData)', function() {
        expect(downloadKeys.indexOf('getLinkData')).toBeGreaterThan(-1);
        expect(downloadKeys.indexOf('getBitlyData')).toBe(-1);
    });

    it('Expects elfDownloads to contain clearControls', function() {
        expect(downloadKeys.indexOf('clearControls')).toBeGreaterThan(-1);
    });

    it('Expects elfDownloads.dataTypes to be defined', function() {
        expect(elfDownloads.dataTypes).toBeTruthy();
    });

    it('Expects elfDownloads.dataTypes to be an object', function() {
        expect(elfDownloads.dataTypes instanceof Object).toBeTruthy();
    });

    it('Expects elfDownloads.dataTypes to contain four elements', function() {
        var keys = Object.keys(elfDownloads.dataTypes);
        expect(keys.length).toBe(4);
    });

    it('shows that our datatypes have four options', function() {
        var linkTypes = elfTestUtils.getObjectPropertyNamesArray(elfDownloads.dataTypes);
        //var linkTypes = Object.getOwnPropertyNames(elfDownloads.dataTypes).sort();
        console.log(linkTypes);
        expect(linkTypes.length).toBeGreaterThan(3);
        expect(linkTypes.indexOf('dtBitly') !== -1).toBeTruthy();
        expect(linkTypes.indexOf('dtDelicious') !== -1).toBeTruthy();
        expect(linkTypes.indexOf('dtLocal') !== -1).toBeTruthy();
        expect(linkTypes.indexOf('dtTwitter') !== -1).toBeTruthy();
    });

    it('Expects elfDownloads.dataType to be defined', function() {
        expect(elfDownloads.dataType).toBeDefined();
    });

    it('Expects elfDownloads.dataType to be of type number', function() {
        expect(typeof elfDownloads.dataType).toBe('number');
    });

    it('Shows that elfDownloads.getLinkData is a function', function() {
        expect(typeof elfDownloads.getLinkData).toBe('function');
    });

    it('Shows that elfDownloads.dataTypeSelection is a function', function() {
        expect(typeof elfDownloads.dataTypeSelection).toBe('function');
    });

    it('Shows that elfDownloads.clearControls is a function', function() {
        expect(typeof elfDownloads.clearControls).toBe('function');
    });

    it('shows that we call to get more links on last line of radio button select', function() {
        spyOn(elfDownloads, 'getLinkData');
        elfDownloads.dataTypeSelection();
        expect(elfDownloads.getLinkData).toHaveBeenCalled();
    });
});
