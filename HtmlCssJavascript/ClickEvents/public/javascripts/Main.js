/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        "jquery" : 'jquery-1.11.1.min'
    }
});

require(['jquery', 'ClickEvents'], function(jq, ClickEvents) {
    'use strict';
    console.log('Main called');
    var clickEvents = new ClickEvents();
});
