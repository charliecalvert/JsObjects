//From here: http://jhusain.github.io/learnrx/

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		var result = projectionFunction(itemInArray);
		results.push(result);
  	});
	return results;
};

var result = JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
console.log(result);