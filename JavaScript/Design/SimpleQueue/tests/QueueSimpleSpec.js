/**
 * @author Charlie Calvert
 */

describe("A Queue Simple Suite", function() {
    'use strict';

    var simpleQueue = null;

    beforeEach(function() {
        simpleQueue = new SimpleQueue();
    });

    function loadDefaultValues() {
        simpleQueue.enqueue('Alpha');
        simpleQueue.enqueue('Bravo');
        simpleQueue.enqueue('Charlie');
        simpleQueue.enqueue('Echo');
        simpleQueue.enqueue('Delta');
    }

    it("contains a spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("Tests simple queue", function() {
        var simpleQueue = new SimpleQueue();
        simpleQueue.enqueue('Alpha');
        var value = simpleQueue.dequeue();
        expect(value).toBe("Alpha");
    });

    it("tests loadDefaults", function() {
        loadDefaultValues();
        var len = simpleQueue.length;
        for (var i = 0; i < len; i++) {
            simpleQueue.dequeue();
        }
        expect(simpleQueue.empty()).toBe(true);
    });

    it("tests loadDefaults more carefully", function() {
        loadDefaultValues();
        var value = simpleQueue.dequeue();
        expect(value).toBe("Alpha");
        value = simpleQueue.dequeue();
        expect(value).toBe("Bravo");
        value = simpleQueue.dequeue();
        expect(value).toBe("Charlie");
        value = simpleQueue.dequeue();
        expect(value).toBe("Echo");
        value = simpleQueue.dequeue();
        expect(value).toBe("Delta");
        expect(simpleQueue.empty()).toBe(true);
    });

    it("proves that front returns Alpha.", function() {
        loadDefaultValues();
        var len = simpleQueue.length;
        var value = simpleQueue.front;
        expect(value).toBe('Alpha');
        expect(simpleQueue.length).toBe(len);
    });

});
