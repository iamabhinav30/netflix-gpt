// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsD_88maeum1QodT9j45NA01AiI5mUrRc",
  authDomain: "netflixgpt-38259.firebaseapp.com",
  projectId: "netflixgpt-38259",
  storageBucket: "netflixgpt-38259.appspot.com",
  messagingSenderId: "276138356236",
  appId: "1:276138356236:web:51876c9c1ee6aef2b64829",
  measurementId: "G-TSJRF4Y6V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();