
function addGridText(item, value) { 'use strict';
    var element = document.getElementById(item);
    element.innerText = value;
}

/*
function bar() { 'use strict';
    return true;
}
*/
function foo() { 'use strict';
    var a1 = [1];
    var a2 = [1];
    var result = arraysAreEqual(a1, a2);
    //bar();
    addGridText('foo', 'Arrays Equal: ' + result);
}

foo();
