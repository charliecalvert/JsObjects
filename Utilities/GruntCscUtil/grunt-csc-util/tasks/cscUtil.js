module.exports = function(grunt) { 'use strict';

	grunt.registerMultiTask('cscUtil', 'cscUtil', function() {

		var dirList = [];
		var ignoreList = this.options().ignoreFolder;
		var subDirs = this.options().subDirs; 
		if (typeof subDirs === 'undefined') {
			subDirs = false;
		}
		console.log('Use subDirs: ' + subDirs);
		
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
			if (subDirs) {
				return false;
			} else {
				return subDir.indexOf('\/') !== -1;
			}
		}
		
		var done = this.async();
		
		
		var runGitStatus = function(subDir) {
			var curDir = cwd + subDir;
			console.log('cd ' + curDir);
			console.log('git pull');
		}
			
		var runGitStatusOld = function(subDir) {
			var curDir = cwd + subDir;
			console.log("new Dir: " + curDir);
			try {
				process.chdir(curDir);
				//console.log('New directory: ' + process.cwd());
			}
			catch (err) {
				console.log('chdir: ' + err);
			}
			
			console.log("runGitStatus: " + subDir);
			var foo = grunt.util.spawn({
				cmd : "git",
				args : [ "status" ]
			}, function (err, result, code) {
					if (err) {
						console.log('error');
						grunt.log.error(err);
						done(result);
						return false;
					}
					console.log('Result' + result);
					done(result);
			});
		}
		
		var iterateTroughFiles = function(abspath, rootdir, subDir, filename){
			if (typeof subDir !== 'undefined') {
				//if (subDir.indexOf('\/') === -1) {
				if (!nestedDir(subDir)) {
					if (!ignoreDir(subDir)) {
						if (isUnique(subDir)) {
							dirList.push(subDir);
							runGitStatus(subDir);
						}
					}
				}
			}
		};
		
		var skipFirstDirs = function() {
			var len = this.filesSrc.length;
			for (var x = 0; x < len; x++) {
				grunt.file.recurse(this.filesSrc[x], iterateTroughFiles);
			}
		}
		
		var cwd = process.cwd() + '\\';
		grunt.file.recurse(".", iterateTroughFiles);
	});
};