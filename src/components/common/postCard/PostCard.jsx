import React, { useState, useMemo, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../likeButton/LikeButton";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../api/FireStoreAPI";

const PostCard = ({ posts, getEditData }) => {
  const [showFullStatus, setShowFullStatus] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const maxStatusLength = 150;
  const navigate = useNavigate();
  // console.log(currentUser.id,);

  const toggleStatus = () => {
    setShowFullStatus(!showFullStatus);
  };
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections( currentUser?.id,posts.userID, setIsConnected);
  }, [ currentUser?.id,posts.userID]);


  return  isConnected || currentUser?.id === posts.userID ? (
    
    <div className="postCard">
      <div className="post_user_profile">
        <img
          src={
            allUsers
              .filter((item) => item.id === posts?.userID)
              .map((item) => item.profileLink)[0]
          }
          alt="profilePic"
        />
        <div className="content">
          <p
            className="name"
            onClick={() =>
              navigate("/profile", {
                state: {
                  id: posts?.userID,
                  email: posts?.userEmail,
                },
              })
            }
          >
            {" "}
            {allUsers.filter((user) => user.id === posts?.userID)[0]?.name}
          </p>
          <p className="headline">{allUsers
              .filter((item) => item.id === posts.userID)
              .map((item) => item.headline)[0]}</p>
          <p className="timeline">{posts.timeStamp}</p>
        </div>
      </div>
      {posts.status.length > maxStatusLength ? (
        <>
          <p className="postStatus">
            {showFullStatus
              ? posts.status
              : `${posts.status.slice(0, maxStatusLength)}...`}
          </p>
          <button onClick={toggleStatus} className="toggleSeeMore">
            {showFullStatus ? "See Less" : "See More"}
          </button>
        </>
      ) : (
        <p className="postStatus">{posts.status}</p>
      )}
      {
        posts.postImage ? (
          <img src={posts.postImage} alt="post Image" className="postImage" />
        ) : (
          null
        )
      }
      
        
      <LikeButton
        userId={currentUser?.id}
        currentUser={currentUser}
        postId={posts.id}
      />
      {currentUser.id === posts.userID ? (
        <div className="edit_del">
          <i
            className="fa-regular fa-pen-to-square"
            onClick={() => getEditData(posts)}
          ></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => deletePost(posts.id)}
          ></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (<></>);
};

export default PostCard;
