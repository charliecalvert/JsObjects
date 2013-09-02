/**
 * @author Charlie Calvert
 */

var app = {
	basicForLoop : function() {
		for (var i = 0; i < 5; i++) {
			console.log(i);
		}
	},

	basicWhileLoop : function() {
		var count = 0;

		while (count < 5) {
			console.log(count++);
		}
	}
};

console.log('\nHere is the for loop:');
app.basicForLoop();

console.log('\nHere is the while loop:');
app.basicWhileLoop();
