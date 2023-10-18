import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, fetchSignInMethodsForEmail} from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCngWP_HHCEjrU3jwquDCEATQ95VfFlZO4",
    authDomain: "netflix-clone-11c83.firebaseapp.com",
    projectId: "netflix-clone-11c83",
    storageBucket: "netflix-clone-11c83.appspot.com",
    messagingSenderId: "569843762290",
    appId: "1:569843762290:web:b48433b0338b485acd6eeb"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const navigate = useNavigate();

const registerUserWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((res => {
    console.log(res.user);
  }))
  .catch(err => console.log(err))
}

const signinWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((res => {
    console.log("success", res.user);
    localStorage.setItem("signedinUser", JSON.stringify(res.user.accessToken));
    
}))
  .catch(err => console.log("error", err.message))
}

const signOutUser = () => {
    signOut(auth)
    .then(res => {
      localStorage.clear();
      console.log('user signed out')})
    .catch(err => console.log("error occured", err.message))
}

export {auth, db, app, registerUserWithEmail, signinWithEmail, signOutUser}