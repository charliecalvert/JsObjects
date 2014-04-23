var myObject = {
    myProperty01: 12,
    myProperty02: 4,
    addProperties: function() {
        'use strict';
        return this.myProperty01 + this.myProperty02;
    },
    multiplyProperties: function() {
        'use strict';
        return this.myProperty01 * this.myProperty02;
    }
};

console.log(myObject.multiplyProperties());
