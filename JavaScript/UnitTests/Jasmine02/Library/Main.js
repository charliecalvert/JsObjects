/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jquery: 'jquery-2.0.3',
        getEight: 'spec/GetNumber'

    }
});

require(['jquery', 'getEight'], function($, getEight) {
    'use strict';

    console.log('jQuery');

    $("#getEightClick").click(function() {
        getEight.displayGetEight();
    });


});
