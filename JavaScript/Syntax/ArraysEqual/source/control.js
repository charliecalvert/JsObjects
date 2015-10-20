function removeEvens(numbers) { 'use strict';
    return numbers.filter(function(number) {
       return number % 2 !== 0;
    });
}
