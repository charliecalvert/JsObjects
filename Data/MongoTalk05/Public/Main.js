/**
 * @author Charlie Calvert
 */

/*
 *  <script src="Public/jquery-2.1.0.js"></script>
  <script src="Library/PubSubOn.js"></script>
  <script src="Public/index.js"></script>
  <script src="Public/ClientUi.js"></script>
 */

require.config({
  paths: {
    "jquery": "jquery-2.1.0",
    "pubsub": "PubSubOn"     
  }
});

require(["jquery", "pubsub", "ClientUi", "ClientMongo" ], function(j, p, clientUi, clientMongo) {
	console.log("Main called.");
	clientMongo();
	clientUi();
});
