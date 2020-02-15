/**
 * @author Charlie Calvert
 */

define(['TinyPubSub'], function(TinyPubSub) {
    'use strict';

    /*
     * The point is that there is no reference to Publisher
     * in this module and yet it can recieve messages from
     * it
     */
    function subscriber() {
        console.log('Subscriber constructor called.');
        $.subscribe('debug', listenForDebugEvent);
        $.subscribe('debugDetail', listenForDebugDetailEvent);
    }

    function listenForDebugEvent(event, customMessage) {
        console.log('Subscriber function01 called.');
        console.log(event);
        $('#message01').html(customMessage.message);
    }

    function listenForDebugDetailEvent(event, customMessage) {
        console.log('Subscriber function02 called.');
        console.log(event);
        $('#message02').html(customMessage);
    }

    return { subscriber: subscriber };
});
