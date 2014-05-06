#Callback Basics 02

We declare a standard function:

	function returnTwo() {
		'use strict';
		return 2;
	}

Then we declare a function that takes a function as a parameter:

	function passFunc(func) {
		'use strict';
		return func();
	}

Finally, we pass the first function to the second:

	var result = passFunc(returnTwo);

This call sets result to 2. Here is what happens:

- We call passFunc
- We pass it **returnTwo** as a parameter
- **passFunc** calls **returnTwo**
- **returnTwo** returns 2
- The value returned by passFunc is assigned to result.

In the end, the variable called **result** is set to 2.
