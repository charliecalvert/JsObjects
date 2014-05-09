/**
 * @author Charlie Calvert
 */

define(function(require) {
	'use strict';
    var jquery = require("jquery-2.1.0.min");
    var SailBoatFactory = require("SailBoatFactory");
    
    var boatFactory = new SailBoatFactory();
    var sloop = boatFactory.createBoat({
        boatType : "sloop",
        color : "yellow",
        sailCount : 3
    });
    
    $('#boatType').html(sloop.constructor.name);
    $('#sailColor').html(sloop.color);
    $('#sailCount').html(sloop.sailCount);    
});
