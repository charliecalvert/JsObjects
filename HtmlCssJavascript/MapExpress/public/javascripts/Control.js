/**
 * Control.js
 */

/* jshint devel: true, browser: true, jquery: true, strict: true */
/* global google:false */

var elf = {
	position : function() {
		this.control.position();
	}
}

define(function() {

	var Control = (function() {
		'use strict';
		var mapDiv;
		var latitude;
		var longitude;

		function Control() {
			$("#gotoDarwin").click(gotoDarwin);
			$("#home").click(this.position);
			loadScript();
			// position();
		}

		function loadScript() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=elf.position';
			document.body.appendChild(script);
		}

		Control.prototype.position = function() {

			var options = {
				enableHighAccuracy : true,
				timeout : 5000,
				maximumAge : 0
			};

			try {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(loadMap,
							showDebug, options);
				} else {
					showError("NOT-SUPPORTED");
				}
			} catch (evt) {
				alert(evt);
			}
		}

		function loadMap(position) {
			var latlng = new google.maps.LatLng(position.coords.latitude,
					position.coords.longitude);
			var mapOptions = {
				zoom : 8,
				center : latlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			var map = $("#map");
			mapDiv = new google.maps.Map(map[0], mapOptions);

			makeMarker('here', latlng.lat(), latlng.lng());
		}

		function makeMarker(name, latitude, longitude) {
			var location = new google.maps.LatLng(latitude, longitude);

			var place = new google.maps.Marker({
				position : location,
				map : mapDiv,
				title : name
			});

			google.maps.event.addListener(place, 'click', function() {
				mapDiv.setCenter(location);
				mapDiv.setZoom(10);
			});
		}

		function gotoDarwin() {
			// var darwin = new google.maps.LatLng(-12.461334, 130.841904);
			var darwin = gotoLocation(-12.461334, 130.841904, 14);

			var marker = new google.maps.Marker({
				position : darwin,
				map : mapDiv,
				title : "Hello World!"
			});

			google.maps.event.addListener(marker, 'click', function() {
				mapDiv.setZoom(8);
			});
		}

		function gotoLocation(latitude, longitude, zoomLevel) {
			var location = new google.maps.LatLng(latitude, longitude);
			mapDiv.setCenter(location);
			mapDiv.setZoom(zoomLevel);
			return location;
		}

		var showDebug = function(textToDisplay) {
			$("#debug").append('<li>' + textToDisplay + '</li>');
		};

		return Control;
	})();

	return Control;
});
