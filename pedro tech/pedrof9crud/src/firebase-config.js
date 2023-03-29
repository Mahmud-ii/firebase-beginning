import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIQuSMQfM9E3FyC_NqaoH0R8AjkjujLfs",
  authDomain: "pedrof9tut.firebaseapp.com",
  projectId: "pedrof9tut",
  storageBucket: "pedrof9tut.appspot.com",
  messagingSenderId: "249448838031",
  appId: "1:249448838031:web:3765af36e21439710411fa",
  measurementId: "G-3TB3QEEL1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)