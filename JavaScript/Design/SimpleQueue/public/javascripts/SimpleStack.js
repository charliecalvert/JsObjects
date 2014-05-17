var SimpleStack = (function() {
    'use strict';

    var dataStore = [];

    function SimpleStack() {
        dataStore = [];

        Object.defineProperty(this, "length", {
            get: function() {
                return dataStore.length;
            },
            enumerable: true, // We can see it
            configurable: false
            // We can't delete it
            // writable: false // We can't add writable if we use accessors like get
        });

    }

    SimpleStack.prototype.push = function(value) {
        dataStore.push(value);
    };

    SimpleStack.prototype.pop = function() {
        if (dataStore.length === 0) {
            throw new Error("Foo");
        } else {
            return dataStore.pop();
        }
    };

    var cleanString = function(value) {
        var result = Elf.Utils.stripWhiteSpace(value);
        result = Elf.Utils.stripPunctuation(result);
        return result.toLowerCase();
    };

    SimpleStack.prototype.toPopString = function() {
        var result = '';
        while (dataStore.length > 0) {
            result += dataStore.pop();
        }
        return result;
    };

    SimpleStack.prototype.isPalindrome = function(value) {
        value = cleanString(value);
        for (var i = 0; i < value.length; i++) {
            dataStore.push(value[i]);
        }
        var result = this.toPopString();
        console.log('palindrome = ', value, result);
        return (result === value);
    };

    SimpleStack.prototype.removeItem = function(itemToRemove) {
        var index = dataStore.indexOf(itemToRemove);
        dataStore.splice(index, 1);
        return dataStore;
    };

    SimpleStack.prototype.addDefaultItems = function() {
        this.push("Alpha");
        this.push("Bravo");
        this.push("Charlie");
        this.push("Delta");
        this.push("Echo");
        this.push("Foxtrot");
        this.push("Golf");
        this.push("Hotel");
        this.push("India");
        this.push("Juliet");
        this.push("Kilo");
        this.push("Lima");
        this.push("Mike");
        this.push("November");
        this.push("Oscar");
        this.push("Papa");
        this.push("Quebec");
        this.push("Romeo");
        this.push("Sierra");
        this.push("Tango");
        this.push("Uniform");
        this.push("Victory");
        this.push("Whiskey");
        this.push("Xray");
        this.push("Yankee");
        this.push("Zulu");
    };

    return SimpleStack;
}());
