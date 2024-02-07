import React, { useState } from "react";
import "./style.scss";
import avatar from "../../../assets/avatar.png";
import { useNavigate } from 'react-router-dom'

const PostCard = ({ posts }) => {
  const [showFullStatus, setShowFullStatus] = useState(false);
  const maxStatusLength = 150; 
  const navigate = useNavigate();

  const toggleStatus = () => {
    setShowFullStatus(!showFullStatus);
  };

  return (
    <div className="postCard">
      <div className="post_user_profile">
        <img src={avatar} alt="profilePic" />
        <div className="content">
          <p className="name" onClick={() => navigate('/profile',{
            state:{
              id: posts?.userID,
              email: posts?.userEmail
            }
          })}>{posts.userName}</p>
          <p className="headline">Junior Developer at Geekster</p>
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
      <div className="likeStorage">
        <p className="likeCount">1 People Like this Post</p>
        <hr />
        <div className="like_comment">
          <button>
            <i className="fa-regular fa-heart"></i>
            Like
          </button>
          <button>
            <i className="fa-solid fa-comment-dots"></i>
            Comment
          </button>
        </div>
      </div>
      <div className="edit_del">
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default PostCard;
