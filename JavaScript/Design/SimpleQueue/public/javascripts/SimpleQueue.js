// Inspiration: http://stackoverflow.com/a/1590262/253576

var simpleQueue = [];
simpleQueue.push(2);         // queue is now [2]
simpleQueue.push(5);         // queue is now [2, 5]
var i = simpleQueue.shift(); // queue is now [5]
console.log(i);              // displays 2