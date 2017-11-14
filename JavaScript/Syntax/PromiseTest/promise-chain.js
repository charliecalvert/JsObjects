function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const numberChecker = (input) => {
    "use strict";
    return new Promise((resolve, reject) => {
        if (isNumeric(input)) {
            resolve(input)
        } else {
            reject('Not a number: ' + input)
        }
    });
};

const largerThanZero = (input) => {
    return new Promise((resolve, reject) => {
        if (input >= 0) {
            resolve(input);
        } else {
            reject('Reject Larger than 0: ' + input);
        }
    });
};

const largerThan100 = (input) => {
    return new Promise((resolve, reject) => {
        if (input <= 100) {
            resolve(input);
        } else {
            reject('Reject larger than 100: ' + input);
        }
    });
};


const check(value) {
    numberChecker(value)
        .then(largerThanZero)
        .then(largerThan100)
        .then((output) => {
            "use strict";
            console.log(output);
        })
        .catch((error) => {
            console.log(error);
        });

}

check('Foo');
check(-1);
check(5);
check(102);

