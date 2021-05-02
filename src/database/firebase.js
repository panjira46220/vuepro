import * as firebase from 'firebase'
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyBihnRYIuEePsdLR_X-ZtUcLFHmJfvFEuc",
    authDomain: "ppproject-19364.firebaseapp.com",
    databaseURL: "https://ppproject-19364.firebaseio.com",
    projectId: "ppproject-19364",
    storageBucket: "ppproject-19364.appspot.com",
    messagingSenderId: "854439128758",
    appId: "1:854439128758:web:71e000a4edeee5215dc017",
    measurementId: "G-4J0E00B2FM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth();
  firebase.auth.GoogleAuthProvider();
  export default firebase;