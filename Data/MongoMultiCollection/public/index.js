const App = {
    mongoQuery: null,
    init: function() {
        'use strict';
        this.mongoQuery = new this.MongoQuery();
    }
};

App.MongoQuery = (function showData() {
    'use strict';
    const collections = ['multiPresidents', 'multiMusicians'];

    function MongoQuery() {
        document.getElementById('presidents').onclick = () => read(0);
        document.getElementById('musicians').onclick = () => read(1);
        document.getElementById('deleteData').onclick = () => deleteData();
        document.getElementById('insertData').onclick = () => insertData();
        document.getElementById('clearList').onclick = () => utils.clearList();
    }

    const read = function(index) {
        const params = '?collectionName=' + collections[index];
        fetch('/read' + params, {
            method: 'get'
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                utils.clearList();
                for (let i = 0; i < result.length; i++) {
                    utils.appendToList(result[i]);
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    const insertData = function() {
        for (let i = 0; i < collections.length; i++) {
            doInsert('/insertData', i);
        }
    };

    const doInsert = function(route, index) {
        const params = '?collectionName=' + collections[index];
        fetch(route + params, {
            method: 'get'
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    utils.appendToList(JSON.stringify(result[i]));
                }
            })
            .catch(function(err) {
                console.log('error');
            });
    };

    const deleteData = function() {
        for (let i = 0; i < collections.length; i++) {
            doInsert('/deleteData', i);
        }
    };

    return MongoQuery;
})();

window.onload = () => App.init();
