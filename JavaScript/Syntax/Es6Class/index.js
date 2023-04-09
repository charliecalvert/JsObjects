class Bar {
    constructor(inita) {
        this.a = inita;
    }

    static showVersionOne() {
        console.log(this.a);
    }

    showVersionTwo() {
        console.log(this.a)
    }
}

const bar = new Bar('Init for A');

// This call works
bar.showVersionTwo();
// Outputs *undefined* because Bar never uses constructor.
Bar.showVersionOne();
// Blows up because we can't call static methods on an object instance.
bar.showVersionOne();

/*
  The output:

$ node index.js
Init for A
undefined
/home/charlie/Git/JsObjects/JavaScript/Syntax/Es6Class/index.js:20
bar.showVersionOne();
    ^

TypeError: bar.showVersionOne is not a function
    at Object.<anonymous> (/home/charlie/Git/JsObjects/JavaScript/Syntax/Es6Class/index.js:20:5)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:423:7)
    at startup (bootstrap_node.js:147:9)
    at bootstrap_node.js:538:3
*/
