import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyB5sUlcHGMh4IP214su-LQr3yeYvUSP5dE",
  authDomain: "probandoweas-89ff2.firebaseapp.com",
  projectId: "probandoweas-89ff2",
  storageBucket: "probandoweas-89ff2.appspot.com",
  messagingSenderId: "20732202401",
  appId: "1:20732202401:web:6205fd2a32dfed9a7f8fe0",
  measurementId: "G-QNE698E9TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }