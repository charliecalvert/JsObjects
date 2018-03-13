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
        var params = "?collectionName=" + event.data.collectionName;
        fetch('/read'+params, {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result);
            for ( var i = 0; i < result.length; i++) {
                $("#mongoData").append(
                    '<li>' + JSON.stringify(result[i]) + '</li>');
            }
        }).catch(function(err) {
            console.log('error');
        });
	};

	var insertData = function() {
		for ( var i = 0; i < collections.length; i++) {
			doInsert('/insertData', i);
		}
	};

	var doInsert = function(route, index) {
        const params = "?collectionName=" + collections[index];
        fetch(route+params, {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result);
                for ( let i = 0; i < result.length; i++) {
                    $("#mongoData").append(
                        '<li>' + JSON.stringify(result[i]) + '</li>');
                }
        }).catch(function(err) {
            console.log('error');
        });
	};

	var deleteData = function() {
		for ( let i = 0; i < collections.length; i++) {
			doInsert('/deleteData', i);
		}
	};

	return MongoQuery;
}());

$(document).ready(function() {
	'use strict';
	App.init();
});
