var express = require('express');
var router = express.Router();
const {verifyToken, init} = require('./verify');
const firebase = require("firebase");
const admin = require('firebase-admin');
require("firebase/firestore");

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

const writeData = (user, response, db) => {
    return new Promise(function(resolve, reject) {
        const message = {
            result: 'success',
            status: 'ok',
            file: 'routes/index.js',
            server: 'ElfExpressFirestore'
        };
        console.log('WRITE DATA CALLED:\n' + JSON.stringify(message, null, 4));


        db.collection("user").doc(user.uid).set({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        })
            .then(function (dbData) {
                resolve({'result': 'success', dbData: dbData, ...message});
            })
            .catch(function (error) {
                reject("Error writing document: ", error);
            });
    });
};

const userData = {
    uid: 'TempRecord',
    displayName: 'Temp DisplayName',
    email: 'qux@bar.com',
    photoURL: 'https://qux.net/photo.png'
};

router.get('/test', (req, res) => {
    console.log('VERIFY, INIT', verifyToken, init);
    const db = init();
    writeData(userData, res, db)
        .then(result => {
            res.send(result);
        })
});

module.exports = router;
