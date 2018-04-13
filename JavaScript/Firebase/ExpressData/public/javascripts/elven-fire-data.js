/************************************
 * Setup
 ************************************/

function elfFireStart() {
    $('#elfFireDataPush').click(elfFireDataPush);
    $('#elfFireDataView').click(elfFireDataView);
    $('#elfFireDataUpdate').click(elfFireDataUpdate);
    $('#elfFireDataRemove').click(elfFireDataRemove);
    $('#elfFireDataRemoveAll').click(elfFireDataRemoveAll);
    elfFireDataView();
}

/************************************
 * Database
 ************************************/


function elfFireDataPush() {

    function dataInsert() {
        firebase.database().ref('/writers').set({
            rpn: {
                'first': 'Robert',
                'middle': 'Penn',
                'last': 'Warren'
            },
            jqo: {
                'first': 'Joyce',
                'middle': 'Carol',
                'last': 'Oates'
            }
        });

    }

    dataInsert();
    elfFireDataView();
}

function elfFireDataView() {
    const list = $('#writersList');
    return firebase.database().ref('/writers').once('value').then(function(snapshot) {
        const writers = snapshot.val();
        console.log(writers);
        list.empty();
        for (const writer in writers) {
            console.log(writers[writer]);
            list.append('<li>' + writers[writer].first + ' ' + writers[writer].middle + ' ' + writers[writer].last + '</li>');
        }
    });

}

function elfFireDataUpdate() {
    const adaNameRef = firebase.database().ref('/writers/jqo');
    adaNameRef.update({
        first: 'Ada'
    });
    elfFireDataView();
}

function elfFireDataRemove() {
    const adaNameRef = firebase.database().ref('/writers/jqo');
    adaNameRef.remove();
    elfFireDataView();
}

function elfFireDataRemoveAll() {
    const adaNameRef = firebase.database().ref('/writers');
    adaNameRef.remove();
    elfFireDataView();
}


/*******************************************
 * Presidents Database
 *******************************************/

$(document).ready(function() {
    'use strict';
    //elfFireStart();
});
