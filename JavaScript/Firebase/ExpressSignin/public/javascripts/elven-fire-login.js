// Initialize Firebase

/**
 * Function called when clicking the Login/Logout button.
 */
function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithRedirect(provider);
    } else {
        firebase.auth().signOut();
    }
    document.getElementById('elf-sign-in').disabled = true;
}

function elfConfigure() {
    const config = {
		YOUR FIREBASE CONFIG API-KEY OBJECT HERE
		GO TO FIREBASE CONSOLE, FIND YOUR PROJECT, SELECT "Add Firebase to your webapp"
    };
    firebase.initializeApp(config);
    document.getElementById('elf-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('elf-sign-in').disabled = false;
}


function elfSignIn() {

    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(JSON.stringify(token));
            document.getElementById('elf-sign-in').textContent = 'Sign out';
        }
        var user = result.user;
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
        } else {
            console.error(error);
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            document.getElementById('elf-sign-in-status').textContent = 'Signed in';
            document.getElementById('elf-sign-in').textContent = 'Sign out';
            document.getElementById('elf-user').textContent = displayName;
            document.getElementById('elf-details').textContent = email;
            document.getElementById("elfPhoto").src = photoURL;
            //document.getElementById('elf-details').textContent = JSON.stringify(user, null, '  ');
        } else {
            // User is signed out.
            document.getElementById('elf-sign-in-status').textContent = 'Signed out';
            document.getElementById('elf-sign-in').textContent = 'Sign in with Google';
            document.getElementById('elf-user').textContent = 'null';
            document.getElementById('elf-details').textContent = 'null';
            document.getElementById("elfPhoto").src = "favicon.png";
        }
        document.getElementById('elf-sign-in').disabled = false;
    });

}

function doDate() {
    const userId = 'foo';
    const name = 'foobar';
    const email = 'foo@foo.com';
    var database = firebase.database();
    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email
        });
    }
    var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
    starCountRef.on('value', function(snapshot) {
        updateStarCount(postElement, snapshot.val());
    });
}

document.addEventListener('DOMContentLoaded', function () {

    try {
        elfConfigure();
        elfSignIn();
        document.getElementById('load').innerHTML = 'Firebase App Loaded';
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});

