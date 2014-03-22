/**
 * @author Charlie Calvert
 */

// Maintain a list of MongoDb collections
var CollectionList = (function() { 'use strict';

    var collectionList = [];
    
    function CollectionList() {
        
    }
    
    var message = function(message) {
        console.log("------------");
        console.log(message);
        console.log("------------");
    };
    
    // Given a collection name, get the index of it in the collection list
    var getCollectionListIndex = function(collectionName) {
        for (var i = 0; i < collectionList.length; i++) {
            if (collectionName === collectionList[i].collectionName) {
                return i;
            }
        }  
        return - 1;
    };
    
    // Maintain a list of collections
    CollectionList.prototype.getCollectionByName = function(database, collectionName) {
        message("Collection List Length: " + collectionList.length);        
        var index = getCollectionListIndex(collectionName);
        
        if (index === -1) {
            var collection = database.collection(collectionName);
            collectionList.push(collection);            
            return collection;
        } else {
            return collectionList[index];
        }       
    };
    
    return CollectionList;   
}());

exports.CollectionList = new CollectionList();