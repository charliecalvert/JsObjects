/**
 * @author Charlie Calvert
 */

/*
 <script src="../Public/jquery-2.1.0.js"></script>
 <script src="Library/jasmine.js"></script>
 <script src="Library/jasmine-html.js"></script>
 <script src="Library/boot.js"></script>
 <script src="Library/jasmine-jquery.js"></script>
 <script src="../Public/index.js"></script>
 <script src="ClientSpec.js"></script>
 */

require.config({
	paths : {
		'testMe' : '../Public/testMe',
		'jquery' : '../Public/jquery-2.1.0',
		'pubSub' : '../Public/PubSubOn',
		'clientMongo' : "../Public/ClientMongo",
		'jasmine' : 'Library/jasmine',
		'jasmine-html' : 'Library/jasmine-html',
		'boot' : 'Library/boot',
		// 'jasmine-jquery' : 'Library/jasmine-jquery'
	},
	shim : {
		'jasmine' : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : ['jasmine'],
			exports : 'jasmine'
		},
		'boot' : {
			deps : ['jasmine', 'jasmine-html'],
			exports : 'jasmine'
		}/* ,
		'pubSub' : {
			exports : 'pubSub'
		},
		'clientMongo': {
			deps : ['jquery', 'pubSub'],
			exports: 'clientMongo'
		} */
	}
});

require(['jquery', 'boot'], function(j, b, c) {

	// Load the specs
	require(["TestMeSpec", "ClientSpec"], function() {
		console.log("Main called.");
		// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
		window.onload();
	});
});

