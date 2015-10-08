/**
 * Created by charlie on 10/7/15.
 */

describe("Elvenware Simple Plain Suite", function() {

    'use strict';

    it("expects true to be true", function() {
        expect(true).toBe(true);
    });

});

describe("Elvenware Object Number Suite", function () {

    'use strict';



    it("Call a function in getNumber that returns 9", function () {
        expect(getNine()).toBe(9);
    });


    it("Test that we can parse the value expected to be returned from getJSON call", function() {
        var response = {nine: 10};
        bar.parseSimpleJson(response);
        expect(bar.value).toBe(10);
    });

    it("tests ajax call", function() {
        spyOn($, 'ajax').and.callFake(function (methods) {
            methods.success({"nine": 9});
        });
        bar.getAjaxServerNine();
        expect(bar.value).toBe(9);
    });

    it("tests getJSON call", function() {
        spyOn($, 'getJSON').and.callFake(function (url, success) {
            success({"nine": 9});
        });
        bar.getJsonServerNine();
        expect(bar.value).toBe(9);
    });
});

