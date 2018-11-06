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
    
    sayName() {
        console.log('BarFoo');
    }
}

const barFoo = new BarFoo();
barFoo.sayName();

/*
 * Old Style Function Constructor
 */
function Fulano() {
    // private function 
    var bar  = function() {}; 
    
    // Method on a prototype
    Fulano.prototype.sayName = function() { 
      console.log('Fulano.sayName'); 
    };  
}

const fulano = new Fulano();
fulano.sayName();
