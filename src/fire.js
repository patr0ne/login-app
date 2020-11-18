import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAUFAEThjNRLmHD7TNXCqdlxgdLySIy8tw",
    authDomain: "login-a5e13.firebaseapp.com",
    databaseURL: "https://login-a5e13.firebaseio.com",
    projectId: "login-a5e13",
    storageBucket: "login-a5e13.appspot.com",
    messagingSenderId: "562257933490",
    appId: "1:562257933490:web:026be96a709c74b6f605ab"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;