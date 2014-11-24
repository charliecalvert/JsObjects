
/**
 *  Map is built into JavaScript, but here is how it looks.
 */
Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		var result = projectionFunction(itemInArray);
		results.push(result);
  	});
	return results;
};

var dataMap = ['A','B','C'].map(function(x)	{ 
	return String.fromCharCode(x.charCodeAt() + 1); 
});

var stringResult = JSON.stringify(dataMap)
console.log(stringResult);

// Verify our results
var result = stringResult === '["B","C","D"]'
console.log(result);