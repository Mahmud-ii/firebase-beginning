import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcZdIsXm7DrY3mGjpUgredydZpN2NOO5o",
  authDomain: "pedro-chat-app.firebaseapp.com",
  projectId: "pedro-chat-app",
  storageBucket: "pedro-chat-app.appspot.com",
  messagingSenderId: "770868795036",
  appId: "1:770868795036:web:49d186f8f1bf3d85f03f59"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
