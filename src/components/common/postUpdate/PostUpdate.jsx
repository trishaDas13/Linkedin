import React, { useState, useMemo } from "react";
import "./style.scss";
import { ImageGalleryIcon, ArticleIcon } from "../topbar/SVGstorage";
import avatar from "../../../assets/avatar.png";
import ModalCtx from "../modal/Modal";
import { postStatus, getStatus, updatePost } from "../../../api/FireStoreAPI";
import PostCard from "../postCard/PostCard";
import GetTime from "./GetTime";
import { nanoid } from "nanoid";

const PostUpdate = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  // const [postImage, setPostImage] = useState("");

  //todo: send status to firbase
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: GetTime("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: nanoid(),
      userID: currentUser.id,
      // postImage: postImage,
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
    setIsEdit(false);
  };

  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status)
    setModalOpen(false);
  }

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  //todo: render UI
  return (
    <div className="feedPost">
      <div className="PostBox">
        <div className="postArea">
          <img src={currentUser?.profileLink ? currentUser?.profileLink : avatar} alt="user's profile" />
          <p
            onClick={() => {
              setModalOpen(true);
              setIsEdit(false);
            }}
          >
            Start a post
          </p>
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
          updateStatus={updateStatus}
          // uploadPostImage={uploadPostImage}
          // postImage={postImage}
          // setPostImage={setPostImage}
          setCurrentPost={setCurrentPost}
          currentPost={currentPost}
        />
      </div>
      <div className="feed">
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts} getEditData={getEditData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostUpdate;
