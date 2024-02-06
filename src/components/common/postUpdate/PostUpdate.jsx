import React, { useState, useMemo } from "react";
import "./style.scss";
import { ImageGalleryIcon, ArticleIcon } from "../topbar/SVGstorage";
import avatar from "../../../assets/avatar.png";
import ModalCtx from "../modal/Modal";
import { postStatus, getStatus } from "../../../api/FireStoreAPI";
import PostCard from "../postCard/PostCard";
import GetTime from "./GetTime";


const PostUpdate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");
  let userEmail = localStorage.getItem('userEmail')

  //todo: send status to firbase
  const sendStatus = async () => {
    let object = {
        status: status,
        timeStamp: GetTime("LLL"),
        userEmail: userEmail,
        // userName: currentUser.name,
        // postID: getUniqueID(),
        // userID: currentUser.id,
        // postImage: postImage,
      };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <div className="feedPost">
      <div className="PostBox">
        <div className="postArea">
          <img src={avatar} alt="user's profile" />
          <p onClick={() => setModalOpen(true)}>Start a post</p>
        </div>
        <div className="postOption">
          <div className="post_Opt">
            <ImageGalleryIcon />
            Media
          </div>
          <div className="post_Opt">
            <ArticleIcon />
            Write Article
          </div>
        </div>
        <ModalCtx
          setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          sendStatus={sendStatus}
          isEdit={isEdit}
          // updateStatus={updateStatus}
          // uploadPostImage={uploadPostImage}
          postImage={postImage}
          setPostImage={setPostImage}
          setCurrentPost={setCurrentPost}
          currentPost={currentPost}
        />
      </div>
      <div className="feed">
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostUpdate;
