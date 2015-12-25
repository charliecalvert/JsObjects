/**
 * Created by charlie on 11/14/15.
 */

describe('Test the html produced by compiling index.jade ', function() {

    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        // Create this file by running *grunt fixture*
        loadFixtures('fixture.html');
    });

    it('shows we have a div with an id of dataSource', function() {
        var dataSource = $('#dataSource');
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows that we have one DIV with an ID of displayContainer', function() {
        var displayContainer = $('#displayContainer');
        expect(displayContainer.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of localData', function() {
        var dataSource = $('#dataSource #localData');
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of bitlyData', function() {
        var dataSource = $('#dataSource #bitlyData');
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of deliciousData', function() {
        var dataSource = $('#dataSource #deliciousData');
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

    it('shows a div of dataSource has radio with id of twitterData', function() {
        var dataSource = $('#dataSource #twitterData');
        // elfTestUtils.showHtmlElements(dataSource);
        expect(dataSource.length).toBe(1);
    });

});
