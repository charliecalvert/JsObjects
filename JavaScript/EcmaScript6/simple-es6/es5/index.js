'use strict';

/* Two ways to write the same code */

(function (numbers) {
  numbers.forEach(function (number) {
    console.log(number);
  });
})(['one', 'two', 'three']);

var logger = function logger(numbers) {
  numbers.forEach(function (number) {
    console.log(number);
  });
};

var numbers = ['four', 'five', 'six'];
logger(numbers);