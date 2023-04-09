$(document).ready(function () {
    'use strict';

    // document.getElementById('userInput').setAttribute("data_lpignore", "true");
    const elements = document.getElementsByClassName('no-last-pass');
    /*const elements = document.getElementsByTagName("INPUT"); */
    for (let element of elements) {
        element.setAttribute("data_lpignore", "true");
    }

    document.getElementById('getFeetInMile').onclick = getFeetInMile;
 

    function getFeetInMile() {
        fetch('/getFeetInMile')
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = JSON.stringify(response, null, 4);
            })
            .catch((ex) => {
                console.log('Config load error: ' + ex);
            });
    }

});
