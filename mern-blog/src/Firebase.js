// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-2917e.firebaseapp.com",
  projectId: "blog-app-2917e",
  storageBucket: "blog-app-2917e.appspot.com",
  messagingSenderId: "172712145483",
  appId: "1:172712145483:web:1c716e5ed6f594117193ce",
  measurementId: "G-47R3ML1TR4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
