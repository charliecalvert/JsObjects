function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const numberChecker = (input) => {
    "use strict";
    return new Promise((resolve, reject) => {
        if (isNumeric(input)) {
            resolve(input)
        } else {
            reject('Reject because not a number: ' + input)
        }
    });
};

const largerThanZero = (input) => {
    return new Promise((resolve, reject) => {
        if (input >= 0) {
            resolve(input);
        } else {
            reject('Reject because number is smaller than 0: ' + input);
        }
    });
};

const lessThan100 = (input) => {
    return new Promise((resolve, reject) => {
        if (input <= 100) {
            resolve(input);
        } else {
            reject('Reject because number is larger than 100: ' + input);
        }
    });
};


const check = (value) => {
    numberChecker(value)
        .then(largerThanZero)
        .then(lessThan100)
        .then((output) => {
            "use strict";
            console.log('Accepted:', output);
        })
        .catch((error) => {
            console.log(error);
        });

};

check('Foo');
check(-1);
check(5);
check(102);

