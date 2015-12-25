/**
 * Created by charlie on 11/10/15.
 */

describe('Test ElfHyperExplorer Suite', function() {
    'use strict';

    var hyperExplorerKeys;

    beforeEach(function() {
        hyperExplorerKeys = Object.keys(elfHyperExplorer);
    });

    it('Expects there to be at least 1 properties or methods in elfHyperExplorer', function() {
        //console.log(hyperExplorerKeys);
        expect(hyperExplorerKeys.length).toBeGreaterThan(0);
    });

    it('Expects elfHyperExplorer to contain initialize', function() {
        expect(hyperExplorerKeys.indexOf('initialize')).toBeGreaterThan(-1);
    });

});
