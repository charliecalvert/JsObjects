/**
 * @author Charlie Calvert
 */

function ThreeTypes(name) {

    'use strict';

    this.name = name;

    function privateFunc() {
        console.log("This is a private function");
    }

    this.normalFunc = function() {
        privateFunc();
        console.log("This is a normal function");
    };
}

var threeTypes = new ThreeTypes('Passed as parameter');
threeTypes.normalFunc();
console.log(threeTypes.name);
try {
    threeTypes.privateFunc();
} catch (e) {
    console.log(e);
}
