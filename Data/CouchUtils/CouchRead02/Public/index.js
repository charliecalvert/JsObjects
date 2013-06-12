/**
 * @author Charlie Calvert
 */

ELF.own.App = (function() {
	
	function App() {
	    $('#newPage').click(newPage);
	    $('#clearDebug').click({item:'debug'}, clear);
	    $('#clearDocs').click({item:'docs'}, clear);
		$('#readHero').click({doc:'hero'}, readJson);
		$('#readPerson01').click({doc:'person01'}, readJson);
		$('#readPerson02').click({doc:'person02'}, readJson);
		$('#readPerson03').click({doc:'person03'}, readJson);
		$('#readPerson04').click({doc:'person04'}, readJson);
		$('#readPerson05').click({doc:'person05'}, readJson);
		$('#readGrid').click({doc:'grid'}, readJson);
		$('#readGameData').click({doc:'gameData'}, readJson);
		$('#readWeek01').click({doc:'week01asdf.htm'}, readHtml);
		$('#readWeek02').click({doc:'week02.htm'}, readHtml);
		$('#readWeek03').click({doc:'week03.htm'}, readHtml);
        $('#readWeek04').click({doc:'week04.htm'}, readHtml);
        $('#readWeek05').click({doc:'week05.htm'}, readHtml);
        $('#readWeek06').click({doc:'week06.htm'}, readHtml);
        $('#readWeek07').click({doc:'week07.htm'}, readHtml);
        $('#readWeek08').click({doc:'week08.htm'}, readHtml);
        $('#readWeek09').click({doc:'week09.htm'}, readHtml);
        $('#readWeek10').click({doc:'week10.htm'}, readHtml);
        $('#readImage').click(readImage);
	}
	
	var clear = function(event) {
	   if (event.data.item === "debug") {
	       $('#debugList').empty();
	   } else {
	       $('#showDoc').empty();
	   }  
	};
	
	var loadBitMap = function() {
		var img = $("<img />").attr('src', 'Images/cscGarden.png').load(function() {
		// var img = $("<img />").attr('src', 'http://localhost:5984/couchdocs01/cscGarden.png/cscGarden.png').load(function() {
            if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                alert('Could not load image!');
            } else {
            	$('#showDoc').empty();
                $("#showDoc").append(img);
            }
        });        
	}
	
	var readImage = function(event) {
		showDebug('readImage called');
		$.ajax({
            type : 'GET',
            url : '/couchReadImage',
            cache : false,
            data: { 'docName': 'cscGarden.png' },
            dataType : "json",
            success : function(doc) {
            	loadBitMap();
            },
            error: function(err) {
                showDebug(err.responseText);
            }
        });
	}
	
	var readJson = function(event) {
		showDebug('ReadJson called with: <strong>' + event.data.doc + '</strong>');
		var app = new ELF.own.AjaxBase();
		app.readJson(event.data.doc, function(data) {
			try {
			    var result = JSON.stringify(data);
				showDebug(result);
			} catch(err) {
				showDebug(err);
			} 
		},
		function(request, ajaxOptions, thrownError) {
			showDebug(request.responseText);
		});
	};
	
	var readHtml = function(event) {
	    showDebug('ReadHtml called with: <strong>' + event.data.doc + '</strong>');
	    $.ajax({
            type : 'GET',
            url : '/couchReadAttached',
            cache : false,
            data: { 'docName': event.data.doc },
            dataType : "html",
            success : function(doc) {
                $('#showDoc').empty();
                $('#showDoc').append(doc);        
            },
            error: function(err) {
                var responseText = JSON.parse(err.responseText);
                showDebug(responseText.description);
            }
        });
	};

    var newPage = function() {
        window.location.href = '/couchReadHtml?docName=index.html';
    };
    
	var showDebug = function(value) {
		$('#debugList').append('<li>' + value + '</li>');
	}
	
	return App;
	
})();

$(document).ready(function() {
	"use strict";
	
	new ELF.own.App();
});
