'use strict';

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Person = function() {
    function Person(first, last) {
        _classCallCheck(this, Person);

        this.first = first;
        this.last = last;
    }

    _createClass(Person, [{
        key: 'fullName',
        value: function fullName() {
            return this.first + ' ' + this.last;
        }
    }]);

    return Person;
}();

var person = new Person('George', 'Washington');
console.log(person.fullName());