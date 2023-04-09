/**
 * @author Charlie Calvert
 */

describe('Test Search', function() {
    'use strict';
    var ptor = protractor.getInstance();

    it('should load the home page', function() {
        browser.get('http://127.0.0.1:8020/AngularSearch/index.html');
        expect(true).toBe(true);
    });

    it('should contain six races', function() {
        var races = ptor.findElements(protractor.By.repeater('race in races'));
        expect(races).toBeTruthy();
    });

    it('should contain six races', function() {
        var races = ptor.findElements(
            protractor.By.repeater('race in races').column('race')
        );
        races.then(function(result) {
            // console.log(result);
            expect(result.length).toEqual(18);
        });
    });

    it('should contain six races', function() {
        var races = ptor.findElements(
            protractor.By.repeater('race in races').column('race')
        );
        races.then(function(result) {
            expect(result[0].getText()).toEqual('Orc');
        });
    });

    it('should contain six races', function() {
        var races = ptor.findElements(
            protractor.By.repeater('race in races').column('race')
        );
        races.then(function(result) {
            expect(result[3].getText()).toEqual('Dwarf');
        });
    });

    it('should contain six races', function() {
        var races = ptor.findElements(protractor.By.repeater('race in races'));
        races.then(function(result) {
            expect(result[3].getText()).toEqual('Elf 13 6');
        });
    });
});
