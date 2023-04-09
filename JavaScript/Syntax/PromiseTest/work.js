// Define a pure function
const add1 = val => val + 1;
// Show that it is a function
console.log(add1);
// Call the function
console.log(add1(3));

const objToArray = ({ a }) => [a];﻿
console.log(objToArray);
console.log(objToArray({a:5}));

const arrayToObj = ([a,two,c,d]) => ({a,two,c,d});
console.log(arrayToObj([25,12,6]));

function arrayToObject([a,two,c,d]) {
    return {a, two, c, d};
}
console.log(arrayToObject([25,12,6,3]));
