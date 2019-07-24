const App = (function () {
    'use static';

    let myCanvas;
    let context;

    function App() {
        createCanvas();
        drawBlue();
        const switch01 = document.getElementById('switch01');
        const switch02 = document.getElementById('switch02');
        switch01.onclick = drawGreen;
        switch02.onclick = drawBlue;
        window.onresize = () => {
            const div = document.getElementById('div01');
            var oldcanv = document.getElementById('myCanvas');
            div.removeChild(oldcanv);
            createCanvas();
            drawBlue();
        };

    }

    const createCanvas = function () {
        const body = document.body;
        body.style.overflow = "hidden";
        myCanvas = document.createElement("canvas");
        myCanvas.id = "myCanvas";


        const div = document.getElementById('div01');

        div.append(myCanvas);
        myCanvas.width = div.clientWidth;
        myCanvas.height = div.clientHeight;


        context = myCanvas.getContext("2d");

    };

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
    }

    const drawBlue = function () {

        context.lineWidth = 20;
        context.strokeStyle = "blue";
        context.fillStyle = "aqua";
        context.fillRect(0, 0, myCanvas.width, myCanvas.height);
        context.strokeRect(0, 0, myCanvas.width, myCanvas.height);

        context.fillStyle = "blue";
        context.font = "24px Comic Sans MS ";

        //const w = myCanvas.width / 10;
        //context.fillText("The bird flew through the jungle", 20, 35);

        wrapText(
            context,
            "The bird flew through the jungle on golden wings.",
            20,
            35,
            myCanvas.width - 25,
            25);
    };

    /*const hide = function() {
        myCanvas.click = function() {
            myCanvas.style.display = 'none';
            document.body.style.overflow = "auto";
        };
    };*/

    const drawGreen = function () {

        context.lineWidth = 20;
        context.strokeStyle = "green";
        context.fillStyle = "lightgreen";
        context.fillRect(0, 0, myCanvas.width, myCanvas.height);
        context.strokeRect(0, 0, myCanvas.width, myCanvas.height);
        context.fillStyle = "green";
        context.font = "24px Comic Sans MS";
        context.fillText("The big cat walked far", 20, 35);
    };

    return App;
})();

window.onload = () => {
    'use strict';
    new App();
};
