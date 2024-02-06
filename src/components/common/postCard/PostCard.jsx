import React from "react";
import "./style.scss";
import avatar from "../../../assets/avatar.png";

const PostCard = ({ posts }) => {
  return (
    <div className="postCard">
      <div className="post_user_profile">
        <img src={avatar} alt="profilePic" />
        <div className="content">
          <p className="name">Trisha Das</p>
          <p className="headline">Junior Developer at Geekster</p>
          <p className="timeline">{Date.now()}</p>
        </div>
      </div>
      <p className="postStatus">{posts.status}</p>
      <div className="likeStorage">
        <p className="likeCount"> 1 People Like this Post </p>
        <hr />
        <div className="like_comment">
          <button>
          <i className="fa-regular fa-heart"></i>
            Like</button>
          <button>
          <i class="fa-solid fa-comment-dots"></i>
            Comment</button>
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
