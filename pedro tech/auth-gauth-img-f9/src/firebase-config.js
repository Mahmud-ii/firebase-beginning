import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxZBE_h5eHFz2PZsC1r47BE7HBOrbIK4U",
  authDomain: "auth-gauth-img.firebaseapp.com",
  projectId: "auth-gauth-img",
  storageBucket: "auth-gauth-img.appspot.com",
  messagingSenderId: "626650120767",
  appId: "1:626650120767:web:f2873b5d326250bab4ae8a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
    })
    .catch(error => {
      console.log(error)
    })
}
export const storage = getStorage(app)