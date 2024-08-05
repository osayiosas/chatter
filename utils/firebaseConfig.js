// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ZaPziNUxHwSJ5L2UJx4Ma1jd-mw4WuA",
  authDomain: "chatter-app-95f7e.firebaseapp.com",
  projectId: "chatter-app-95f7e",
  storageBucket: "chatter-app-95f7e.appspot.com",
  messagingSenderId: "390685680109",
  appId: "1:390685680109:web:373da6ce30b6e01f9547e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export default (auth, provider, db);
