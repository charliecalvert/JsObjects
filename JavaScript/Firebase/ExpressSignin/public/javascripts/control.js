/**
 * Created by Administrator on 2017/6/6.
 * @see: https://developer.mozilla.org/en-US/blog/javascript-shape-drawing-function/
 * @see: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
 * @see: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
 * 
 */
$(document).ready(function() { 'use strict';

const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;

const ctx = canvas.getContext("2d");
const cx = 200;
const cy = 100;


// set the radius of the hexagon
const radius = 50;

// move the canvas to the center position
ctx.translate(cx, cy);

for (let i = 0; i < 6; i++) {
  // calculate the rotation
  const rotation = (Math.PI / 3) * i;

  // for the first point move to
  if (i === 0) {
    ctx.moveTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
  } else {
    // for the rest draw a line
    ctx.lineTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
  }
}

// close path and stroke it
ctx.closePath();
ctx.stroke();
Copy to Clipboard

});
