// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqkisoFzAB05XFjFHUskYe1Z4TZXpBpSQ",
  authDomain: "my-courses-project-a4983.firebaseapp.com",
  projectId: "my-courses-project-a4983",
  storageBucket: "my-courses-project-a4983.appspot.com",
  messagingSenderId: "646102741164",
  appId: "1:646102741164:web:55ad75a9d221ed06026f09",
  measurementId: "G-T3FCBQYF3P",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = firebase.auth(app);
export default app;
