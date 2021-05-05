import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCM3499KjR_Aa970LTSMLjXUlaZB7xgCAY",
    authDomain: "clone-2dfa0.firebaseapp.com",
    databaseURL: "https://clone-2dfa0.firebaseio.com",
    projectId: "clone-2dfa0",
    storageBucket: "clone-2dfa0.appspot.com",
    messagingSenderId: "865741148477",
    appId: "1:865741148477:web:de97a4414eaf9d8c887554",
    measurementId: "G-YB7VVN57R0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // using firestore and authentication
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}