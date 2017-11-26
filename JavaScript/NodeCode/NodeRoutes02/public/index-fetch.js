const RouteMaster = (function() {
    'use strict';
    // Constructor
    function RouteMaster() {
        document.getElementById('getNine').onclick = getNine;
        document.getElementById('getNineParse').onclick = getNineParse;
        document.getElementById('add').onclick = add;
        document.getElementById('addPost').onclick = addPost;
    }

    const getNine = function() {
        const nineResult = document.getElementById('getNineResult');
        fetch('/getNine')
            .then((result) => result.json())
            .then((returnValue) => {
                nineResult.textContent = JSON.stringify(returnValue);
            })
            .catch((error) => { console.log(error); })
    };

    const getNineParse = function() {
        const nineResult = document.getElementById('getNineParseResult');
        fetch('/getNine')
            .then((result) => {
                return result.json();
            })
            .then((returnValue) => {
                nineResult.innerHTML = "The value sent from the server is: <strong>" + returnValue.result + "</strong>";
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const encodeParams = (url, params) => {
        const encodeUri = encodeURIComponent;
        return url + '?' + Object.keys(params)
            .map(key => encodeUri(key) + '=' + encodeUri(params[key]))
            .join('&');
    };

    function getParams(operandA, operandB) {

        const params = {
            "operandA": operandA,
            "operandB": operandB
        };
        return {operandA, operandB, params};
    }

    const add = function() {
        const operandA = document.getElementById('operandA').value;
        const operandB = document.getElementById('operandB').value;

        const url = encodeParams('/add', getParams(operandA, operandB));
        fetch(url)
            .then((checkCall) => {
                return checkCall.json();
            })
            .then((data) => {
                document.getElementById("addResult").textContent =
                    operandA + " + " + operandB + " = " + data.result;
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const addPost = function() {
        const operandA = document.getElementById('operandAPost').value;
        const operandB = document.getElementById('operandBPost').value;

        const params = getParams(operandA, operandB);

        fetch('/add', {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            .then(function(result) {
                return result.json();
            })
            .then(function(result) {
                document.getElementById("addResultPost").textContent = operandA + " + " + operandB + " = " + result.status;
            })
            .catch(function(error) {
                console.log(error);
            });

    };

    // Return constructor
    return RouteMaster;
}());

function create() {
    'use strict';
    new RouteMaster();
}

window.onload = create;
