/*global describe, it */
'use strict';

(function () {

    'use strict';

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
            expect(true).toBe(true);
        });

        it('should get a hint', function() {
            expect(elvenController.hint.length).toBe(8);
        });
    });
})();
