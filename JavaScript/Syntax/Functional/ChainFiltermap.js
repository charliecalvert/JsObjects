//From here: http://jhusain.github.io/learnrx/

/* 
Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		var result = projectionFunction(itemInArray);
		results.push(result);
  	});
	return results;
};

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}
	});
	return results;
}; 
*/

function go() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id:432534, time:65876586 }]
		}
	];

	

	return newReleases.filter(function(item) {
		return item.rating === 5.0;
	}).map(function(item) {
		return { id: item.id };
	}); 
}

console.log(go());