/*jshint devel: true, browser: true, jquery: true, strict: true */
/*global google:false */

var Mapper = (function() {'use strict';
	var mapDiv;
	var latitude;
	var longitude;	
	
	function Mapper() {
		setupDialog();
		loadMap();
		$("#accordion").accordion({ collapsible: true, active: 2 });
		$("#gotoDarwin").click(gotoDarwin);
		$("#gotoVermont").click(gotoVermont);
		$("#gotoBellevueCollege").click(gotoBellevueCollege);
		$("#getLatLongFromFile").click(getLatLongFromFile); 
		$("#getCenter").click(getCenter);
		$("#layoutLeft").click(layoutLeft);
		$("#layoutTop").click(layoutTop);
	}
	
	function setupDialog() {				
		$("#dialog").dialog({
			autoOpen: false,
			show: "blind",
			hide: "explode",
			modal: true,
			buttons: {
				"Ok": function() {					
					var markName = $("#name").val();
					writeLatLong(markName, latitude, longitude);
					$(this).dialog("close");
				}
			}
		});

		$("#opener").click(function() {
			$("#dialog").dialog("open");
			return false;
		});
	}

	function loadMap()
	{
		var latlng = new google.maps.LatLng(47.6609148, -122.1664568);
		var mapOptions = {
			zoom: 8,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//var map = document.getElementById("map");
		var map = $("#map");
		mapDiv = new google.maps.Map(map[0], mapOptions);

		google.maps.event.addListener(mapDiv, 'click', mapClick);
	}

	function mapClick(event)
	{
		latitude = event.latLng.lat();
		longitude = event.latLng.lng();
		$("#dialog").dialog("open");
	}

	function writeLatLong(markName, lat, lng) {
		if (markName !== "") {
			var datLatLng = "name=" + markName + "&lat=" + lat + "&long=" + lng;
			$.ajax(
			{
				type: "POST",
				url: "/cgi-bin/LatLongData.py",
				data: datLatLng,
				error: function(request, ajaxOptions, thrownError) {
					showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
					showDebug(request.status);
					showDebug(request.statusText);
					showDebug(request.getAllResponseHeaders());
					showDebug(request.responseText);
				}
			}).done(function (msg) {
				alert("Data Saved: " + msg);
				getLatLongFromFile();
			});
		}
		else {
			alert('Please enter a name for your point');
		}
	}

	function getLatLongFromFile() {
		$.ajax(
		{
			type: "GET",
			url: "/cgi-bin/LatLongReadData.py",
			dataType: "xml",
			cache: false,
			success: function (xml) {				
				$(xml).find('address').each(function () {
					var title = $(this).find('name').text();
					var latitude = $(this).find('latitude').text();
					var longitude = $(this).find('longitude').text();
					makeMarker(title, latitude, longitude);
				});
			},
			error: function(request, ajaxOptions, thrownError) {
				showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
				showDebug(request.status);
				showDebug(request.statusText);
				showDebug(request.getAllResponseHeaders());
				showDebug(request.responseText);
			}
		});
	}

	function makeMarker(name, latitude, longitude) {
		var location = new google.maps.LatLng(latitude, longitude);

		var place = new google.maps.Marker({
			position: location,
			map: mapDiv,
			title: name
		});

		google.maps.event.addListener(place, 'click', function () {
			mapDiv.setCenter(location);
			mapDiv.setZoom(10);
		});
	}

	function gotoDarwin()
	{
		// var darwin = new google.maps.LatLng(-12.461334, 130.841904);
		var darwin = gotoLocation(-12.461334, 130.841904, 14);

		var marker = new google.maps.Marker({
			position: darwin,
			map: mapDiv,
			title:"Hello World!"
		});

		google.maps.event.addListener(marker, 'click', function () {
			mapDiv.setZoom(8);
		});

	}

	function getCenter()
	{
		var latLong = mapDiv.getCenter();
		var latData = document.getElementById("latData");
		var longData = document.getElementById("longData");
		latData.value = latLong.mb.toString();
		longData.value = latLong.nb.toString();
	}

	function gotoBellevueCollege()
	{
		gotoLocation(47.58436783281881, -122.14824694772176, 14);
	}

	function gotoLocation(latitude, longitude, zoomLevel)
	{
		var location = new google.maps.LatLng(latitude, longitude);
		mapDiv.setCenter(location);
		mapDiv.setZoom(zoomLevel);
		return location;
	}

	function gotoVermont()
	{
		gotoLocation(43.918975, -72.936317, 10);
	}

	function layoutTop() {
		$("#navigate").css( { float: "none", height: "auto", width: "100%" } );
		$("#map").css( { float: "none", width: "100%" } );
	}

	function layoutLeft() {
		$("#navigate").css( { float: "left", height: "100%", width: "25%", backgroundColor: "green" });
		$("#map").css({ float: "left", width: "74%" });
	}

	var showDebug = function(textToDisplay)
	{
		$("#debug").append('<li>' + textToDisplay + '</li>');
	};
	
	return Mapper;
})();

$(document).ready(function() {'use strict';
	new Mapper();
});

