// var assert = require('assert');

function assert(condition, message) {
    if (!condition) {
		$("#debug").append("<li>Error: " + message + "</li>");
	} else {
		$("#debug").append("<li>All's well: " + message + "</li>");
	}

}

function showVector(vector) {
	console.log(vector.x);
	console.log(vector.y);
	console.log(vector.z);
	$("#debug").append("<li>" + vector.x + "</li>");
	$("#debug").append("<li>" + vector.y + "</li>");
	$("#debug").append("<li>" + vector.z + "</li>");
}

function show(x, y) {
	showVector(x);
	showVector(y);
}

function showEqual(x, y, message) {
	assert(x.x === y.x, message);
	assert(x.y === y.y, message);
	assert(x.z === y.z, message);
}

window.onload = function() {
	var a = new THREE.Vector3(1, 2, 3);
	var b = new THREE.Vector3(1, 2, 3);
	show(a, b);
	showEqual(a, b, 'expected success');
	b.x = 5;
	show(a, b);
	showEqual(a, b, 'Hurrah! We got an error and we expected one of these three to fail!');

	var y = new THREE.Vector3(1, 2, 3);
	var x = y;
	show(x, y);
	showEqual(x, y, 'expected success');
	x.x = 12;
	show(x, y, 'expected success');
	showEqual(x, y, 'expected success');

	var m = new THREE.Vector3(1, 2, 3);
	var a = m.x;
	a = 12;
	assert(a !== m.x, 'Expected success');
	showVector(m);
}