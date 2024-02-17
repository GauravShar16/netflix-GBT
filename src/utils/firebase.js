// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKdAmosVxrxf_ALSDmP2_1_dr8zo4sydc",
  authDomain: "netflixgpt-a010a.firebaseapp.com",
  projectId: "netflixgpt-a010a",
  storageBucket: "netflixgpt-a010a.appspot.com",
  messagingSenderId: "9053150151",
  appId: "1:9053150151:web:a292ad661446d4e63d17e2",
  measurementId: "G-L6WXFQR199",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
