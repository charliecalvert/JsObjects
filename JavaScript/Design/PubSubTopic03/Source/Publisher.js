/**
 * @author Charlie Calvert
 */

// Publisher
define(['jquery', 'tinyPubSub'], function() {
    'use strict';

    function publisher() {
        console.log('Publisher constructor called.');
        $('#privateButton01').click(privateMethod01);
        $('#privateButton02').click(privateMethod02);
        $.publish('debugDetail01', {
            message: 'Publisher Constructor Called'
        });
    }

    var privateMethod01 = function() {
        console.log('Publisher private method called.');

        $.publish('debugDetail02', {
            sender: 'publisher.privateMethod01',
            callback: function(reply) {
                $('#message02').html(reply);
            }
        });
    };

    var getMessage = function() {
        return {
            sender: 'publisher.privateMethod02',
            value: parseInt($('#input01').val()),
            callback: function(reply, value) {
                $('#message03').html(reply + '\nThe value is now: ' + value);
            }
        };
    };

    var privateMethod02 = function() {
        console.log('Publisher private method called.');
        $.publish('debugDetail03', getMessage());
    };

    return {
        publisher: publisher
    };
});
