function removeEvens(numbers) { 'use strict';
    return numbers.filter(function(number) {
       return number % 2 !== 0;
    });
}

function addGridText(item, value) { 'use strict';
    var element = document.getElementById(item);
    element.innerText = value;
}

function foo() { 'use strict';
    var a1 = [1];
    var a2 = [1];
    var result = arraysAreEqual(a1, a2);
    addGridText('foo', 'Arrays Equal');
}

foo();