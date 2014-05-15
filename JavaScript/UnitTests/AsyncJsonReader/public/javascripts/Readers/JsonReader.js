/**
 * @author Charlie Calvert
 */

define([ 'jquery', 'Utilities', 'DisplayFileList' ], 
		function(jquery, utilities, DisplayFileList) {
	'use strict';

	var JsonReader = (function() {

		var that;

		function JsonReader() {
			that = this;
		}

		var clear = function() {
			$('#displayList').empty();
		}

		function nativeCallback(fileList) {
			var serverData = fileList;
			that.display(serverData);
		}

		// If the customCallback exists, then use it, else use ours nativeCallback
		// If there is an error handler, use it, else use our errorHandler
		function getCallback(customCallback) {
			var callback = utilities.isTruthy(customCallback) ? customCallback
					: nativeCallback;

			if (utilities.isFalsy(callback.error)) {
				callback.error = utilities.errorHandler;
			}
			return callback;
		}

		JsonReader.prototype.readFile = function(fileName, customCallback) {
			var fileObject = {
				'fileName' : fileName
			};
			var callback = getCallback(customCallback);
			$.getJSON('/read', fileObject, callback);
		};

		JsonReader.prototype.display = function(serverData) {
			clear();
            if (serverData.type === 'fileList') {
				var displayFileList = new DisplayFileList();
				displayFileList.display(serverData.content);
			}
		};

		return JsonReader;
	}());

	return JsonReader;
});
