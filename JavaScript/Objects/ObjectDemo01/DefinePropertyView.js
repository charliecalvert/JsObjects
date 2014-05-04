/**
 * @author Charlie Calvert
 */

elf.propertyObject = {
    name : "propertyObject",
    _getSetGo: "Default get set go"    
};

Object.defineProperty(elf.propertyObject, "ecw", {   
  value: "Enumerable, Configurable, Writable",
  enumerable: true,
  configurable: true,
  writable: true,                    
});

Object.defineProperty(elf.propertyObject, "ec", {   
  value: "Enumerable, Configurable",
  enumerable: true,
  configurable: true,
  writable: false,                    
});

Object.defineProperty(elf.propertyObject, "e", {   
  value: "Enumerable",
  enumerable: true,
  configurable: false,
  writable: false,                    
});

Object.defineProperty(elf.propertyObject, "cw", {   
  value: "Configurable, Writable",
  enumerable: false,
  configurable: true,
  writable: true,                    
});


Object.defineProperty(elf.propertyObject, "getter", {   
  get: function() {
      'use strict';
      return "Configurable, Writable"; 
  },
  enumerable: true,
  configurable: true                      
});

Object.defineProperty(elf.propertyObject, "getSetGo", {   
  get: function() {
      'use strict';
      return this._getSetGo;
  },
  set: function(valueSetter) {
      'use strict';
      this._getSetGo = valueSetter; 
  },
  enumerable: true,
  configurable: true                      
});

/* Object.defineProperty(elf.propertyObject, "getSetGoValue", {   
  get: function() {
      'use strict';
      return this.getSetGoValue;
  },
  set: function(valueSetter) {
      'use strict';
      this.getSetGoValue = valueSetter; 
  },
  enumerable: true,
  configurable: true                      
}); */


// This is here for completeness. Don't do this.
Object.defineProperty(elf.propertyObject, "blank", {
  __proto__: null, // jshint ignore: line
  value: "My proto is set to null. The proto property is depricated"                    
});
