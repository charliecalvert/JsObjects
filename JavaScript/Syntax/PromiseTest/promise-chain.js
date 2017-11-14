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


const value = 5;
/*
largerThanZero(value)
    .then((output) => {
        console.log(output);
    })
    .then(largerThan100(value)
        .then((output) => {
            console.log(output);
        })
        .catch((error) => {
            console.log(error);
        }))
    .catch((error) => {
        console.log(error);
    });
*/

/*
largerThanZero(value)
    .then(largerThan100)
    .then((output) => {
        "use strict";
        console.log(output);
    }).catch((error) => {
        console.log(error);
    });
*/


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
