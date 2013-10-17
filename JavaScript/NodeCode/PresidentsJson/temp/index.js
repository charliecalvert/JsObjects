presidents = new Presidents();

function Presidents(option) {
	this.cgiPath = "/cgi-bin/Presidents/";
	this.readXml = this.cgiPath + "PresidentsXmlMySql.py";
	this.postXml = this.cgiPath + "PresidentsXmlMySql.py";
	this.deleteXml = this.cgiPath + "PresidentsXmlMySql.py";
	that = this;
	itemNameChoice = "";
	option = option;
}

Presidents.prototype.readPresidents = function() {
	$("#items").empty();
	$("#debug").empty();
	request = $.ajax({
		type : "GET",
		url : this.readXml,
		cache : false,
		dataType : "xml",
		success : function(xml) {
			var count = 0;
			$(xml).find('president').each(function() {
				var itemName = $(this).find('itemName').text();
				var first = $(this).find('first').text();
				var last = $(this).find('last').text();
				var president = itemName + " " + first + " " + last;
				that.addToList(president, itemName, count++);
			});
			$("input[name=itemGroup]:radio").click(this.radioButtonStateSelection);
		},
		error : function(request, ajaxOptions, thrownError) {
			that.showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			that.showDebug(request.status);
			that.showDebug(request.statusText);
			that.showDebug(request.getAllResponseHeaders());
			that.showDebug(request.responseText);
		}
	});
};

Presidents.prototype.insert = function() {
	var first = $('#firstName').val();
	var last = $('#lastName').val();
	this.postPresidents(first, last);
};

Presidents.prototype.postPresidents = function(first, last) {
	$("#items").empty();
	$("#debug").empty();
	dataRequest = "first=" + first + "&last=" + last;
	this.showDebug(dataRequest);
	request = $.ajax({
		type : "POST",
		data : dataRequest,
		url : this.postXml,
		dataType : "xml",
		success : function(xml) {
			$(xml).find('president').each(function() {
				var first = $(this).find('first').text();
				var last = $(this).find('last').text();
				var additions = first + " " + last;
				$("#items").append("<li>" + additions + "</li>");
			});
		},
		error : function(request, ajaxOptions, thrownError) {
			that.showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			that.showDebug(request.status);
			that.showDebug(request.statusText);
			that.showDebug(request.getAllResponseHeaders());
			that.showDebug(request.responseText);
		}
	});
};

Presidents.prototype.radioButtonStateSelection = function() {
	itemNameChoice = $("input[name=itemGroup]:checked").attr('itemName');
	showDebug(itemNameChoice);
};

Presidents.prototype.deletePresident = function() {
	this.showDebug("Deletion");
	itemNameChoice = $("input[name=itemGroup]:checked").attr('itemName');
	deleteRequest = "delete=" + itemNameChoice;
	request = $.ajax({
		type : "POST",
		data : deleteRequest,
		url : this.deleteXml,
		dataType : "xml",
		success : function(xml) {
			$(xml).find('result').each(function() {
				var resultState = $(this).find('status').text();
				that.showDebug(resultState);
			});
			// readPresidents();
		},
		error : function(request, ajaxOptions, thrownError) {
			that.showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			that.showDebug(request.status);
			that.showDebug(request.statusText);
			that.showDebug(request.getAllResponseHeaders());
			that.showDebug(request.responseText);
		}
	});
};

Presidents.prototype.addToList = function(value, itemName, count) {
	patId = 'Pat0' + count;
	$("#items").append(
			"<li><input itemName='" + itemName + 
			"' type='radio' name='itemGroup' id='" + patId + 
			"'/><label id='" + patId + "' for=" + patId + ">" + 
			value + "</li>");
};

Presidents.prototype.showDebug = function(textToDisplay) {
	$("#debug").append('<li>' + textToDisplay + '</li>');
};
