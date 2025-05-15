// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbeRCu3Tl-gih7vN5KNfQHQ1Hfh9AY57o",
  authDomain: "coder-react-flex-3e5de.firebaseapp.com",
  projectId: "coder-react-flex-3e5de",
  storageBucket: "coder-react-flex-3e5de.firebasestorage.app",
  messagingSenderId: "502642108511",
  appId: "1:502642108511:web:4b105670cd215e4194d3ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);