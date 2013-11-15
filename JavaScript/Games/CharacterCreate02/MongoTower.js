/**
 * @author Charlie Calvert
 */

angular.module('mongoTower', ['ngResource'])
.factory('towerData', function($resource) {
	console.log('towerData factory called in MongoTower.js');
	var Tower = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/gameData/:id', {      
      apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',
      /* id: function() {      	
      	return '@_id.$oid';
      }*/
    });

    Tower.prototype.getHitPoints = function() {
      return this.hitPoints;
    };
    
    Tower.prototype.getDamage = function() {
    	return this.damage;
    };

    return Tower;	 
});
