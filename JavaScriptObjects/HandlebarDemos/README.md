HandleBar Demos
---------------
 
 
Example 01: Use HandleBars to change a paragraph tag.  
Example 02: Use HandleBars to dynamically change the CSS and a paragraph tag.  
Example 03: Use HandleBars to add items to list.  
Example 04: Read JSON  
Example 05: Read JSON and display with HandleBars  
 
![This is the caption](img/Image00_calvert.png)

	/**
	 * @author Charlie Calvert
	 */
	
	/*jshint jquery:true, browser: true */
	/*global Handlebars: false */
	
	function addNames(initFirstName, initLastName) {
	    'use strict';
	            
	    var script = $("#nameItem").html(),    
	    template=Handlebars.compile(script);    
	    
	    var result = template({
	        firstName: initFirstName,
	        lastName: initLastName
	    });    
	    
	    $("#nameDiv").append(result); 
	}
	
	$(document).ready(function() {
	  "use strict";
	  
	  $.getJSON('index.json', function(data) {
	      $.each(data, function(i, item) {
	         addNames(item.firstName, item.lastName); 
	      });
	      addNames(data[0].firstName, data[0].lastName);
	  }).success(function() { console.log("csc: success. Loaded index.json"); })
	    .error(function(jqXHR, textStatus, errorThrown) { alert("error calling JSON. Try JSONLint or JSLint: " + textStatus); })
	    .complete(function() { console.log("csc: completed call to get index.json"); });
	});


