/**
 * @author Charlie Calvert
 */


var app = {
    basicForLoop: function() {
        'use strict';
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
    },

	forOfLoop: () => {
		const numbers = [1, 2, 3];
		for (let number of numbers) {
  		    console.log(number);
		}
	},


	forInLoop: () => {
		const numbers = { 'one': 1, 'two': 2, 'three': 3 };
		for (let number in numbers) {
			console.log(number);
		}
	},
	
    basicWhileLoop: function() {
        'use strict';
        var count = 0;

        while (count < 5) {
            console.log(count++);
        }
    },
    
    doWhileLoop: function() {
        'use strict';
        var count = 0;

        do {
            console.log(count++);
        } while(count < 5)
    }
};

console.log('\nHere is the for loop:');
app.basicForLoop();

console.log('\nHere is the for..of loop:');
app.forOfLoop();

console.log('\nHere is the for..in loop:');
app.forInLoop();

console.log('\nHere is the while loop:');
app.basicWhileLoop();

console.log('\nHere is the do...while loop:');
app.doWhileLoop();
