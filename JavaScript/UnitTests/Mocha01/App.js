var dirLib = require('./Library/SimpleDir');

var folder = 'foo/bar/bam';

dirLib.dirs.ensureDirSync(folder);
dirLib.dirs.rmdirSync('foo');
