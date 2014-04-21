// Uses small first letter so don't call new on it
function func01() {
    'use strict';
    var privateValue = 0;

    // This won't work because we don't call new	
    func01.prototype.publicValue01 = 1;

    // This next line won't work because this is undefined
    //this.publicValue02 = 2;
    var that = this;

    function writeThis() {
        console.log('[func01 writeThis called]');
        console.log('that in writeThis: ', that);
        console.log("this in writeThis: ", this);
    }

    writeThis();
}

// A constructor function uses a capital letter to remind you to call new on it

function Func02() {
    'use strict';
    var privateValue = 0;
    Func02.prototype.publicValue01 = 1;
    this.publicValue02 = 2;
    this.publicValue03 = 3;
    var that = this;

    Func02.prototype.writeThis = function() {
        console.log('[Func02 writeThis called]');
        console.log('that in writeThis: ', that);
        console.log("this in writeThis: ", this);
        writeThat();
    };

    function writeThat() {
        console.log('[Func02 writeThat called]');
        console.log('that in writeThat: ', that);
        console.log("this in writeThat: ", this);
    }

}


exports.BasicScope = function() {
    'use strict';

    console.log(">> Call func01 <<");
    console.log("func01.name: " + func01.name);
    console.log("func01.publicValue01: " + func01.publicValue01);
    console.log("func01.publicValue02: " + func01.publicValue02);
    console.log("func01.privateValue: " + func01.privateValue);
    func01();

    console.log("\n>> Call func02 <<\n");
    var func02 = new Func02();
    console.log("func02.name: " + func02.name);
    console.log("func02.publicValue01: " + func02.publicValue01);
    console.log("func02.publicValue02: " + func02.publicValue02);
    console.log("func02.privateValue: " + func02.privateValue);
    func02.writeThis();


    console.log('Try commenting out *use strict* in *func01* and see what happens');
    console.log('It shows that use strict makes this disappear unless you call new');
    console.log("Bottom line? Avoid using *this*!");
};
