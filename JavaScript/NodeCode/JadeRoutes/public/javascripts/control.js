$(document).ready(function() { 'use strict';

    /**********************************
     * LOADING JADE
     **********************************/
    $('#routeOne').click(function() {
        $('#elf-view').load('/main-page');
    });

    $('#routeTwo').click(function() {
        $('#elf-view').load('/renewables/main-page');
    });

    /**********************************
     * CALLING SERVER SIDE FUNCTIONS
     **********************************/

    $('#routeThree').click(function() {
        $.getJSON('/renewables/', function (response) {
            $('#debug').html(JSON.stringify(response, null, 4));
        })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function () {
                console.log('second success');
            })
            .always(function () {
                console.log('complete');
            });
    });

    $('#routeFour').click(function() {
        $.getJSON('/renewables/some-function', function(response) {
            $('#debug').html(JSON.stringify(response, null, 4));
        })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function() {
                console.log('second success');
            })
            .always(function() {
                console.log('complete');
            });
    });

});
