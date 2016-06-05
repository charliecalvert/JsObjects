define(['jquery', 'home'],
    function($, home) {
        'use strict';

        var control = {
            init: function() {
                $('#homeMenu').click(home.init);
                home.init();
            }
        };

        return control;
    });
