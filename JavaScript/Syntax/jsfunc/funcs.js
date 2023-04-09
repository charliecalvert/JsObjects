var MyObject = (function() {
    var that = null;

    function MyObject() {
        console.log('THIS', this);
        this.foo = 'foo';
        that = this;
    }

    MyObject.prototype.myCallback = function() {
        that.foo = 'baz';
    };

    MyObject.prototype.useCallback = function(myCallback) {
        console.log(this.foo);
        myCallback();
        console.log(this.foo);
    };

    return MyObject;
})();

const myObject = new MyObject();
myObject.useCallback(myObject.myCallback);
