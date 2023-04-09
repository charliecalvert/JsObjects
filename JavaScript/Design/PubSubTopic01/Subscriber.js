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
        $.Topic('debug').subscribe(function01);
        $.Topic('debugDetail').subscribe(function02);
    }

    function function01(event) {
        console.log(event);
        $('#message01').html(event.message);
        event.acknowledge('From Subscriber: I got the message!');
    }

    function function02(a) {
        console.log(a);
        $('#message02').html(a);
    }

    return Subscriber;
})();
