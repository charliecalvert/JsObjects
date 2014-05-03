/**
 * @author Charlie Calvert
 */

elf.myObject = {
    name : "myObject",
    myProperty02 : 4,
    addProperties : function() {'use strict';
        return this.myProperty01 + this.myProperty02;
    },
    multiplyProperties : function() {'use strict';
        return this.myProperty01 * this.myProperty02;
    }
};
