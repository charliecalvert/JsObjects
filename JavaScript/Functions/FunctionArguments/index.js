function UserException(message) {
    'use strict';
    this.message = message;
    this.name = "UserException";
}

function add() {
    'use strict';
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        return arguments[0] * 2;
    } else {
        throw new UserException('You must pass in either one or two parameters.');
    }
}


const adder = (...fatArguments) => {
    console.log('FAT ARGUMENTS', fatArguments);
    if (fatArguments.length === 2) {
        return fatArguments[0] + fatArguments[1];
    } else if (fatArguments.length === 1) {
        return fatArguments[0] * 2;
    } else {
        throw new UserException('You must pass in either one or two parameters.');
    }
};

console.log(add(2));
console.log(add(2, 3));
try {
    console.log(add());
} catch(userException) {
    console.log(userException)
}

console.log('\n<-------------->\n<-------------->\n');

console.log(adder(2));
console.log(adder(2, 3));
try {
    console.log(adder());
} catch(userException) {
    console.log(userException)
}




