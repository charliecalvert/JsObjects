//From here: http://jhusain.github.io/learnrx/

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {

		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
		// ------------ INSERT CODE HERE! ----------------------------
			var result = projectionFunction(itemInArray);
			results.push(result);
  	});
	return results;
};

var result = JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
console.log(result);