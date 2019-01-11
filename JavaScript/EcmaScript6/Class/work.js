class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    sayName() {
        console.log('SAY NAME:', this.firstName, this.lastName);
    }

}

const person = new Person('George', 'Washington');
console.log('GET NAME:', person.getName());
person.sayName();

class MyClass {
    myMethod() { }
}

const myClass = new MyClass();

    class GetNumbers {
        getOne() { return 1 }
        getTwo() { return 2 }
    }

    const getNumbers = new GetNumbers();
    console.log('getOne + getTwo = ', getNumbers.getOne() + getNumbers.getTwo());