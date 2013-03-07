/**
 * @author Charlie Calvert
 * Released under the MIT License
 */

/*global google: false */
/*jshint devel: true, browser: true, jquery: true, strict: true */

var GeoCode = (function() {'use strict';

	function GeoCode(latitude, longitude) {
		initialize(latitude, longitude);
	}

	var geocoder;
	var map;
	
	var initialize = function(latitude, longitude) {
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			zoom : 8,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	}

	GeoCode.prototype.getCoordinates = function() {
		var address = document.getElementById('address').value;
		geocoder.geocode({
			'address' : address
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var pos = results[0].geometry.location;
				var latititude = pos.ib;
				var longitude = pos.jb;
				var titleString = address + " Latitude: " + latititude + " Longitude: " + longitude;
				$("#position").html(titleString);
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map : map,
					position: pos,
					title: titleString
				});
			} else {
				alert('Geocode error: ' + status);
			}
		});
	}

	return GeoCode;
})();


$(document).ready(function() {
  "use strict";
  var geoCode = new GeoCode(47.6062095, -122.3320708);
  $("#getCoordinates").click(geoCode.getCoordinates);
  
});
