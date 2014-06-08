var copyObject = function(obj) {
   function F(){}
   F.prototype = obj;
   return new F();
}

var myObject = { 
    a: 2,
    b: 3,
    add: function() {
        return this.a + this.b;
    }
}

console.log(myObject.add());
var newObject = copyObject(myObject);
console.log(newObject.add());