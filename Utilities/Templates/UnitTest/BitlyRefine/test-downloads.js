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

    it('Expects elfDownloads to contain getBitlyData', function() {
        expect(downloadKeys.indexOf('getBitlyData')).toBeGreaterThan(-1);
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

    it('Expects elfDownloads.dataTypes to contain two elements', function() {
        var keys = Object.keys(elfDownloads.dataTypes);
        expect(keys.length).toBe(2);
    });

    it('Expects elfDownloads.dataType to be of type string', function() {
        expect(typeof elfDownloads.dataType).toBe('number');
    });

    it('Shows that elfDownloads.getBitlyData is a function', function() {
        expect(typeof elfDownloads.getBitlyData).toBe('function');
    });

    it('Shows that elfDownloads.dataTypeSelection is a function', function() {
        expect(typeof elfDownloads.dataTypeSelection).toBe('function');
    });

    it('Shows that elfDownloads.clearControls is a function', function() {
        expect(typeof elfDownloads.clearControls).toBe('function');
    });

});

