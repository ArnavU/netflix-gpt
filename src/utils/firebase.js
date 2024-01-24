// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7p3KKuElD76hf4qmDza_6gbR3i-n4IOY",
  authDomain: "netflixgpt-436e7.firebaseapp.com",
  projectId: "netflixgpt-436e7",
  storageBucket: "netflixgpt-436e7.appspot.com",
  messagingSenderId: "822899407345",
  appId: "1:822899407345:web:77a8972495faa7a6386c50",
  measurementId: "G-RD2X2CL3HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const auth = getAuth();