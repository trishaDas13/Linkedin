// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrKdzrIMmVwY9qHPT_bcqkH_1gQASnF-o",
  authDomain: "linkedin-clone-c2aaf.firebaseapp.com",
  projectId: "linkedin-clone-c2aaf",
  storageBucket: "linkedin-clone-c2aaf.appspot.com",
  messagingSenderId: "423903363179",
  appId: "1:423903363179:web:52d82e6f42272c9f51312e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {app, auth};