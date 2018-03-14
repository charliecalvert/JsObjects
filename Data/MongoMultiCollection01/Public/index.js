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
        document.getElementById('presidents').onclick=() => read(0);
        document.getElementById('musicians').onclick=() => read(1);
		document.getElementById('deleteData').onclick=() => deleteData();
        document.getElementById('insertData').onclick=() => insertData();
        document.getElementById('clearList').onclick=() => clearList();
	}

	var clearList = function(event) {

        document.getElementById("mongoData").innerHTML = "";

    };

    function appendToList(text) {
        var ul = document.getElementById("mongoData");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
    }

	var read = function(index) {
        var params = "?collectionName=" + collections[index];
        fetch('/read'+params, {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                appendToList(JSON.stringify(result[i]));
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
                for (let i = 0; i < result.length; i++) {
                    appendToList(JSON.stringify(result[i]));                    
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

window.onload = () => App.init();

