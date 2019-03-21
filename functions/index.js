const functions = require('firebase-functions');
//const fetch = require("node-fetch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.helloWorld = functions.https.onRequest(async (request, response) => {
    console.log("my masterRef: " + request.body["masterRef"]);


    /*
    const param = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    try{
        const res = await fetch("https://getting-started-react-prismic.prismic.io/api/v2/documents/search?ref=" + "XJOk1hAAAOfGXeFa",param);
        //const res = await fetch("https://getting-started-react-prismic.prismic.io/api/v2/documents/search?ref=" + request.body["masterRef"],param);
        const json = await res.json();
        console.log("json : "+ json);
    }catch(e){
        console.log("error: " + e);
    }

    */

    response.send("cloud function executed !");
});
