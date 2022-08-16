// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbWXjGjGtTFBFN1vntEV_RrAwjO0K1FA",
  authDomain: "backendcoder-87927.firebaseapp.com",
  projectId: "backendcoder-87927",
  storageBucket: "backendcoder-87927.appspot.com",
  messagingSenderId: "317978891872",
  appId: "1:317978891872:web:6d5827ae663d92437e9505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)