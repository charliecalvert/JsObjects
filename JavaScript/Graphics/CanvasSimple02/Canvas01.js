var context;
var context02;
var image;

function loadImage(callback) {
    'use strict';
	console.log('loadImage called');
	image = new Image();
	image.onload = function() {
		callback(image);
	};
	image.src = "./cscGarden.png";
}



function doLoad() {
    'use strict';
	console.log('doLoad called');
	loadImage(function(image) {
		const blitButton = document.getElementById('blitButton');
		blitButton.disabled = false;
		document.getElementById("drawButton").disabled = false;
		document.getElementById("loadButton").disabled = true;
	});

	doLoader();
}

function drawMe(image, x, y) {
	const rectSize = 25;
	context.drawImage(image, rectSize, 0, rectSize, rectSize,
		x, y, rectSize, rectSize);
	blitButton.disabled = false;
}
function doLoader() {
    'use strict';
	console.log('doLoader called');

	image = new Image();
	image.onload = () => {
		drawMe(image, 0, 0)
	};
	image.src = "cscGarden.png";
}

function draw() {
    'use strict';
	context.drawImage(image, 0, 0);
	context02.drawImage(image, 0, 0);
}

function blitTest() {
    'use strict';
	console.log('blitTest called');
	// var imageData = context.getImageData(0, 0, 25, 25);
	for (let j = 0; j < 6; j++)
		for (let i = 0; i < 12; i++)
		{
			context.drawImage(image, 0, 50, 25, 25, i * 25, j * 25, 25, 25);
			context02.drawImage(image, 0, 25, 25, 25, i * 25, j * 25, 25, 25);
		}
}

window.onload = () => {
    'use strict';

	console.log('Document Ready called');

	// Without jQuery
	var canvas01 = document.getElementById('canvas01');
	canvas01.width = 250;
	context = canvas01.getContext('2d');

	// Without jQuery
	var canvas02 = document.getElementById('canvas02');;
	canvas02.width = 250;
	context02 = canvas02.getContext('2d');
};

