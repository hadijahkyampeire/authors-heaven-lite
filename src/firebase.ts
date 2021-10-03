import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyBH3FLEQw6V64clEfIOB_BXkhXTw8ddPhI",
  authDomain: "author-s-heaven.firebaseapp.com",
  projectId: "author-s-heaven",
  storageBucket: "author-s-heaven.appspot.com",
  messagingSenderId: "356314032049",
  appId: "1:356314032049:web:be6816d5a61eba715d7f90",
  measurementId: "G-EP1034VY9W"
};
  
firebase.initializeApp(firebaseConfig);
firebase.firestore();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};
