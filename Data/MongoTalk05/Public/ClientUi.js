/**
 * @author Charlie Calvert
 */

define('ClientUi', function() { 'use strict';

	function ClientUi() {
		$('#intro').load("Public/Pieces.html #introTemplate");
		$('#buttonBasic').load("Public/Pieces.html #buttonTemplate", function() {
			$("#readTwo").click(readTwo);
			$("#newRecord").click(insertNewDocument);
			$("#showData").click(showData);
			$("#readRecords").click(readCountDocuments);
			$("#clearList").click(clearList);
			$('#readAll').click(readAll);
			$('#removeAll').click(removeAll);
		});
	}

	var clearList = function() {
		$("#mongoData").empty();
	};

	var displayDocument = function(document) {
		$('#firstName').html(document.firstName);
		$('#lastName').html(document.lastName);
		$('#address').html(document.address);
		$('#city').html(document.city);
		$('#state').html(document.state);
		$('#zip').html(document.zip);
	};

	var displayList = function(data) {
		clearList();
		for (var i = 0; i < data.length; i++) {
			$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
		}
	};

	var insertNewDocument = function() {
		$.publish('insertNewDocument', function(newData, mongoData) {
			displayDocument(newData[0]);
			displayList(mongoData);
		});
	};

	var readAll = function() {
		$.publish('readAll', function(data) {
			displayDocument(data[0]);
			displayList(data);
		});
	};

	var readCountDocuments = function() {
		var numRequested = $('#numRequested').val();
		$.publish('readCountDocuments', { 
			numRequested: numRequested, 
			callback: function(data) {
				displayDocument(data[0]);
				displayList(data);
			}
		});
	};

	var readTwo = function() {
		$.publish('readTwo', function(data) {
			displayDocument(data[0]);
			displayList(data);
		});
	};

	var removeAll = function() {
		$.publish('removeAll', function(data) {
			alert(JSON.stringify(data));
		});
	};

	var showData = function() {
		var index = $("#userIndex").val();
		$.publish("getDocument", {
			index : index,
			callback : function(document) {
				displayDocument(document);
			}
		});
	};

	return ClientUi;
});

