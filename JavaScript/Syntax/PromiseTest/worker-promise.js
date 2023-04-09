const myPromise = (input) => {
	return new Promise((resolve, reject) => {
		if (input >= 2) {
			resolve(input);
		} else {
			reject('Smaller than 2');
		}
	});
}

myPromise(1)
	.then((output) => {
		console.log(output);
	})
	.catch((error) => {
		console.log(error);
	});
	
