/* global describe, it */

(function () {
    'use strict';

    describe('Integraption Tests', function () {
        describe('JSON Tests', function () {

            beforeEach(function (done) {
                $('#mainArea').load('./MainCode.html', function () {
                    initialize();
                    $("#getFive").trigger('click');
                    done();
                });
            });

            it('should get 5 from our paragraph element because we clicked the Get Five button in beforeEach', function () {
                var five = $("#five").html();
                expect(five).to.equal('5');
            });

            it('should load JSON file and test contents', function (done) {
                getScientists(function (result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].firstName).to.equal('Isaac');
                    done();
                })
            });
        });
    });
})();
