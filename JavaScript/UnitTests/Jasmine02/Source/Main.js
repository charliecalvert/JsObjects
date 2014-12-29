/**
 * @author Charlie Calvert
 */
require.config({
    paths: {
        jquery: 'jquery-2.0.3',
        GetNumber: 'GetNumber'

    }
});

require(['jquery', 'GetNumber'], function($, getNumber) {
    'use strict';

    console.log('jQuery');

    $("#getEightClick").click(function() {
        getNumber.displayGetEight();
    });


});
