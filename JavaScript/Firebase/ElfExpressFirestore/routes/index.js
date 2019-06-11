var express = require('express');
var router = express.Router();
const {verifyToken, init} = require('./verify-db');
const firebase = require("firebase");
require("firebase/firestore");

let db = null;

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

        db.collection("user").doc(user.uid).set({
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

const getData = (docName) => {
    return new Promise(function (resolve, reject) {
        var docRef = db.collection("user").doc(docName);

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
    console.log('VERIFY, INIT', verifyToken, init);
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
    console.log('VERIFY, INIT', verifyToken, init);
    if(!db) {
        db = init();
    }
    getData('TempRecord')
        .then(result => {
            res.send(result.documentData);
        })
});

module.exports = router;
