var Boat = function(name) {
    'use strict';

    this.name = name;
    this.show = function(value) {
        console.log(value);
    };
    this.report = function() {
        show('Boat: ' + this.name);
    };
};

var Yawl = function(boat, masts, sails) {
    'use strict';
    this.boat = user;
    this.name = user.name; // ensures interface stays the same
    this.masts = masts;
    this.sails = sails;
    this.report = function() {
        show('this.name + ' + this.masts + ', ' + this.sails);
    };
};

$(document).ready(function run() {
    'use strict';
    var boat = new Boat('JohnB');
    boat.report();

    var yawl = new Yawl(boat, 'main, mizzen', 'jib, main, mizzen');
    decorated.report();
});
