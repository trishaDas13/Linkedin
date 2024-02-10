import { storage } from "../FirebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./FireStoreAPI";

//todo: profile image
export const uploadProfileImage = (
    profile,
    id,
    setModalOpen,
    setProgress,
    // setCurrentImage
    
  ) => {
    const profilePicsRef = ref(storage, `profileImages/${profile.name}`);

    const uploadTask = uploadBytesResumable(profilePicsRef, profile);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
  
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
          editProfile(id, { profileLink: response });
          setModalOpen(false);
        //   setCurrentImage({});
          setProgress(0);
        
        });
      }
    );
  };
  //todo: cover Image
  export const uploadCoverImage = (
    cover,
    id,
    setCoverModalOpen,
    setProgress,
    // setCurrentImage
  ) => {
    const coverPicsRef = ref(storage, `coverImages/${cover.name}`);

    const uploadTask = uploadBytesResumable(coverPicsRef, cover);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
          setProgress(progress);
        
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
          editProfile(id, { coverLink: response });
          setCoverModalOpen(false);
        //   setCurrentImage({});
          setProgress(0);
        
        });
      }
    );
  };
  
  //todo: upload post image
  export const uploadPostImage = (file, setPostImage, setProgress) => {
    const postPicsRef = ref(storage, `postImages/${file.name}`);
    const uploadTask = uploadBytesResumable(postPicsRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
  
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
          setPostImage(response);
        });
      }
    );
  };