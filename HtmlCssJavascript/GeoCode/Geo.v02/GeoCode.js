/**
 * @author Charlie Calvert
 * Released under the MIT License
 */

/*global google: false */
/*jshint devel: true, browser: true, jquery: true, strict: true */

ELF.own.GeoCode = (function() {'use strict';

	var startPosition = null;
	var directions = null;
	var geocoder;
	var googleMap;
    var that = {};

	function GeoCode(latitude, longitude) {
		$("#getDirections").click(getDirections);
		initialize(latitude, longitude);
		that.directions = new ELF.own.Directions(googleMap);
	}

	var initialize = function(latitude, longitude) {
		geocoder = new google.maps.Geocoder();
		startPosition = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			zoom : 8,
			center : startPosition,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var mapCanvas = $('#mapCanvas');
		googleMap = new google.maps.Map(mapCanvas[0], mapOptions);
		makeMarker(startPosition, "init at Seattle");
	};
	
	var makeMarker = function(initPosition, initTitleString) {
		var marker = new google.maps.Marker({
			map : googleMap,
			position : initPosition,
			title : initTitleString
		});
	};
	
	var geoCode = function(initAddress) {
		geocoder.geocode({
			'address' : initAddress
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var position = results[0].geometry.location;
				var latititude = position.lat();
				var longitude = position.lng();
				var titleString = initAddress + "; Latitude: " + latititude + "; Longitude: " + longitude;
				$("#position").html(titleString);
				googleMap.setCenter(position);
				makeMarker(position);
				that.directions.drawRoute(startPosition, position);
			} else {
				alert('Geocode error: ' + status);
			}
		});
	};

	var getDirections = function() {
		var userAddress = $('#address').val();
		geoCode(userAddress);
	};

	return GeoCode;
})();

$(document).ready(function() {"use strict";
	new ELF.own.GeoCode(47.6062095, -122.3320708);
});
