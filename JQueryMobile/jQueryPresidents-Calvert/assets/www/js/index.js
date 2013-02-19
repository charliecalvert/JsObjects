/*jshint browser: true, devel: true, jquery: true */

var App = (function() {'use strict';

	// Application Constructor
	function App() {
		bindEvents();
	}

	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	var bindEvents = function() {
		document.addEventListener('deviceready', onDeviceReady, false);
	};

	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	var onDeviceReady = function() {
		receivedEvent('deviceready');
	};

	// Update DOM on a Received Event
	var receivedEvent = function(id) {
		$("#backToMenu").click(App.backToMenu);
		console.log('Received Event: ' + id);
	};

	App.prototype.backToMenu = function() {
		$("#menu").trigger('click');	
		// window.open($("#menu").attr('href'),'_blank');
	};

	return App;
})();

$(document).ready(function() {
	var app = new App();
	$("#backToMenu").click(app.backToMenu);
	console.log("lsd: Finished Init");
}); 