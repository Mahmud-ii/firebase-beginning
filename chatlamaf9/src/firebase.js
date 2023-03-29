import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARbuFX247RQXumXKbjRwo_YDGaqZvb5vM",
  authDomain: "chatlamaf9.firebaseapp.com",
  projectId: "chatlamaf9",
  storageBucket: "chatlamaf9.appspot.com",
  messagingSenderId: "871329365312",
  appId: "1:871329365312:web:5488684cb76d5ad854cea5",
  measurementId: "G-70NVNVR08F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();