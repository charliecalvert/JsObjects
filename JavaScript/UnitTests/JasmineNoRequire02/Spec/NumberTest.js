describe("Number Suite", function() {

    'use strict';

    describe("Elvenware Object Number Suite", function () {

        it("Call a function in getNumber that returns 8", function () {
            expect(elf.getNumber.getEight()).toBe(8);
        });

        it("Calls a function in getNumber that returns 7", function () {
            expect(elf.getNumber.getSeven()).toBe(7);
        });

        it("confirms that getNumber is not in global name space", function() {
            expect(window.getNumber).not.toBeDefined();
        });
    });


    describe("Elvenware Function Number Suite", function () {

        it("Call a function in getNumber that returns 1", function () {
            expect(elf.getOne()).toBe(1);
        });

        it("Calls a function in getNumber that returns 2", function () {
            expect(elf.getTwo()).toBe(2);
        });

        it("confirms that getOne is not in global name space", function() {
            expect(window.getTwo).not.toBeDefined();
        });

        it("confirms that getOne is not in global name space", function() {
            expect(window.getTwo).not.toBeDefined();
        });
    });

    describe("Elvenware Module Number Suite", function () {

        var numberModule;

        beforeEach(function() {
            numberModule = new elf.NumberModule();
        });

        it("Call a module method that returns 3", function () {
            expect(numberModule.getThree()).toBe(3);
        });

        it("Calls a module method that returns 4", function () {
            expect(numberModule.getFour()).toBe(4);
        });

        it("Calls a module method that returns 5 initialized in constructor", function () {
            expect(numberModule.getFive()).toBe(5);
        });

        it("confirms that numberModule is not in global name space", function() {
            expect(window.NumberModule).not.toBeDefined();
        });

        it("confirms that elf is in global name space", function() {
            expect(window.elf).toBeDefined();
        });

    });

});