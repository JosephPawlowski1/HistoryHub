
const firebaseConfig = {
    apiKey: "AIzaSyA7zxrx4StJObT7CfXMsCzKGCpbfSKnOZs",
    authDomain: "historyunited-61508.firebaseapp.com",
    databaseURL: "https://historyunited-61508.firebaseio.com",
    projectId: "historyunited-61508",
    storageBucket: "historyunited-61508.appspot.com",
    messagingSenderId: "752721294693",
    appId: "1:752721294693:web:116701c67ce46f49859d8c",
    measurementId: "G-5GP36786WK"
  };

  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
  }
  firebase.analytics();
      // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();

    // update firestore settings
    db.settings({ timestampsInSnapshots: true });