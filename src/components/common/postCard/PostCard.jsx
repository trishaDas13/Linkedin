import React, { useState, useMemo } from "react";
import "./style.scss";
import avatar from "../../../assets/avatar.png";
import { useNavigate } from 'react-router-dom';
import LikeButton from "../likeButton/LikeButton";
import { getCurrentUser,getAllUsers, deletePost } from "../../../api/FireStoreAPI";


const PostCard = ({ posts, getEditData}) => {
  const [showFullStatus, setShowFullStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const[allUsers, setAllUsers] = useState([]);
  const maxStatusLength = 150; 
  const navigate = useNavigate();

  const toggleStatus = () => {
    setShowFullStatus(!showFullStatus);
  };
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);
  
  return (
    <div className="postCard">
      <div className="post_user_profile">
        <img src={allUsers
              .filter((item) => item.id === posts.userID)
              .map((item) => item.profileLink)[0]} alt="profilePic" />
        <div className="content">
          <p className="name" onClick={() => navigate('/profile',{
            state:{
              id: posts?.userID,
              email: posts?.userEmail
            }
          })}>{posts.userName}</p>
          <p className="headline">{currentUser.headline}</p>
          <p className="timeline">{posts.timeStamp}</p>
        </div>
      </div>
      {posts.status.length > maxStatusLength ? (
        <>
          <p className="postStatus">
            {showFullStatus ? posts.status : `${posts.status.slice(0, maxStatusLength)}...`}
          </p>
          <button onClick={toggleStatus} className="toggleSeeMore">
            {showFullStatus ? "See Less" : "See More"}
          </button>
        </>
      ) : (
        <p className="postStatus">{posts.status}</p>
      )}
      <LikeButton
         userId={currentUser?.id}
         currentUser={currentUser}
         postId={posts.id}
      />
     {
      currentUser.id === posts.userID ? (
        <div className="edit_del">
        <i 
          className="fa-regular fa-pen-to-square"
          onClick={() => getEditData(posts)}
        ></i>
        <i className="fa-solid fa-trash" onClick={() => deletePost(posts.id)}></i>
      </div>
      ) : (
        <></>
      )
     }
      
    </div>
  );
};

export default PostCard;
