let that = null;

class MyObject {
    
    constructor() {
        this.foo = 'foo';
        that = this;
    }

    myCallback() {
        that.foo = 'baz';
    }

    useCallback(myCallback) {
        myCallback();
    }
}

const myObject = new MyObject();
myObject.useCallback(myObject.myCallback);
