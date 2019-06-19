const getFirebaseToken = () => {
    return new Promise((resolve, reject) => {
        if (!window.firebase.auth().currentUser) {
            this.setData({ result: 'You need to log in.' });
            reject({ result: 'You need to log in (env export?).' });
        }
        window.firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                resolve({ token: idToken });
            })
            .catch(err => {
                reject(err);
            });
    });
};

const makeParams = params => {
    var esc = encodeURIComponent;
    return (
        '?' +
        Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&')
    );
};

export { getFirebaseToken, makeParams };
