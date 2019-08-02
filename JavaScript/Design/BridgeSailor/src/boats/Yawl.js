/**
 * New node file
 */

    var Yawl = function() {

    };

    Yawl.prototype = {

        getBoatType: function() {
            return 'Yawl';
        },

        tack : function() {
            return "Yawl tack called.";
        },

        luff : function() {
            return "Yawl luff called.";
        },

        reach : function() {
            return "Yawl reach called.";
        },

        anchor : function() {
            return "Yawl anchor called.";
        },

        dock : function() {
            return "Yawl dock called.";
        }
    };

export default new Yawl();

