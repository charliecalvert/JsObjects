/**
 * New node file
 */

'use strict';
var requirejs = require("requirejs");
requirejs.config({
    baseUrl: '.',
    nodeRequire: require
});

describe('Require Js Test Suites', function(){
    var foo;

    before(function (done){
        // This saves the module foo for use in tests. You have to use
        // the done callback because this is asynchronous.
        requirejs(['MyObject'],  function(myObject) {
            console.log("Require called");
            foo = myObject;
            done();
        });
    });

  describe('Requirejs Tests', function(){
    it('Does object exist', function(){
      if (foo.name !==  "MyObject") {
          throw new Error("failed!");
      }
    });
  });
});