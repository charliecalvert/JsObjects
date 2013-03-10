
function Presidents(displayInit) {
	that = this;	
	display = displayInit;
	presidentMode = false;
	selectedItem = '';
};

var presidents = new Presidents(new Display());

$(document).ready(function() {
	$('button:#listDomains').click(presidents.listDomains);
	$('button:#createDomain').click(presidents.createDomain);
	$('button:#dirname').click(presidents.dirName);
	$('button:#port').click(presidents.port);
	$('button:#getPresidents').click(presidents.getPresidents);
	$('button:#getitem').click(presidents.getItem);
	$('button:#putitem').click(presidents.putItem);
	$('button:#update').click(presidents.update);
	$('button:#deleteitem').click(presidents.deleteItem);
	$('button:#deleteAll').click(presidents.deleteAll);
	$('button:#listAllItemNames').click(presidents.listAllItemNames);
	$('button:#addListOfPresidents').click(presidents.addListOfPresidents);
	$('button:#testAzureSimpleDb').click(presidents.testAzureSimpleDb);	
});

Presidents.prototype.radioSelection = function()
{
	selectedItem = $("input[name=responseGroup]:checked").attr('id');
	var firstName = $("input[name=responseGroup]:checked").attr('first');
	var middleName = $("input[name=responseGroup]:checked").attr('middle');
	if (middleName !== undefined)
		middleName = ($.trim(middleName) ==='-' ? '' : $.trim(middleName));
	var lastName = $("input[name=responseGroup]:checked").attr('last');
	display.showDebug(selectedItem);
	$('#firstName').val(firstName);
	$('#middleName').val(middleName);
	$('#lastName').val(lastName);
};

Presidents.prototype.clearResponse = function(debugMessage)
{
	presidentMode = false;
	display.clearResponse();
	display.showDebug(debugMessage);
};

Presidents.prototype.listAllItemNames = function() 
{
	that.clearResponse('Called List AllItemNames');
	request = $.ajax(
	{
		type: "get",
		url: '/listItems',
		cache: false,
		dataType: "json",
		success: function (data) {
			$(data).each(function() {
				display.showResponse(this['$ItemName']); // show the list
			});
		},
		error: display.showError
	});
};

Presidents.prototype.listDomains = function() 
{
	that.clearResponse('List Domains called');
	request = $.ajax(
	{
		type: "get",
		url: '/listDomains',
		cache: false,
		dataType: "json",
		success: function (data) {
			$(data).each(function() {
				display.showResponse(this); // show the list
			});
		},
		error: display.showError
	});
};

Presidents.prototype.testAzureSimpleDb = function()
{	
	window.location.replace('/testAzureSimpleDb');	
};

Presidents.prototype.createDomain = function()
{
	that.clearResponse("Create Domain Called");
	that.simpleQuery('/createDomain');
};

Presidents.prototype.port = function()
{
	that.clearResponse("Get Port Called");
	that.simpleQuery('/port');
};

Presidents.prototype.dirName = function()
{
	that.clearResponse("Dir Name Called");
	that.simpleQuery('/dirname');
};

Presidents.prototype.addListOfPresidents = function()
{
	that.clearResponse("Add List of Presidents Called");
	that.simpleQuery('/addListOfPresidents');
};

Presidents.prototype.deleteAll = function()
{
	that.clearResponse("Delete all Presidents Called");
	that.simpleQuery('/deleteAll');
};

Presidents.prototype.simpleQuery = function(query) 
{	
	request = $.ajax(
	{
		type: "get",
		url: query,
		cache: false,
		dataType: "json",
		success: function (data) {
			display.showResponse(data.result);
		},
		error: display.showError
	});
};

Presidents.prototype.getPresidents = function(callback) {
	that.clearResponse("Get Presidents called");
	presidentMode=true;	
	request = $.ajax(
	{
		type: "get",
		url: '/history',
		cache: false,
		dataType: "json",
		success: function (data) {
			$(data).each(function() {
				$(this).each(function() {
					display.displayRow(this);	
				});				
			});
			$("input[name=responseGroup]:radio").click(that.radioSelection);
			$("input[name=responseGroup]:radio:first").attr('checked', true);
			that.radioSelection();
			if (typeof(callback) == 'function') {
				display.showDebug("Callback coming");
				callback();
			}
		},
		error: display.showError
	});
};


/*Presidents.prototype.displayRow = function(row) {
	display.showResponse(row.$ItemName + " " + row.FirstName + " " + row.LastName);
};*/

Presidents.prototype.getItem = function() {
	that.clearResponse('called getitem');
	query = "itemName=First";
	request = $.ajax(
	{
		type: "get",
		data: query,
		url: '/getitem',
		cache: false,
		dataType: "json",
		success: function (data) {
			that.displayRow(data);
		},
		error: display.showError
	});	
};

function isEmptyString(value){
	return ( (!value) || (value === "") );
}

function readyForUpdate(firstName, lastName) {
	var failure = isEmptyString(firstName) || isEmptyString(lastName);
	return !failure;
}

function getNames() {
	var names = {};
	names.firstName = $.trim($('#firstName').val());
	names.middleName = $.trim($('#middleName').val());
	names.lastName = $.trim($('#lastName').val());
	if ( !readyForUpdate(firstName, lastName)) {
		alert("Please enter a name");
		return null;
	}
	return names;
}

Presidents.prototype.putItem = function() {
	names = getNames();	
	if (names) {
		that.insertRecord(names.firstName, names.middleName, names.lastName);
	}
};

Presidents.prototype.update = function() {
	if (!presidentMode) {
		alert("You must select Get President before updating.");
		return;
	}

	var names = getNames();
	if ((names) == null) return
	
	var query = "uuid=" + selectedItem + 
		"&firstName=" +	names.firstName + 
		'&middleName=' + names.middleName +
		"&lastName=" + names.lastName;
	
	request = $.ajax(
	{
		type: "get",
		data: query,
		url: '/update',
		cache: false,
		dataType: "json",
		success: function (data) {
			display.showResponse("success");
		},
		error: display.showError
	});
};


Presidents.prototype.insertRecord = function(firstName, middleName, lastName) {
	display.showDebug("inserting: " + firstName + " " + middleName + " " + lastName);
	that.clearResponse('called putitem');	
	var query = "firstName=" + firstName +
		"&middleName=" + middleName + 
		"&lastName=" + lastName;
	request = $.ajax(
	{
		type: "get",
		data: query,
		url: '/putItem',
		cache: false,
		dataType: "json",
		success: function (data) {
			display.showResponse("success");
		},
		error: display.showError
	});
}

Presidents.prototype.deleteItem = function() {
	if (!presidentMode) {
		alert("You must select Get Presidents before trying to delete a president");
		return;
	}
	that.clearResponse('Called delete item: ' + selectedItem);	
	query = "itemName=" + selectedItem;
	request = $.ajax(
	{
		type: "get",
		data: query,
		url: '/delete',
		cache: false,
		dataType: "json",
		success: function (data) {
			display.showResponse("success");
		},
		error: display.showError
	});
};

function Display()
{	
	// We have to give it a unique name in this context
	thisDisplay = this;	 
}

Display.prototype.clearResponse = function()
{
	$('#response').empty();
};

Display.prototype.isValidRow = function(row) {
	return !( (row.MiddleName === undefined) || 
			(row.MiddleName === '[object Object]') || 
			(row.MiddleName === '-') );	
};


Display.prototype.displayRow = function(row) {
	var middle = (!thisDisplay.isValidRow(row)) ? '' : row.MiddleName;
	var displayMiddle = (!thisDisplay.isValidRow(row)) ? '-' : row.MiddleName;	
	textToDisplay = row.FirstName + " " + middle + " " + row.LastName;
	$('#response').append('<li><input id=' + row.$ItemName + 
			  ' first=' + row.FirstName +
			  ' middle=' + displayMiddle + 
			  ' last=' + row.LastName + 
			  ' type=radio name=responseGroup />' + 
			textToDisplay + '</li>');	
};

Display.prototype.showResponse = function(textToDisplay)
{
	$('#response').append('<li>' + textToDisplay + '</li>');
};

Display.prototype.showDebug = function(textToDisplay)
{
	$("#debug").append('<li>' + textToDisplay + '</li>');
};

Display.prototype.showError = function(request, ajaxOptions, thrownError) {
	thisDisplay.showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
	thisDisplay.showDebug(request.status);
	thisDisplay.showDebug(request.statusText);
	thisDisplay.showDebug(request.getAllResponseHeaders());
	thisDisplay.showDebug(request.responseText);
};

