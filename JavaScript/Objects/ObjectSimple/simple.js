var myObject01 = {
    firstName: "Susan",
    lastName: "Smith"
};

var myObject02 = {
    firstName: "Susan",
    lastName: "Smith",
    fullName: function() {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

var myObject03 = {
    a: 1,
    b: 2,
    c: 'three',
    addMe: function() {
        'use strict';
        return this.a + this.b;
    }
};

var myObject04 = {
    a: 1,
    b: 2,
    c: 'three',
};

myObject04.addMe = function() {
    'use strict';
    return this.a + this.b;
}

console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());
console.log(myObject03.addMe());
console.log(myObject04.addMe());
