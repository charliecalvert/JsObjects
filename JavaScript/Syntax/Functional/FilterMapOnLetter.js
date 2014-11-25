
/** 
 * Filter is built into JavaScript, but here is how it looks.
 */
/*
Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}
	});

	return results;
};*/  

var result = ['A','B','C','D','E','F'].filter(function(x) { 
	return x > 'C'
});

console.log(result);
var outcome = JSON.stringify(result);
console.log(outcome);
var testOutCome = outcome === '["D","E","F"]';
console.log(testOutCome);
