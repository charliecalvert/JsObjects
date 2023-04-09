var that;

var MyObject = function() {
    console.log('THIS', this);
    this.foo = 'foo';
    that = this;
    console.log('THIS', this);
};

MyObject.myCallback = function() {
    that.foo = 'baz';
};

MyObject.useCallback = function(myCallback) {
    console.log('THIS USE CALL BACK', this);
    console.log('THAT USE CALL BACK', that);
    console.log(that.foo);
    myCallback();
    console.log(that.foo);
};

const myObject = new MyObject();
//myObject.useCallback(MyObject.myCallback);
MyObject.useCallback(MyObject.myCallback);
