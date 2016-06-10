$(document).ready(function() { 'use strict';

    $('#routeOne').click(function() {
        $('#elf-view').load('/main-page');
    });

    $('#routeTwo').click(function() {
        $('#elf-view').load('/renewables/main-page');
    })
});
