//From here: http://jhusain.github.io/learnrx/

/* Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}
	});

	return results;
}; */

var result = [1,2,3].filter(function(x) { 
	return x > 2
});

console.log(result);
var testOutCome = JSON.stringify(result) === "[3]";
console.log(testOutCome);