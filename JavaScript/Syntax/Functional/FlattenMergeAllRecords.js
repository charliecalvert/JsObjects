Array.prototype.mergeAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		subArray.forEach(function(number) {
			results.push(number);
		});
	});
	return results;
};

/* Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		var result = projectionFunction(itemInArray);
		results.push(result);
  	});
	return results;
}; */

function go() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and mergeAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------

	return movieLists.map(function(movie) {
		return movie.videos;
	}).mergeAll().map(function(video) {
		return video.id;
	});

}

var result = go();
console.log(result);
		