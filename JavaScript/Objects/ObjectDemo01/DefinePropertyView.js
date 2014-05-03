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
      return "Configurable, Writable"; 
  },
  enumerable: true,
  configurable: true                      
});

Object.defineProperty(elf.propertyObject, "getSetGo", {   
  get: function() {
      return _getSetGo;
  },
  get: function(valueSetter) {
      _getSetGo = valueSetter; 
  },
  enumerable: true,
  configurable: true                      
});

Object.defineProperty(elf.propertyObject, "blank", {
  __proto__: null, 
  value: "My proto is set to null. This is not done very often"                    
});
