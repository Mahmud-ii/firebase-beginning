// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL1LKeA4N1RzC27NwugJ-Fdovdi9hi7Hs",
  authDomain: "pedro-blog-website.firebaseapp.com",
  projectId: "pedro-blog-website",
  storageBucket: "pedro-blog-website.appspot.com",
  messagingSenderId: "515495751653",
  appId: "1:515495751653:web:7af0e408d17f69b557090c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()