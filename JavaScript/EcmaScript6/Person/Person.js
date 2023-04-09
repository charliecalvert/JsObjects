class Person {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	fullName() {
		return this.first + ' ' + this.last;
	}
}

var person = new Person('George', 'Washington');
console.log(person.fullName());
