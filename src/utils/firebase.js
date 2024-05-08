// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiEQXke4rmvQpbQWikKD8db8EyGgUFEOw",
  authDomain: "netflix-gpt-344a6.firebaseapp.com",
  projectId: "netflix-gpt-344a6",
  storageBucket: "netflix-gpt-344a6.appspot.com",
  messagingSenderId: "426440115386",
  appId: "1:426440115386:web:a0567b7068fcfa863a6e83",
  measurementId: "G-ZDVM9J409R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();