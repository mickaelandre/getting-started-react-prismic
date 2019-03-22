const functions = require('firebase-functions');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest( async (request, response) => {
    console.log("my masterRef: " + request.body["masterRef"]);

    const db = admin.firestore();
    console.log("firestore value:" + db);

    const FirestoreObject = {
        "masterRef": request.body["masterRef"],
    };

    // set Data
    db.collection('prismicWebHook').doc('ZtM38IhHFhlgXonX2NsW').set(FirestoreObject);

    // get Data
    try{
        const snapshot = await db.collection('prismicWebHook').get();
        snapshot.forEach((doc) => console.log(doc.id, '=>', doc.data()));
    } catch(e){
        console.log('error getting documents ', e);
    }

    response.send("cloud function executed !");
});
