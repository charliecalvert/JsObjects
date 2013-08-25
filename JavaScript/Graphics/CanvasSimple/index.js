$(document).ready(function() {
	var myCanvas = document.getElementById('myCanvas');
	myCanvas.style.background = '#66AA66';
	myCanvas.width = 600;
	myCanvas.height = 400;
	
	var context = myCanvas.getContext('2d');
	
	context.save();	
	context.rect(10, 10, 280, 130);
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 7;
	context.strokeStyle = 'black';
	context.stroke();
	context.restore();
});