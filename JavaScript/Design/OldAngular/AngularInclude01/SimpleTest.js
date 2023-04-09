/**
 * @author Charlie Calvert
 */

// Use the test in the "The Basics" section of the angular home page
describe('angularjs homepage', function() {
    'use strict';
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Margie');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Margie!');
    });
});
