/**
 * Created by charlie on 10/7/15.
 */

describe('Test Span Directive Suite', function() {

    'use strict';

    var $compile;
    var scope;
    var $templateCache;

    beforeEach(module('elfApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        scope = _$rootScope_.$new();
        // spanDirective = getSpanDirective();
    }));

    function getSpanDirective() {
        var element = angular.element('<div span-directive></div>');
        var compiledElement = $compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('Span directive should have span element with specific text', function() {
        var spanDirective = getSpanDirective();
        var spanElement = spanDirective.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('There is a span in this directive.');
    });

});
