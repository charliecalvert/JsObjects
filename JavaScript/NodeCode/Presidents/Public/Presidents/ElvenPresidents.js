/**
 * @author Charlie
 */

/*global ELF:true*/

ELF.President = (function() {
    'use strict';

    function President() {}

    Object.defineProperty(President, "PresidentName", {
        get: function() {
            return this.presidentName;
        },
        set: function(value) {
            this.presidentName = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(President, "TermStart", {
        get: function() {
            return this.termStart;
        },
        set: function(value) {
            this.termStart = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(President, "TermEnd", {
        get: function() {
            return this.termEnd;
        },
        set: function(value) {
            this.termEnd = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(President, "Born", {
        get: function() {
            return this.born;
        },
        set: function(value) {
            this.born = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(President, "Died", {
        get: function() {
            return this.died;
        },
        set: function(value) {
            this.died = value;
        },
        enumerable: true,
        configurable: true
    });

    President.prototype.init = function(initName, initStart, initEnd, initBorn, initDied) {
        this.PresidentName = initName;
        this.TermStart = initStart;
        this.TermEnd = initEnd;
        this.Born = initBorn;
        this.Died = initDied;
    };

    return President;
})();
