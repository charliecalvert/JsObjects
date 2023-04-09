/**
 * Created by charlie on 7/24/15.
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        simple_init: 'javascripts/simple_init',
        shape: 'javascripts/shape',
        crafty: 'components/crafty/dist/crafty'
    }
});

define(['shape'], function(shape) {});
