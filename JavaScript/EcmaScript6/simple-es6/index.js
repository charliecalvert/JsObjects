/* Two ways to write the same code */

((numbers) => {
  numbers.forEach((number) => {
    console.log(number);
  })
})(['one', 'two', 'three']);


var logger = (numbers) => {
  numbers.forEach((number) => {
    console.log(number);
  })
}

var numbers = ['four', 'five', 'six'];
logger(numbers);
