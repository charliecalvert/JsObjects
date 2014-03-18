var App = {
    mongoQuery : null,
    init : function() {
        this.mongoQuery = new this.MongoQuery();
    }
};

App.MongoQuery = ( function showData() {
        var collections = ['multiPresidents', 'multiMusicians'];

        function MongoQuery() {
            $('#presidents').click({ collectionName : collections[0] }, read);
            $('#musicians').click({ collectionName : collections[1] }, read);
            $('#deleteData').click(deleteData);
            $('#insertData').click(insertData);
            $('#clearList').click(clearList);
        }
        
        var clearList = function(event) {
            $("#mongoData").empty();
        };

        var read = function(event) {
            $.getJSON('/read', { collectionName : event.data.collectionName }, 
                function(data) {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
                    }
                }
            );
        };

        var insertData = function() {
            for (var i = 0; i < collections.length; i++) {
                $.getJSON('/insertData', {
                    collectionName : collections[i]
                }, function(data) {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
                    }
                });
            }
        };

        var deleteData = function() {
            for (var i = 0; i < collections.length; i++) {
                $.getJSON('/deleteData', {
                    collectionName : collections[i]
                }, function(data) {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
                    }
                });
            }
        };

        return MongoQuery;
    }());

$(document).ready(function() {
    App.init();
});
