'use strict';

(function() {
  console.log("Immediate invocation ES5");
})();

(() => {
  console.log("Immediate invocation ES6");
})()

function addEs5(operanda, operandb) {
    return operanda + operandb;
}

const addEs6 = (operanda, operandb) => {
    return operanda + operandb;
};

const addConcise = (a, b) => a + b;

console.log(addEs5(2, 3));
console.log(addEs6(5, 7));
console.log(addConcise(12, 14));

((numbers) => {
    numbers.forEach((number) => {
        console.log(number);
    });
})(['one', 'two', 'three']);

((numbers) => {
    for (let number of numbers) {
        console.log(number);
    }
})(['four', 'five', 'six']);

const logger = (numbers) => {
    numbers.forEach((number) => {
        console.log(number);
    });
};

const loggerForOf = (numbers) => {
    for(let number of numbers) {
        console.log(number);
    }
};

const myObject = { first: 'alpha', last: 'omega' };

const loggerForIn = (myObject) => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property);
        }
    }
};

logger(['four', 'five', 'six']);
loggerForOf(['seven', 'eight', 'nine']);
loggerForIn(myObject);

class Person {
  constructor(first, last) {
     this.first = first;
     this.last = last;
  }

  fullName() {
     return this.first + ' ' + this.last;
  }

  getLast = () => this.last;
}

var person = new Person('George', 'Washington');
console.log(person.fullName());
console.log(person.getLast());
