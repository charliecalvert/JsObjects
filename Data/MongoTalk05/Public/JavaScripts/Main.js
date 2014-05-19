/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "PubSub": "PubSubOn",
    "clientMongo": "ClientMongo"         
  }
});

require(["jquery", "ClientUi", "ClientMongo" ], function(jq, clientUi, clientMongo) { 
	'use strict';
	console.log("Main called.");
	clientMongo();
	clientUi();
});



