var express = require('express');
var router = express.Router();
const {init, verifyToken} = require('./verify-db');
const debug = require('debug')('elf-express');
// const firebase = require("firebase");
require("firebase/firestore");
const {writeBatchData, readSnapshot} = require('./batch');
const { log } = require('elven-code/elf-log');

let db = init();
const collectionName = 'users';

/* GET home page. */
router.get('/', function (req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

const writeData = (user, db) => {
    return new Promise(function (resolve, reject) {

        console.log('WRITE DATA CALLED:\n' + JSON.stringify(user, null, 4));

        db.collection(collectionName).doc(user.uid).set({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        })
            .then(function (dbData) {
                resolve({'result': 'success'});
            })
            .catch(function (error) {
                reject({"error: ": error, text: 'error writing document'});
            });
    });
};

const readData = (docName, db) => {
    return new Promise(function (resolve, reject) {
        var docRef = db.collection(collectionName).doc(docName);

        docRef.get()
            .then(function (doc) {
                if (doc.exists) {
                    resolve({"documentData": doc.data()});
                } else {
                    resolve({documentData: "No such document!"});
                }
            })
            .catch(function (error) {
                reject({error: error});
            });
    });
};

const userData = {
    uid: 'TempRecord',
    displayName: 'Temp DisplayName',
    email: 'qux@bar.com',
    photoURL: 'https://qux.net/photo.png'
};

router.get('/write', (req, res) => {
    if(!db) {
        db = init();
    }
    writeData(userData, db)
        .then(result => {
            console.log('WRITE RESULT', result);
            res.send(result);
        })
        .catch(ex => {
            res.send(ex)
        })
});

router.get('/read', (req, res) => {
    console.log('READ CALLED');
    debug('READ CALLED');
    if(!db) {
        db = init();
    }
    readData('TempRecord', db)
        .then(result => {
            res.send(result.documentData);
        }).catch(ex => {
            console.log('READ ERROR', ex);
            debug('READ ERROR', ex);
            res.send(ex)
        })
});

router.get('/write-batch', (req, res) => {
    const items = [
        {id: '0', data: 'foo00', bar: 'barso' },
        {id: '1', data: 'foo01' },
        {id: '2', data: 'foo02', bar: 'barfoo' },
        {id: '3', data: 'foo03' },
        {id: '4', data: 'foo04' }
    ];

    console.log('WRITE-BATCH CALLED');
    if(!db) {
        db = init();
    }

    writeBatchData(items, db)
        .then(result => {
            res.send(result);
        })
        .catch(ex => {
            res.send(ex);
        })
});

router.get('/read-snapshot', (req, res) => {
    debug('READ SNAPSHOT CALLED');

    if(!db) {
        db = init();
    }

    readSnapshot(db)
        .then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            res.send(data);
        })
        .catch(ex => {
            res.send(ex);
        })
});

module.exports = router;
