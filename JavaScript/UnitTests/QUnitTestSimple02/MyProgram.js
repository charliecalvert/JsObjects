/**
 * @author Charlie Calvert
 */

 
 var App = (function() {
 	
 	function App() {
 		$("#clickMe").click(this.clickMe);
 	}
 	
 	var privateAdd = function(operanda, operandb) {
 		return operanda + operandb;
 	};
 	
 	App.prototype.clickMe = function() {
 		var result = privateAdd(2, 3); 
 		$('#test01').html(result);
 	};
 	
 	App.prototype.add = function(operanda, operandb) {
 		return privateAdd(operanda, operandb);
 	};
 	
 	App.prototype.multiply = function(operanda, operandb) {
 		return operanda * operandb;
 	};
 	
 	return App;
 	
 })();
 
 $(document).ready(function() {
 	new App();	
 });