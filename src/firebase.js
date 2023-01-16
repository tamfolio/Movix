// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-w4Y6eeItzw3-aitT7J_TtFXdB79ZlIA",
  authDomain: "movix-be5d5.firebaseapp.com",
  projectId: "movix-be5d5",
  storageBucket: "movix-be5d5.appspot.com",
  messagingSenderId: "174898381340",
  appId: "1:174898381340:web:a4821678ee859a6d7c55d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);