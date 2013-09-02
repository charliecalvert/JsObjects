var app = {

	isEven: function(input) {
		if (input % 2 === 0) {
			console.log('Your input of ' + input + ' is even');
		} else {
			console.log('Your input of ' + input + ' is odd');
		}
	}
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);