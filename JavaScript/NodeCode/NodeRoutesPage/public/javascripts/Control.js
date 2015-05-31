var Control = (function() {



	// Constructor
	function Control() {
        //var ajax = new elf.Ajax();
        runPage();
	}

    function clear() {
        $('#response').html('');
        $('#route').html('');
        $('#result').html('');
        $('#request').html('');
        $('#params').html('');
    }

    function runPage() {
        page('/', function() {
            clear();
            $('#response').html("You clicked the root link.");
        });

        page('/simple', function() {
            clear();
            $('#response').html("You clicked the simple link.");
        });

        page('/users/', function() {
            clear();
            $('#response').load('/SimpleUser');
            $('#response').html('Simple user');
        });

        page('/users/:id', function(request) {
            clear();
            var id = request.params.id;
            var choice = ('Param: ' + id);
            $.getJSON('/users/' + id, function(response) {
                $('#response').html(JSON.stringify(response));
                $('#route').html(response.route);
                $('#result').html(response.result);
                $('#request').html(response.request);
                $('#params').html(response.params);
                elf.utilities.showMessage(choice, true);
            });
        });

        page();
    }

    /*
	function addNames(initFirstName, initLastName) {
		'use strict';

		var script = $("#nameItem").html(), template = Handlebars
				.compile(script);

		var result = template({
			firstName : initFirstName,
			lastName : initLastName
		});

		$("#nameDiv").append(result);
	}*/
	
	return Control;

}());

$(document).ready(function() {
	'use strict';
	var control = new Control();
});
