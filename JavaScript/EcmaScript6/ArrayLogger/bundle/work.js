'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    console.log("Immediate invocation ES5");
})();

(function () {
    console.log("Immediate invocation ES6");
})();

function addEs5(operanda, operandb) {
    return operanda + operandb;
}

var addEs6 = function addEs6(operanda, operandb) {
    return operanda + operandb;
};

var addConcise = function addConcise(a, b) {
    return a + b;
};

console.log(addEs5(2, 3));
console.log(addEs6(5, 7));
console.log(addConcise(12, 14));

(function (numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
})(['one', 'two', 'three']);

(function (numbers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var number = _step.value;

            console.log(number);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})(['four', 'five', 'six']);

var logger = function logger(numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
};

var loggerForOf = function loggerForOf(numbers) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = numbers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var number = _step2.value;

            console.log(number);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

var myObject = { first: 'alpha', last: 'omega' };

var loggerForIn = function loggerForIn(myObject) {
    for (var property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property);
        }
    }
};

logger(['four', 'five', 'six']);
loggerForOf(['seven', 'eight', 'nine']);
loggerForIn(myObject);

var Person = function () {
    function Person(first, last) {
        var _this = this;

        _classCallCheck(this, Person);

        this.getLast = function () {
            return _this.last;
        };

        this.first = first;
        this.last = last;
    }

    _createClass(Person, [{
        key: "fullName",
        value: function fullName() {
            return this.first + ' ' + this.last;
        }
    }]);

    return Person;
}();

var person = new Person('George', 'Washington');
console.log(person.fullName());
console.log(person.getLast());

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: "info",
        get: function get() {
            return 2;
        }
    }]);

    return Foo;
}();

var Bar = function () {
    function Bar() {
        _classCallCheck(this, Bar);
    }

    _createClass(Bar, [{
        key: "info",
        get: function get() {
            return 3;
        }
    }]);

    return Bar;
}();

var foo = new Foo();
var bar = new Bar();

console.log(foo.info);
console.log(bar.info);