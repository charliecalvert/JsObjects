var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

class Utils {
    static stripExtension(fileName) {
        'use strict';
        return fileName.substr(0, fileName.lastIndexOf('.'));
    }
}
router.get('/:id', function(req, res) {
    'use strict';
    res.render(Utils.stripExtension(req.params.id), {
        title: 'Elf-Express'
    });
});

module.exports = router;
