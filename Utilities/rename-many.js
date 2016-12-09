var filesystem = require("fs");

function rename(from, to) {
    filesystem.rename(from, to, function(err) {
        if (err) {
            throw(err);
        }
    });
}

function testMain(file, pattern) {
    var mainFile = file.match('(' + pattern + ')-' + '([^.pdf]*)');
    if (mainFile) {
        var to = mainFile[2] + '.pdf';
        console.log('mv ' + file + ' ' + to );
        rename(file, to);
        return mainFile[2];
    }
    return null;
}

function testSmall(file, pattern, mainName) {
    var smallFile = file.match('(' + pattern + ')\\.' + '(.*)');
    if (smallFile) {
        //var from = smallFile[1] + '.' + smallFile[2];
        var to = mainName + '.' + smallFile[2];
        console.log('mv ' + file + ' ' + to);
        rename(file, to);
    }
}

function testCode(file, pattern, mainName) {
    var smallFile = file.match('(' + pattern + ')' + '(_.ode)\\.' + '(.*)');
    if (smallFile) {
        //var from = smallFile[1] + '.' + smallFile[2];
        var to = mainName + '_code.' + smallFile[3];
        console.log('mv ' + file + ' ' + to);
        rename(file, to);
    }
}


var getAllFilesFromFolder = function(dir, pattern) {

    var results = [];

    var mainName;

    filesystem.readdirSync(dir).forEach(function(file) {
        var test = new RegExp(pattern).test(file)
        if (test) {
            var mainNameTry = testMain(file, pattern);
            if (mainNameTry) {
                mainName = mainNameTry;
            } else {
                testSmall(file, pattern, mainName);
                testCode(file, pattern, mainName);
            }
        }

        results.push(file);
    });

    return results;

};


var pattern = "\\d{13}";
var results = getAllFilesFromFolder('.', pattern);

