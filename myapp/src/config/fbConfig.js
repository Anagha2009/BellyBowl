import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVohQVzjpRejusbGz-u2qYLSaulNVSod4",
    authDomain: "bellybowl.firebaseapp.com",
    databaseURL: "https://bellybowl.firebaseio.com",
    projectId: "bellybowl",
    storageBucket: "bellybowl.appspot.com",
    messagingSenderId: "688416888054",
    appId: "1:688416888054:web:8f52058ee16cba540208d7",
    measurementId: "G-QPTHWTKG6M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore();

  export default firebase;