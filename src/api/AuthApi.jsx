import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";

//todo: handle user log in
export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

//todo: handle new user sign in
export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

//todo: hnadle log in with Google
export const GoogleSignInAPI = () => {
    try {
      let googleProvider = new GoogleAuthProvider();
      let res = signInWithPopup(auth, googleProvider);
      return res;
    } catch (err) {
      return err;
    }
  };

//todo: handle user log out 
export const onLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};