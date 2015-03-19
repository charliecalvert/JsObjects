var Control = (function() {

	// Constructor
	function Control() {
        $("button").click(function(event) {
            var id = event.target.id;
            var route = 'http://52.11.190.176:30025/routeParams/' + id;
            $("#clientRoute").html('ClientRoute: ' + route);
            $.getJSON(route, function(response) {
                // $('#response').html(JSON.stringify(response));
                $('#route').html("ROUTE: " + response.route);
                $('#result').html("RESULT: " + response.result);
                $('#query').html("QUERY: " + JSON.stringify(response.query));
                $('#params').html("PARAMS: " + JSON.stringify(response.params));
                $('#id').html("ID: " + response.id);

                // elf.utilities.showMessage(choice, true);
            });
        });
	}

    function clear() {
        $('#response').html('');
        $('#route').html('');
        $('#result').html('');
        $('#request').html('');
        $('#params').html('');
    }


	return Control;

}());

$(document).ready(function() {
	'use strict';
	var control = new Control();
});
