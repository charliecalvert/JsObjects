/**
 * @author Charlie Calvert
 */

elf.myObject = {
    name : "myObject",
    myProperty01 : 12,
    myProperty02 : 4,
    addProperties : function() {'use strict';
        return this.myProperty01 + this.myProperty02;
    },
    multiplyProperties : function() {'use strict';
        return this.myProperty01 * this.myProperty02;
    }
};

/* 
 * 
 * This won't work, and produces an error, so I comment it out:
 * 
 *   elf.myObject.prototype.bar = function() {
 *       return "Will never work because there is no prototype on an object"; 
 *   };
 * 
 */
