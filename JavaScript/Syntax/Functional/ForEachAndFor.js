function iterate(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}
}

function iterate2(myArray) {
	myArray.forEach(function(item) {
		console.log(item);
	});
}

var myArray = [1,2,3,4,5];

iterate(myArray);
iterate2(myArray);
