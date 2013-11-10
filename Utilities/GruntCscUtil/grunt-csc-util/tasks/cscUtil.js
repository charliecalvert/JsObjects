module.exports = function(grunt) { 'use strict';

	grunt.registerMultiTask('cscUtil', 'cscUtil', function() {
		var len = this.filesSrc.length;

		var dirList = [];
		var ignoreList = this.options().ignoreFolder;
		console.log(ignoreList);
		
		var isUnique = function(dir) {
			return dirList.indexOf(dir) === -1;
		}

		var ignoreDir = function(subDir) {
			for(var i = 0; i < ignoreList.length; i++) {
				if (subDir.indexOf(ignoreList[i]) !== -1) {
					return true;
				}
			}
			return false;
		};
		
		var nestedDir = function(subDir) {
			return subDir.indexOf('\/') !== -1;
		}
		
		var iterateTroughFiles = function(abspath, rootdir, subDir, filename){
			if (typeof subDir !== 'undefined') {
				//if (subDir.indexOf('\/') === -1) {
				if (!nestedDir(subDir)) {
					if (!ignoreDir(subDir)) {
						if (isUnique(subDir)) {
							dirList.push(subDir);
							console.log(subDir);
						}
					}
				}
			}
		};

		for (var x = 0; x < len; x++) {
			grunt.file.recurse(this.filesSrc[x], iterateTroughFiles);
		}
	});
};