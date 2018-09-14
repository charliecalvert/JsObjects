/*global describe, it */
'use strict';

(function () {

    'use strict';

    var chaiExpect = chai.expect;
    var elvenController, scope;

    describe('Integration Tests', function() {

        beforeEach(module('elvenApp'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            elvenController = $controller('ElvenController', {
                $scope: scope
            });
        }));

        it('should prove we loaded chai', function() {
            chaiExpect(true).to.equal(true);
            expect(true).toBe(true);
        });

        it('should get a hint', function() {
            chaiExpect(elvenController.hint.length).to.equal(8);
            expect(true).toBe(true);
        });
    });
})();
