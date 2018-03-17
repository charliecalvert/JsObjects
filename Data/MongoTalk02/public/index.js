function appendToList(text) {
    var ul = document.getElementById("mongoData");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
}

function showData() {
    fetch('/read')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            for (var i = 0; i < json.length; i++) {
                appendToList(JSON.stringify(json[i]));
            }
        })
}

function getCount() {
    fetch('/count')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            appendToList(JSON.stringify(json));
        })
}


window.onload = function() {
    showData();
    getCount();
};