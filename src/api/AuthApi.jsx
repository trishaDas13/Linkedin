import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
  } from "firebase/auth";
  import { auth } from '../FirebaseConfig'

//   let auth = getAuth();

export const LoginAPI = (email, password) =>{
    try {
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
      } catch (err) {
        return err;
      }
}