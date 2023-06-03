import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express',
    });
});

router.get('/worker', (request, response) => {
    'use strict';
    response.render('worker', {
        title: request.query.title,
    });
});

const addresList = [
    {
        firstName: 'Lamar',
        lastName: 'Alexander',
        street: '455 Dirksen Senate Office Building',
        city: 'Washington DC',
        state: 'TN',
        zip: '20510',
        phone: '202-224-4944',
        website: 'https://www.alexander.senate.gov/public',
        email: '',
        contact: 'http://www.alexander.senate.gov/public/index.cfm?p=Email',
    },
    {
        firstName: 'Susan',
        lastName: 'Collins',
        street: '413 Dirksen Senate Office Building',
        city: 'Washington DC',
        state: 'ME',
        zip: '20510',
        phone: '202-224-2523',
        website: 'https://www.collins.senate.gov',
        email: '',
        contact: 'http://www.collins.senate.gov/contact',
    },
    {
        firstName: 'John',
        lastName: 'Cornyn',
        street: '517 Hart Senate Office Building',
        city: 'Washington DC',
        state: 'TX',
        zip: '20510',
        phone: '202-224-2934',
        website: 'https://www.cornyn.senate.gov',
        email: '',
        contact: 'https://www.cornyn.senate.gov/contact',
    },
];

router.get('/address-list', function(req, res) {
    'use strict';
    console.log('ADDRESS LIST', req.query);
    res.send(addresList);
});

export default router;
