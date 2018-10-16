class Bar {
    constructor() {
        console.log('Bar constructor called.');
    }
}

class BarFoo extends Bar {
    constructor() {
        super();
        console.log('BarFoo constructor called.');
    }
}

new BarFoo();