var context;
var context02;
var image;

function loadImage(callback)
{
	console.log('loadImage called');
	image = new Image();
	image.onload = function() {
		callback(image);
	}
	image.src = "images/cscGarden.png";
}

function doLoad()
{
	console.log('doLoad called');
	loadImage(function(image) {
		$("#blitButton").prop('disabled', false);
		$("#drawButton").prop('disabled', false);
		$("#loadButton").prop('disabled', true);
	});

	doLoader();
}

function doLoader()
{
	console.log('doLoader called');
	image = new Image();
	image.src = "images/cscGarden.png";
	$(image).load(function() {
		$("#blitButton").prop('disabled', false);
	});
}

function draw() {
	context.drawImage(image, 0, 0);
	context02.drawImage(image, 0, 0);
}

function blitTest()
{
	console.log('blitTest called');
	// var imageData = context.getImageData(0, 0, 25, 25);
	for (var j = 0; j < 6; j++)
		for (var i = 0; i < 12; i++)
		{
			context.drawImage(image, 0, 50, 25, 25, i * 25, j * 25, 25, 25);
			context02.drawImage(image, 0, 25, 25, 25, i * 25, j * 25, 25, 25);
		}
}

$('document').ready(function () {
	console.log('Document Ready called');
	
	// Without jQuery
	var canvas01 = document.getElementById('canvas01');
	canvas01.width = 250;
	context = canvas01.getContext('2d');
	
	// With jQuery
	var canvas02 = $('#canvas02');
	canvas02.get(0).width = 250;
	context02 = canvas02.get(0).getContext('2d');
});

