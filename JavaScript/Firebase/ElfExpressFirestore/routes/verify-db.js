/* eslint-disable require-jsdoc */

const admin = require('firebase-admin');

let loggedIn = false;
const fileName = 'YOUR-SERVICE-FILE-NAME-HERE.json';
const keyPath = `/home/ubuntu/.config/elves/${fileName}`;

/**
 * @see https://firebase.google.com/docs/admin/setup
 * Charlie only:
 * @see ~/Git/jekyll-private
 */

function init() {
    loggedIn = true;
    if (!admin.apps.length) {
        const serviceAccount = require(keyPath);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        /* admin.initializeApp({
            credential: admin.credential.applicationDefault(),
        }); */
    }
    return admin.firestore();
}

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        if (!loggedIn) {
            init();
        }
        admin
            .auth()
            .verifyIdToken(token)
            .then(function(decodedToken) {
                console.log('UID', JSON.stringify(decodedToken, null, 4));
                console.log('MAIN SERVER QUX YOU RANG CALLED');
                resolve(decodedToken);
            })
            .catch(function(error) {
                console.log(error);
                reject(error);
            });
    });
}

module.exports.verifyToken = verifyToken;
module.exports.init = init;
