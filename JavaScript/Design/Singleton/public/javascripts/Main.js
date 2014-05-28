/**
 * New node file
 */

/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
      'jquery': 'jquery-2.1.1',
    }
});

/*
 * Do this two step dance with two requires when you want to load jasmine.
 */ 
require(['jquery', "SingletonModule"], 
	function(jq, SingletonModule) {
    'use strict';
    console.log("Main called.");    
    $(document).ready(function() {
    	var singleton = new SingletonModule();
    	singleton.display("bar");
    });
});

