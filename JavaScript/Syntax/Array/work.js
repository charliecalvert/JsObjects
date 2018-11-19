const numbers = [2, 1, 3];
const sorted = numbers.sort();
console.log(sorted);
console.log(numbers);

for (let number of sorted) {
    console.log(number);
}

for (let i = 2; i >= 0; i--) {
    console.log(sorted[i]);
}

const words = ['one', 'two', 'three'];
const sortedWords = words.sort();
console.log(sortedWords);
console.log(words);

const newWords = ['able', 'bravo', 'charlie'];

const slip = newWords.slice(0,2);
console.log('SLICE', slip);

const slide = newWords.slice(1,3);
console.log('SLICE', slide);

const slate = newWords.slice(1);
console.log('SLICE', slate);

const slake = newWords.slice(-2);
console.log('SLICE', slake);
