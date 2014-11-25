Array.prototype.mergeAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		subArray.forEach(function(number) {
			results.push(number);
		});
	});
	return results;
};

/*
 * Array.prototype.map = function(projectionFunction) { var results = [];
 * this.forEach(function(itemInArray) { var result =
 * projectionFunction(itemInArray); results.push(result); }); return results; };
 */

function go() {
	var movieLists = [ {
		name : "New Releases",
		videos : [ {
			"presidentName" : "George Washington",
			"termStart" : "1789",
			"termEnd" : "1797",
			"born" : "1732",
			"died" : "1799"
		}, {
			"presidentName" : "John Adams",
			"termStart" : "1797",
			"termEnd" : "1801",
			"born" : "1735",
			"died" : "1826"
		}, {
			"presidentName" : "Thomas Jefferson",
			"termStart" : "1801",
			"termEnd" : "1809",
			"born" : "1743",
			"died" : "1826"
		} ]
	}, {
		name : "Dramas",
		videos : [ {
			"presidentName" : "James Madison",
			"termStart" : "1809",
			"termEnd" : "1817",
			"born" : "1751",
			"died" : "1836"
		}, {
			"presidentName" : "James Monroe",
			"termStart" : "1817",
			"termEnd" : "1825",
			"born" : "1758",
			"died" : "1831"
		}, {
			"presidentName" : "John Quincy Adams",
			"termStart" : "1825",
			"termEnd" : "1829",
			"born" : "1767",
			"died" : "1848"
		} ]
	} ];

	return movieLists.map(function(movie) {
		return movie.videos;
	}).mergeAll().map(function(video) {
		return { "name": video.presidentName, "born": video.born };
	});

}

var result = go();
console.log(result);
