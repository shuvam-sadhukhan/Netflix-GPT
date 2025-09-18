// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-a391f.firebaseapp.com",
  projectId: "netflixgpt-a391f",
  storageBucket: "netflixgpt-a391f.firebasestorage.app",
  messagingSenderId: "991920366261",
  appId: "1:991920366261:web:649fbbbf994cabcc7994fc",
  measurementId: "G-WHHH8283R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
 export const auth = getAuth(app);  