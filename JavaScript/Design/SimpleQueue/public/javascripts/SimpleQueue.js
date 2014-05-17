var SimpleQueue = (function() {
    'use strict';

    var dataStore = null;

    function SimpleQueue() {
        dataStore = [];

        Object.defineProperty(this, "length", {
            get: function() {
                return dataStore.length;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(this, "back", {
            get: function() {
                if (this.empty()) {
                    throw new Error("Can't call back on an empty queue.");
                } else {
                    return dataStore[dataStore.length - 1];
                }
            },
            enumerable: true,
            configurable: false
        });

        Object.defineProperty(this, "front", {
            get: function() {
                return dataStore[0];
            },
            enumerable: true,
            configurable: false
        });
    }

    SimpleQueue.prototype.backFunc = function() {
        return this.back;
    };

    SimpleQueue.prototype.dequeue = function() {
        return dataStore.shift();
    };

    SimpleQueue.prototype.empty = function() {
        return dataStore.length === 0;
    };

    SimpleQueue.prototype.enqueue = function(value) {
        dataStore.push(value);
    };

    SimpleQueue.prototype.frontFunc = function() {
        return this.front;
    };

    SimpleQueue.prototype.addDefaultItems = function() {
        this.enqueue("Alpha");
        this.enqueue("Bravo");
        this.enqueue("Charlie");
        this.enqueue("Delta");
        this.enqueue("Echo");
        this.enqueue("Foxtrot");
        this.enqueue("Golf");
        this.enqueue("Hotel");
        this.enqueue("India");
        this.enqueue("Juliet");
        this.enqueue("Kilo");
        this.enqueue("Lima");
        this.enqueue("Mike");
        this.enqueue("November");
        this.enqueue("Oscar");
        this.enqueue("Papa");
        this.enqueue("Quebec");
        this.enqueue("Romeo");
        this.enqueue("Sierra");
        this.enqueue("Tango");
        this.enqueue("Uniform");
        this.enqueue("Victory");
        this.enqueue("Whiskey");
        this.enqueue("Xray");
        this.enqueue("Yankee");
        this.enqueue("Zulu");
    };

    return SimpleQueue;

}());
