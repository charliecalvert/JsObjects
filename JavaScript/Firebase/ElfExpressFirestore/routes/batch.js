/* eslint-disable require-jsdoc */

const writeBatchData = (items, db) => {
    console.log('WRITE-BATCH-DATA CALLED', items);
    return new Promise(function(resolve, reject) {
        const batch = db.batch();

        items.forEach((item) => {
            console.log('ITEM', item);
            try {
                const itemsRef = db.collection('items').doc(item.id);
                batch.set(itemsRef, item);
            } catch (ex) {
                console.log('ITEM2', ex);
            }
        });


        console.log('READY TO COMMIT');
        batch.commit()
            .then((dbData) => {
                console.log('SUCCESS');
                resolve({ 'result': 'success', 'dbData': dbData });
            })
            .catch(function(error) {
                console.log('ERROR', error);
                const err = {
                    'error: ': error,
                    'text': 'error writing document',
                };
                reject(new Error(err));
            });
    });
};


function readSnapshot(db) {
    return new Promise(function(resolve, reject) {
        db.collection('items')
            .get()
            .then((snapshot) => {
                resolve(snapshot);
            })
            .catch((ex) => {
                reject(ex);
            });
    });
}

module.exports = { writeBatchData, readSnapshot };
