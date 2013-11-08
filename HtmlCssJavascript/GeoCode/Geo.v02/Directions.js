/**
 * @author Charlie
 */

ELF.own.Directions = (function() {

	var waypoints = [];
	var directionsService = null;
	var directionsDisplay = null;

	function Directions(map) {
		directionsService = new google.maps.DirectionsService();
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById("directions"));
		// google.maps.event.addListener(map, 'click', waypointer);
	}

	var waypointer = function() {
		if (waypoints.length < 9) {
			waypoints.push({
				location : destination,
				stopover : true
			});
			destination = event.latLng;
			addMarker(destination);
		} else {
			alert("Maximum number of waypoints reached");
		}
	};
	
	function getMode(mode) {
		switch (mode) {
			case "bicycling":
				userMode = google.maps.DirectionsTravelMode.BICYCLING;
				break;
			case "driving":
				userMode = google.maps.DirectionsTravelMode.DRIVING;
				break;
			case "walking":
				userMode = google.maps.DirectionsTravelMode.WALKING;
				break;
		}
		return userMode;
	}


	Directions.prototype.drawRoute = function(origin, destination) {
		if (origin == null) {
			alert("Click on the map to add a start point");
			return;
		}

		if (destination == null) {
			alert("Click on the map to add an end point");
			return;
		}

		var mode = getMode('driving');

		var request = {
			origin : origin,
			destination : destination,
			waypoints : waypoints,
			travelMode : mode,
			optimizeWaypoints : true,
			avoidHighways : false,
			avoidTolls : false
		};

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
			}
		});

		// directionsVisible = true;
	};

	return Directions;
})();

