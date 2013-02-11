var jQueryTests = new JQueryTests();

function JQueryTests()
{
	this.addNumbers = function()
	{
		var operanda = $("#operanda").val();
		var operandb = $("#operandb").val();
		var sum = parseInt(operanda) + parseInt(operandb);
		$("#result").html(sum);
		$("#answer").val(sum);
	}
}