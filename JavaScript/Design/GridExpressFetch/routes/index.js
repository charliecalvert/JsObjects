var express = require('express');
var router = express.Router();
const path = require('path');

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

router.get('/example-layout', (request, response) => {
    response.sendFile(path.join(__dirname + '/example-layout.html'));
});

router.get('/:id', function(req, res) {
    'use strict';
    res.render(Utils.stripExtension(req.params.id), {
        title: 'Elf-Express'
    });
});

module.exports = router;
