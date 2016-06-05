/**
 * Created by charlie on 5/18/16.
 */

define(function() {
    'use strict';
    var home = {
        color: 'red',
        size: 'big',
        init: function() {
            console.log(home.color);
            $('#elf-view').load('/home', function() {
                $('#display').html(home.color);
                $('#display2').html(home.size);
            });
        }
    };
    return home;
});
