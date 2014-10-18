//See here: http://jhusain.github.io/learnrx/

function go() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		}
	],
	videoAndTitlePairs = [];

  newReleases.forEach(function(item) {
		var newItem = {};
	    newItem.id = item.id;
	    newItem.title = item.title;
		videoAndTitlePairs.push(newItem);
  	});
	return videoAndTitlePairs;
}
		

console.log(go());