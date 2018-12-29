/**
 * @author Charlie Calvert
 */

require.config({
    paths: {
        jquery: '/scripts/jquery.min',
        TinyPubSub: 'TinyPubSub',
        clientMongo: 'ClientMongo',
        utilities: 'utilities'
    },
    shim: {
        TinyPubSub: {
            deps: ['jquery'],
            exports: 'TinyPubSub'
        }
    }
});

require(['TinyPubSub', 'ClientUi', 'ClientMongo', 'utilities'], function(
    TinyPubSub,
    clientUi,
    clientMongo,
    utilities
) {
    'use strict';
    console.log('Main called.');
    clientMongo();
    clientUi();
});
