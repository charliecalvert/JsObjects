var admin = require('firebase-admin');

let loggedIn = false;

//'firebase-adminsdk-2p1h1@prog270-calvert.iam.gserviceaccount.com';
function init() {
    loggedIn = true;
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
        });
    }
    return admin.firestore();
}

function verifyToken(token, url) {
    return new Promise(function (resolve, reject) {
        if (!loggedIn) {
            init(url);
        }
        admin
            .auth()
            .verifyIdToken(token)
            .then(function (decodedToken) {
                console.log('UID', JSON.stringify(decodedToken, null, 4));
                console.log('MAIN SERVER QUX YOU RANG CALLED');
                resolve(decodedToken);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
}

module.exports.verifyToken = verifyToken;
module.exports.init = init;
