// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgn7GFnDYb8LRZdVNaLgtTE57ufyDYoLA",
  authDomain: "react-todoapp-7fe8d.firebaseapp.com",
  databaseURL: "https://react-todoapp-7fe8d-default-rtdb.firebaseio.com",
  projectId: "react-todoapp-7fe8d",
  storageBucket: "react-todoapp-7fe8d.appspot.com",
  messagingSenderId: "427693900813",
  appId: "1:427693900813:web:12c5a1fcafe3c3381d4144",
  measurementId: "G-S6VCVVDKWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
