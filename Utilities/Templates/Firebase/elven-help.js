/************************************
 * Setup
 ************************************/

function elfFireConfig01() {
    var config = {
        apiKey: '<YOUR DATA HERE>',
        authDomain: '<YOUR DATA HERE>',
        databaseURL: '<YOUR DATA HERE>',
        storageBucket: '',
        messagingSenderId: '<YOUR DATA HERE>'
    };
    firebase.initializeApp(config);
}

function elfFireConfig02() {
    var config = {
        apiKey: '<YOUR DATA HERE>',
        authDomain: '<YOUR DATA HERE>',
        databaseURL: '<YOUR DATA HERE>',
        storageBucket: '',
        messagingSenderId: '<YOUR DATA HERE>'
    };
    firebase.initializeApp(config);
}

function elfFireConfig03() {
    var config = {
        apiKey: '<YOUR DATA HERE>',
        authDomain: '<YOUR DATA HERE>',
        databaseURL: '<YOUR DATA HERE>',
        storageBucket: '',
        messagingSenderId: '<YOUR DATA HERE>'
    };
    firebase.initializeApp(config);
}

function elfFireStart() {
    elfFireConfig03();
    $('#elfDatabasePush').click(elfFireDataPush);
    $('#elfDatabaseGet').click(elfFireDataGet);
    $('#elfDatabaseGetAllQux').click(elfFireDatabaseGetAllQux);
    $('#elfGetCurrentUser').click(elfFireGetCurrentUser);
    $('#sign-in').click(elfFireSignOut);
    $('#elfInput').click(elfFireDynamicPush);
    $('#elfInsertFromFile').click(insertPresidentsFromFile);
    $('#elfUpdatePresident').click(updatePresident);
    $('#elfPushPresident').click(pushPresident);
    $('#elfGetPresidents').click(getPresidents);
    elfFireDynamicData();
}

/************************************
 * Users
 ************************************/

function elfFireGetCurrentUser() {
    var user = firebase.auth().currentUser;
    var userName;
    var userEmail;
    var userPhotoUrl;
    var userId;

    if (user !== null) {
        userName = user.displayName;
        userEmail = user.email;
        userPhotoUrl = user.photoURL || user.providerData[0].photoURL;
        userId = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    $('#userName').html(userName);
    $('#userEmail').html(userEmail);
    $('#userPhotoUrl').html(userPhotoUrl);
    $('#userId').html(userId);
    $('#userImg').attr('src', userPhotoUrl);
}

/************************************
 * Database
 ************************************/

var elfOldInput = [];

function elfFireDataGet() {
    return firebase.database().ref('/bar/foo').once('value').then(function(snapshot) {
        var userName = snapshot.val();
        console.log(userName);
    });
}

function elfFireDatabaseGetAllQux() {
    var list = $('#userInputList');
    return firebase.database().ref('/bar/qux').once('value').then(function(snapshot) {
        var quxData = snapshot.val();
        console.log(quxData);
        list.empty();
        for (var i = 0; i < quxData.oldInput.length; i++) {
            console.log(quxData.oldInput[i]);
            list.append('<li>' + quxData.oldInput[i] + '</li>');
        }
    });
}

function elfFireDynamicData() {
    var list = $('#userInputList');
    var barQuxRef = firebase.database().ref('bar/qux');
    barQuxRef.on('value', function(snapshot) {
        var userVal = snapshot.val();
        console.log(userVal);
        if (userVal) {
            list.append('<li>' + userVal.userInput + '</li>');
            elfOldInput = userVal.oldInput;
        }
    });
}

function elfFireDynamicPush() {

    function writeUserData() {
        var userInput = $('#userInput').val();
        if (userInput === '') {
            userInput = 'No input from user.';
        }

        if (!Array.isArray(elfOldInput)) {
            elfOldInput = [];
        }
        elfOldInput.push(userInput);
        firebase.database().ref('bar/qux').set({
            userInput: userInput,
            oldInput: elfOldInput
        });
    }

    writeUserData();
}

function elfFireDataPush() {

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('bar/foo').set({
            foo: 'foobar'
        });
    }

    function dataInsert() {
        firebase.database().ref('bar/users').set({
            'first': 'Jack',
            'last': 'Sparrow'
        });
    }

    // writeUserData();
    dataInsert();
}


/*******************************************
 * Presidents Database
 *******************************************/

function insertPresidentsFromFile() {
    $.getJSON('users.json', function(users) {
        firebase.database().ref('bar/users').set(
            users
        );
    });
}

function updatePresident() {
    var adaNameRef = firebase.database().ref('bar/users/0');
    adaNameRef.update({
        first: 'Ada'
    });
}

function pushPresident() {
    var first = $('#elfFirstName').val();
    var last = $('#elfLastName').val();
    var presidentRef = firebase.database().ref('bar/users');
    var newPresidentRecord = presidentRef.push();
    newPresidentRecord.set({"first": first , "last": last});
}

function getPresidents() {
    var list = $('#presidentsList');
    return firebase.database().ref('/bar/users').once('value').then(function(snapshot) {
        var presidents = snapshot.val();
        console.log(presidents);
        list.empty();
        for (var president in presidents) {
            console.log(presidents[president]);
            list.append('<li>' + presidents[president].first + ' ' + presidents[president].last + '</li>');
        }
    });
}
/************************************
 * Authentication (Sign-In)
 ************************************/

function elfFireSignOut() {
    firebase.auth().signOut();
    window.location.href = '/';
}

function elfFireConfig() {
    // FirebaseUI config.
    var uiConfig = {
        'signInSuccessUrl': 'start.html',
        'signInOptions': [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': '<your-tos-url>',
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

}

function elfFireInitPage() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var providerData = user.providerData;
            user.getToken().then(function(accessToken) {
                document.getElementById('sign-in-status').textContent = 'Signed in';
                document.getElementById('sign-in').textContent = 'Sign out';
                document.getElementById('account-details').textContent = JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }, null, '  ');
            });
        } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
        }
    }, function(error) {
        console.log(error);
    });
}

$(document).ready(function() {
    'use strict';
    $('table').addClass('table table-striped table-hover');

    $('#getPresidents').click(getPresidents);

    function getPresidents() {
        $.getJSON('/cgi-bin/get-presidents.py', function(presidents) {
            $('#bar').empty();
            presidents.forEach(function(president) {
                $('#bar').append('<li>' + president[1] + ' ' + president[2] + '</li>');
            });
        });
    }

    $('.navbar-nav li.trigger-collapse a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
