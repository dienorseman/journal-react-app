// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeMc5ZrDn-moSb_9ZpT1VKfM6oP7Ou8Bw",
  authDomain: "jorunal-6dde0.firebaseapp.com",
  projectId: "jorunal-6dde0",
  storageBucket: "jorunal-6dde0.appspot.com",
  messagingSenderId: "639027010045",
  appId: "1:639027010045:web:32a02bcc8e1bd8082ae194",
  measurementId: "G-41EYNQEMVR"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirestoreDB = getFirestore(FirebaseApp);