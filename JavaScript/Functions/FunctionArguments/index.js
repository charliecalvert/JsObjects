function UserException(message) { 'use strict';
    this.message = message;
    this.name = "UserException";
}

function add() {  'use strict';
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        return arguments[0] * 2;
    } else {
        throw new UserException('You must pass in either one or two parameters.');
    }
}


console.log(add(2));
console.log(add(2, 3));
console.log(add());
