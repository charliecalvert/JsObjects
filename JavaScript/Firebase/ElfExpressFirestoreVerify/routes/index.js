var express = require('express');
var router = express.Router();
const { init, verifyToken } = require('./verify-db');
const firebase = require('firebase');
require('firebase/firestore');
const { writeBatchData, readSnapshot } = require('./batch');

let db = init();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/worker', (request, response) => {
    'use strict';
    response.render('worker', {
        title: request.query.title
    });
});

router.get('/write-batch', (request, response) => {
    const items = [
        { id: '0', data: 'foo00', bar: 'barso' },
        { id: '1', data: 'foo01' },
        { id: '2', data: 'foo02', bar: 'barfoo' },
        { id: '3', data: 'foo03' },
        { id: '4', data: 'foo04' }
    ];

    console.log('WRITE BATCH', request.query);

    verifyToken(request.query.token)
        .then(decodedToken => {
            console.log('WRITE-BATCH DECODED TOKEN', decodedToken);
            if (!db) {
                db = init();
            }

            writeBatchData(items, db).then(result => {
                response.send(result);
            });
        })
        .catch(ex => {
            console.log('error', ex);
            response.send({ error: ex });
        });
});

router.get('/read-snapshot', (request, response) => {
    console.log('READ SNAPSHOT CALLED');

    if (!db) {
        db = init();
    }

    verifyToken(request.query.token)
        .then(decodedToken => {
            console.log('READ SNAPSHOT DECODED TOKEN', decodedToken);
            readSnapshot(db).then(snapshot => {
                const data = snapshot.docs.map(doc => doc.data());
                response.send(data);
            });
        })
        .catch(ex => {
            response.send(ex);
        });
});

module.exports = router;
