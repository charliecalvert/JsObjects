/**
 * Created by charlie on 5/16/16.
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        jquery: 'components/jquery/dist/jquery',
        control: 'javascripts/control',
        home: 'javascripts/home'
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});
