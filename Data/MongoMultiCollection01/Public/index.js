var App = {
	mongoQuery : null,
	init : function() {
		'use strict';
		this.mongoQuery = new this.MongoQuery();
	}
};

App.MongoQuery = (function showData() {
	'use strict';
	var collections = [ 'multiPresidents', 'multiMusicians' ];

	function MongoQuery() {
		$('#presidents').click({
			collectionName : collections[0]
		}, read);
		$('#musicians').click({
			collectionName : collections[1]
		}, read);
		$('#deleteData').click(deleteData);
		$('#insertData').click(insertData);
		$('#clearList').click(clearList);
	}

	var clearList = function(event) {
		$("#mongoData").empty();
	};

	var read = function(event) {
		$.getJSON('/read', {
			collectionName : event.data.collectionName
		}, function(data) {
			console.log(data);
			for ( var i = 0; i < data.length; i++) {
				$("#mongoData").append(
						'<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var insertData = function() {
		for ( var i = 0; i < collections.length; i++) {
			doInsert('/insertData', i);
		}
	};

	var doInsert = function(route, index) {
		$.getJSON(route, {
			collectionName : collections[index]
		}, function(data) {
			console.log(data);
			for ( var i = 0; i < data.length; i++) {
				$("#mongoData").append(
						'<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var deleteData = function() {
		for ( var i = 0; i < collections.length; i++) {
			doInsert('/deleteData', i);
		}
	};

	return MongoQuery;
}());

$(document).ready(function() {
	'use strict';
	App.init();
});
