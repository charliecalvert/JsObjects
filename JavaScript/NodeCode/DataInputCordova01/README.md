DataInputCordova01
------------------

This example shows how to use a node server from a phonegap/cordova 
application. Start the DataInput01 node server running EC2. Run this 
project on your local machine, and load it into an Android Device, 
AndroidX86 on VirtualBox, or into an Android Emulator. The only change 
you need to make to this code is to change the IP addresses in 
DataInput.js to reflect the Elastic IP address of the EC2 virtual 
machine your node server is running.

	function addFive() {        
	 var data = {
	   value : getUserNumber()
	 };

	 $.ajax({
		type : "POST",
		url : 'http://YOUR_IP_HERE:30025/addToFive',
		dataType : "json",
		cache : 'False',
		data : data,
		success : function(json) {
		  var result = "<p>Result: " + json.result + "</p>";
		  var value = "<p>Value: " + json.value + "</p>";
		  $("#resultDiv").html(result + value);
		},
		error : showError
	  });
	};
