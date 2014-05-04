/**
 * @author Charlie Calvert
 */

var elf = {};

elf.implicitThisObject = {
    name : "implicitThisObject",
    myProperty01 : 12,
    myProperty02 : 4
};

elf.implicitThisFunction = function() {'use strict';
    this.name = "implicitThisFunction", this.myProperty01 = 12;
    this.myProperty02 = 4;
};

elf.showImplicitThis = function() {
    elf.utilities.clearList();

    elf.utilities.display("--  obj1  ----------");
    var obj1 = elf.implicitThisObject;
    obj1.myProperty02 = "goober for obj1";
    elf.utilities.showKeys(obj1);

    elf.utilities.display("--  obj2  ----------");
    var obj2 = elf.implicitThisObject;
    obj2.myProperty02 = "Shoober for obj2";
    elf.utilities.showKeys(obj2);

    elf.utilities.display("--  obj1  ----------");
    elf.utilities.showKeys(obj1);
}; 

$(document).ready(function() {
    $("#showImplicitThis").click(elf.showImplicitThis);
});
