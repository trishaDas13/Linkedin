import { firestore } from "../FirebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
let commentsRef = collection(firestore, "comments");
let connectionRef = collection(firestore, "connections");

//todo: store post in firestore
export const postStatus = (object) => {
  
    addDoc(postsRef, object)
      .then(() => {
        toast.success("Post has been added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
//todo: get post from firestore
  export const getStatus = (setAllStatus) => {
    // const q = query(postsRef, orderBy("timeStamp"));
    onSnapshot(postsRef, (response) => {
      setAllStatus(
        response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  };