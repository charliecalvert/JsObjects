Array.prototype.mergeAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		subArray.forEach(function(number) {
			results.push(number);
		});
	});
	return results;
};

var result = JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].mergeAll());
console.log(result);
console.log(result === "[1,2,3,4,5,6,7,8,9]");
// [1,2,3].mergeAll(); // throws an error because this is a one-dimensional array