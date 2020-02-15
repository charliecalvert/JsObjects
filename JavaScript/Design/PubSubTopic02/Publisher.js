/**
 * @author Charlie Calvert
 */

// Publisher
PubSub.Publisher = (function() {
    'use strict';

    function Publisher() {
        $('#privateButton').click(privateMethod);
        $.publish('debug', { message: 'Publisher Constructor Called' });
    }

    var privateMethod = function() {
        $.publish('debugDetail', 'Publisher privateMethod called by Messenger');
    };

    return Publisher;
})();

$(document).ready(function() {
    'use strict';

    new PubSub.Subscriber();
    new PubSub.Publisher();
});
