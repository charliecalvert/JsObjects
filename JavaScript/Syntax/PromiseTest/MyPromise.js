const foo = (bar) => {
	return new Promise((resolve, reject) => {
		if (bar >= 2) {
			resolve(2);
		} else {
			reject('Smaller than 2');
		}
	});
}


foo(1)
	.then((bar) => {
		console.log(bar);
	})
	.catch((ex) => {
		console.log(ex);
	});
	
