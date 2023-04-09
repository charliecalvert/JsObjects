const walkRunner = require('elven-site-tools').walkRunner;

walkRunner('calvert', 0)
    .then(function(report) {
       console.log(report);
    })
    .catch(function(err) {
        throw err;
    })
