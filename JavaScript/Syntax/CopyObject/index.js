$(document).ready(function() {
	console.log(myObject.add());
	var newObject = copyObject(myObject);
	console.log(newObject.add());
    // Shallow copy
    var newObject1 = jQuery.extend({}, myObject);
    // Deep copy
    var newObject2 = jQuery.extend(true, {}, myObject);
});
