var Presidents = (function(displayInit, initUtilities) {

	var that = this;
	var display = null;
	var presidentMode = false;
	var selectedItem = '';
	var utilities = null;
	var presidentsList = null;

	function Presidents(displayInit, initUtilities) {
		display = displayInit;
		utilities = initUtilities;
	}

	var radioSelection = function() {
		selectedItem = $("input[name=responseGroup]:checked").attr('id');
		var firstName = $("input[name=responseGroup]:checked").attr('first');
		var middleName = $("input[name=responseGroup]:checked").attr('middle');
		if (middleName !== undefined)
			middleName = ($.trim(middleName) === '-' ? '' : $.trim(middleName));
		var lastName = $("input[name=responseGroup]:checked").attr('last');
		display.showDebug(selectedItem);
		$('#firstName').val(firstName);
		$('#middleName').val(middleName);
		$('#lastName').val(lastName);
	};

	var clearResponse = function(debugMessage) {
		presidentMode = false;
		display.clearResponse();
		display.showDebug(debugMessage);
	};

	Presidents.prototype.testAzureSimpleDb = function() {
		window.location.replace('/testAzureSimpleDb');
	};

	Presidents.prototype.addListOfPresidents = function() {
		that.clearResponse("Add List of Presidents Called");
		that.simpleQuery('/adFirstNamedListOfPresidents');
	};

	Presidents.prototype.deleteAll = function() {
		that.clearResponse("Delete all Presidents Called");
		that.simpleQuery('/deleteAll');
	};

	Presidents.prototype.simpleQuery = function(query) {
		request = $.ajax({
			type : "get",
			url : query,
			cache : false,
			dataType : "json",
			success : function(data) {
				display.showResponse(data.result);
			},
			error : display.showError
		});
	};

	var showPresidents = function() {
		$(presidentsList).each(function() {
			$(this).each(function() {
				display.displayRow(this);
			});
		});
	};

	Presidents.prototype.getPresidents = function(callback) {
		clearResponse("Get Presidents called");
		presidentMode = true;
		request = $.ajax({
			type : "get",
			url : '/getPresidents',
			cache : false,
			dataType : "json",
			success : function(data) {
				presidentsList = data;
				showPresidents();
				$("input[name=responseGroup]:radio").click(that.radioSelection);
				$("input[name=responseGroup]:radio:first").attr('checked', true);
				radioSelection();
				if ( typeof (callback) == 'function') {
					display.showDebug("Callback coming");
					callback();
				}
			},
			error : display.showError
		});
	};
	
	Presidents.prototype.savePresidents = function() {
		var data = { details: 'presidents', data: JSON.stringify(presidentsList) };
		$.ajax(
		{
			type: "POST",
			url: '/savePresidents',
			dataType: "json",
			cache: 'False',
			data: data, 
			success: function(data) {
				display.showDebug(data.result);
			},
			error: display.showError			
		});	
	}
	
	Presidents.prototype.getItem = function() {
		that.clearResponse('called getitem');
		query = "itemName=First";
		request = $.ajax({
			type : "get",
			data : query,
			url : '/getitem',
			cache : false,
			dataType : "json",
			success : function(data) {
				that.displayRow(data);
			},
			error : display.showError
		});
	};

	function getNames() {
		var names = {};
		names.firstName = $.trim($('#firstName').val());
		names.middleName = $.trim($('#middleName').val());
		names.lastName = $.trim($('#lastName').val());
		if (!utilities.readyForUpdate(firstName, lastName)) {
			alert("Please enter a name");
			return null;
		}
		return names;
	}


	Presidents.prototype.insertPresident = function() {
		names = getNames();
		if (names) {
			insertRecord(names.firstName, names.middleName, names.lastName);
		}
	};

	Presidents.prototype.update = function() {
		if (!presidentMode) {
			alert("You must select Get President before updating.");
			return;
		}

		var names = getNames();
		if ((names) === null)
			return;

		var query = "uuid=" + selectedItem + "&firstName=" + names.firstName + '&middleName=' + names.middleName + "&lastName=" + names.lastName;

		request = $.ajax({
			type : "get",
			data : query,
			url : '/update',
			cache : false,
			dataType : "json",
			success : function(data) {
				display.showResponse("success");
			},
			error : display.showError
		});
	};

	var insertRecord = function(firstName, middleName, lastName) {
		var pName = firstName + " " + middleName + " " + lastName;
		display.showDebug("inserting: " + pName);
		clearResponse('called putitem');
		var president = new ELF.EasyPresident(pName, 5, 6, 7, 8);
		var query = president.toJSON();
		presidentsList.push(query);
		showPresidents();
		/* request = $.ajax({
			type : "get",
			data : query,
			url : '/putItem',
			cache : false,
			dataType : "json",
			success : function(data) {
				display.showResponse("success");
			},
			error : display.showError
		}); */
	};

	Presidents.prototype.deleteItem = function() {
		if (!presidentMode) {
			alert("You must select Get Presidents before trying to delete a president");
			return;
		}
		that.clearResponse('Called delete item: ' + selectedItem);
		query = "itemName=" + selectedItem;
		request = $.ajax({
			type : "get",
			data : query,
			url : '/delete',
			cache : false,
			dataType : "json",
			success : function(data) {
				display.showResponse("success");
			},
			error : display.showError
		});
	};

	return Presidents;

})();

$(document).ready(function() {
	var presidents = new Presidents(new Display(), new Utilities());
	$('button:#dirname').click(presidents.dirName);
	$('button:#port').click(presidents.port);
	$('button:#getPresidents').click(presidents.getPresidents);
	$('button:#getitem').click(presidents.getItem);
	$('button:#insertPresident').click(presidents.insertPresident);
	$('button:#savePresidents').click(presidents.savePresidents);
	$('button:#update').click(presidents.update);
	$('button:#deleteitem').click(presidents.deleteItem);
	$('button:#deleteAll').click(presidents.deleteAll);
	$('button:#listAllItemNames').click(presidents.listAllItemNames);
	$('button:#addListOfPresidents').click(presidents.addListOfPresidents);
	$('button:#testAzureSimpleDb').click(presidents.testAzureSimpleDb);
});

