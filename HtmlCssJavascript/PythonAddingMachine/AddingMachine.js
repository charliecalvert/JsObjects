var addingMachine = new AddingMachine();

$('document').ready(function() {
	$('body').addClass('ui-widget-content');
	$('input:button, input:submit').button();	

});

function AddingMachine()
{
	this.addNumbers = function()
	{
		var operanda = $("#operanda").val();
		var operandb = $("#operandb").val();
		var sum = parseInt(operanda) + parseInt(operandb);		
		$("#answer").val(sum);
	}
}


$(function() {
});

