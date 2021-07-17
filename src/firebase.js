import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD1F1mur7JqptgS4nnslvBm10Q3ofiffus",
  authDomain: "slack-clone-yt-ffc49.firebaseapp.com",
  projectId: "slack-clone-yt-ffc49",
  storageBucket: "slack-clone-yt-ffc49.appspot.com",
  messagingSenderId: "984629751602",
  appId: "1:984629751602:web:f3472709c49352db12712b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider, db};