// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGYPexATBgaM-wb7w8nZkP45YV8DQ4IP4",
  authDomain: "netflixgpt-65973.firebaseapp.com",
  projectId: "netflixgpt-65973",
  storageBucket: "netflixgpt-65973.appspot.com",
  messagingSenderId: "1050497758459",
  appId: "1:1050497758459:web:6f8cbb8f65d99bd2232c5e",
  measurementId: "G-SKHNZ7NTK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();