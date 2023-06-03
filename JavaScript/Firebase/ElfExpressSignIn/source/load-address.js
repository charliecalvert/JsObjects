import { dataLoaded, setLocalStorage } from './assets/address-local-storage.js';

const getFirebaseToken = () => {
    return new Promise((resolve, reject) => {
        if (!window.firebase.auth().currentUser) {
            this.setData({ result: 'You need to log in.' });
            reject(new Error({ result: 'You need to log in (env export?).' }));
        }
        window.firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                resolve({ token: idToken });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const elfQuery = (response) => {
    return new Promise((resolve, reject) => {
        fetch('/address-list?token=' + response.token)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                resolve(json);
            })
            .catch(function(err) {
                err.message = 'parsing failed, URL bad, network down, etc: ' +
                    err.message;
                reject(err);
            });
    });
};

const loadAddress = () => {
    return new Promise((resolve, reject) => {
        if (!dataLoaded()) {
            getFirebaseToken()
                .then(elfQuery)
                .then((json) => {
                    setLocalStorage(json);
                    resolve({ status: 'ok', address: json });
                })
                .catch((ex) => {
                    reject(ex.message);
                });
        } else {
            resolve({ status: 'already loaded' });
        }
    });
};
export default loadAddress;
