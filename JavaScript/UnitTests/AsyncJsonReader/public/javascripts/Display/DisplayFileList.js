/**
 * New node file
 */

define(function(require) {
	'use strict';

	var DisplayFileList = (function() {

		function DisplayFileList() {

		}

		DisplayFileList.prototype.display = function(fileList) {
			for ( var file in fileList) {
				var dataContent = fileList[file] + '>' + file;
				dataContent = '<li data=' + dataContent + '</li>'
				$('#displayList').append(dataContent);
			}
		}

		return DisplayFileList;
	}());

	return DisplayFileList;

});