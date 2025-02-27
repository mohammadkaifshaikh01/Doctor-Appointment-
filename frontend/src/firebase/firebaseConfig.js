// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA6YX4Ek9M0VzrjA6YMPUem-3va67oreN8",
  authDomain: "doctorsytem.firebaseapp.com",
  projectId: "doctorsytem",
  storageBucket: "doctorsytem.firebasestorage.app",
  messagingSenderId: "1002917110201",
  appId: "1:1002917110201:web:74a60dae23ab643b1c1668"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire);
const db = getFirestore(fire);
export default {auth,db}