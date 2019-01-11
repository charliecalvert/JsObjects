var Control = (function() {

    const ids= ['response', 'route', 'result', 'request', 'params', 'query', 'id'];

	// Constructor
    function buttonClickHandler (event) {
        var query = event.target.dataset.query;
        var id = event.target.id;
        var route = '/routeParams/' + id + query;
        document.getElementById('clientRoute').textContent = 'ClientRoute: ' + route;

        fetch(route)
            .then((json) => {
                return json.json();
            })
            .then((response) => {
                document.getElementById(ids[1]).textContent = "ROUTE: " + response.route;
                document.getElementById(ids[2]).textContent = "RESULT: " + response.result;
                document.getElementById(ids[5]).textContent = "QUERY: " + JSON.stringify(response.query);
                document.getElementById(ids[4]).textContent = "PARAMS: " + JSON.stringify(response.params);
                document.getElementById(ids[6]).textContent = "ID: " + response.id;
            })
            .catch(err => {
                alert(err);
            });
    }

	function Control() {
	    const buttonActions = document.getElementsByTagName('button');
	    for (const button of buttonActions) {
	        button.onclick = buttonClickHandler;
        }
	}

    function clear() {
	    for (const id of ids) {
            document.getElementById(id).innerHTML = '';
        }
    }


	return Control;

}());

window.onload = function() {
	'use strict';
	var control = new Control();
};
