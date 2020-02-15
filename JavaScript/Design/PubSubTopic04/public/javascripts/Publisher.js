/**
 * @author Charlie Calvert
 */

// Publisher
define(['TinyPubSub'], function(TinyPubSub) {
    'use strict';

    function publisher() {
        console.log('Publisher constructor called.');
        $('#privateButton').click(triggerDebugDetailEvent);
        $.publish('debug', {
            message: 'Publisher Constructor Called'
        });
    }

    var triggerDebugDetailEvent = function() {
        console.log('Publisher private method called.');
        $.publish(
            'debugDetail',
            'Publisher.triggerDebugDetailEvent sent this message'
        );
    };

    return { publisher: publisher };
});
