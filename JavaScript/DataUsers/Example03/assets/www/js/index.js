/*jshint devel: true, browser: true, jquery: true, strict: true */
/*global App: false */

App.Main = (function() {'use strict';

	var util = new App.Utility();
	
	// Application Constructor
	function Main() {
		console.log("debug: App constructor called");
		bindEvents();
	}

	/*
	 * Bind any events that are required on startup.
	 * Common events: 'load', 'deviceready', 'offline', and 'online'.
	 * Note that we are now loading HTML and setting up
	 * the change handler in this method.
	 */
	var bindEvents = function() {
		console.log("debug: App bindEvents called");
		document.addEventListener('deviceready', onDeviceReady, false);
		$("#data01").load("data.html #div01");
		$("#select01").on("change", util.changer);
	};

	// Called when device is fully initialized
	var onDeviceReady = function() {
		console.log("debug: App onDeviceReady called");
		showProgramState();
		showDate();
	};

	var showProgramState = function() {
		var listeningElement = $('.listening');
		var receivedElement = $('.received');
		listeningElement.attr('style', 'display:none;');
		receivedElement.attr('style', 'display:block;');
	};

	var showDate = function() {
		console.log('debug: showDate called');
		
		$("#curDate").html("Current Date: " + util.getToday());
	};

	return Main;
})();

$(document).ready(function() {"use strict";
	new App.Main();

});
