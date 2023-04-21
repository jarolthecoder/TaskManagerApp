// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt01J6MgZTpI5l_oxlflfRcy0zB1TRv1M",
  authDomain: "react-projects-a89da.firebaseapp.com",
  projectId: "react-projects-a89da",
  storageBucket: "react-projects-a89da.appspot.com",
  messagingSenderId: "594695937150",
  appId: "1:594695937150:web:334d2df983cd3f9a89cc2f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);