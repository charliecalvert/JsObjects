const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Elf-Express',
    });
});

router.get('/get-json', (req, res) => {
    res.send({ result: 'Success' });
});

module.exports = router;
