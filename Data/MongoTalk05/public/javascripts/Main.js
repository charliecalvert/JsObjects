/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "TinyPubSub": "TinyPubSub",
    "clientMongo": "ClientMongo"         
  },
  shim: {
	   'TinyPubSub': {
          deps: ['jquery'],
          exports: 'TinyPubSub'
      }
 }
});

require(["TinyPubSub", "ClientUi", "ClientMongo" ], function(TinyPubSub, clientUi, clientMongo) { 
	'use strict';
	console.log("Main called.");
	clientMongo();
	clientUi();
});



