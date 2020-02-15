/**
 * @author Charlie Calvert
 */

var PubSub = {};

PubSub.Subscriber = (function() {
    'use strict';

    /*
     * The point is that there is no reference to Publisher
     * in this module and yet it can recieve messages from
     * it
     */
    function Subscriber() {
        $.subscribe('debug', function01);
        $.subscribe('debugDetail', function02);
    }

    function function01(event, customMessage) {
        console.log(event);
        $('#message01').html(customMessage.message);
    }

    function function02(event, customMessage) {
        console.log(event);
        $('#message02').html(customMessage);
    }

    return Subscriber;
})();
