
	var loadXmlDocument = function(fileName) {
		var xmlhttp = null;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET", fileName, false);
		xmlhttp.send();
		return xmlhttp.responseXML;
	};