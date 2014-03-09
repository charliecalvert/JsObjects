/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "pubsub": "PubSubOn",
    "clientMongo": "ClientMongo"         
  }
});

require(["jquery", "pubsub", "ClientUi", "clientMongo" ], function(j, p, clientUi, clientMongo) {
	console.log("Main called.");
	clientMongo();
	clientUi();
});
