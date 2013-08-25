var App = (function() {

	var myCanvas = null;
	var context = null;
	
	function App() {
		myCanvas = document.getElementById('myCanvas');
		context = myCanvas.getContext('2d');
		drawShape();

		$('#sizeButton').click(fixCanvas);
	}

	var drawShape = function() {
		context.save();	
		context.rect(10, 10, 280, 130);
		context.lineWidth = 7;
		context.strokeStyle = 'black';
		context.stroke();
		context.restore();
}

	var fixCanvas = function() {
		myCanvas.width = 600;
		myCanvas.height = 400;
		drawShape();
	}
		
	return App;
	
})();

$(document).ready(function() {
	new App();
});