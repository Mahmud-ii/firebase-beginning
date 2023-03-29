// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// project-754530528161
// Your web app's Firebase configuration
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAY6GdyT6w0hMIgD1ioIkK-amszhcw49PQ",
  authDomain: "unichat-6ceff.firebaseapp.com",
  projectId: "unichat-6ceff",
  storageBucket: "unichat-6ceff.appspot.com",
  messagingSenderId: "754530528161",
  appId: "1:754530528161:web:b5269fc5f7fb5f139bf9e0"
}).auth()

// Initialize Firebase
// const app = initializeApp(firebaseConfig);