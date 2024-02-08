import React, { useMemo, useState, useEffect } from "react";
import "../postCard/style.scss";
import { likePost, getLikesByUser, postComment, getComments } from "../../../api/FireStoreAPI";
import InputEmoji from 'react-input-emoji';
import GetTime from '../postUpdate/GetTime'
import { nanoid } from "nanoid";
import { toast } from "react-toastify";



const LikeButton = ({ userId, postId,currentUser }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const[text, setText] = useState('')
  //todo: sending data to firestoreAPI on like click
  const handleClick = () => {
    likePost(userId, postId, liked);
  };

  //todo: show and hide commentbox
  const hideComment = () =>{
    setShowCommentBox(!showCommentBox)
  }

  const addComment = () => {
    if(text === ""){
      toast('Could not add the Comment');
      return
    }
    postComment(postId, text, GetTime("LLL"), currentUser?.name);
    setText("");
  };


  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
  }, [userId, postId]);

  return (
    <div className="likeStorage">
      {likesCount > 0 ? (
        <p className="likeCount">{likesCount} People Like this Post</p>
      ) : (
        <></>
      )}

      <hr />
      <div className="like_comment">
        <button onClick={handleClick}>
          {liked ? (
            <i className="fa-solid fa-heart" style={{ color: "#fb4179" }}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
          {liked ? (
            <span style={{ color: "#fb4179", fontWeight: "600" }}>Like</span>
          ) : (
            <span style={{ fontWeight: "600" }}>Like</span>
          )}
        </button>
        <button onClick={hideComment}>
          <i className="fa-solid fa-comment-dots"></i>
          Comment
        </button>
      </div>
      {showCommentBox ? (
        <div className="user_comment_box">
          <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          shouldReturn={true}
          onEnter={addComment}
          placeholder="Add Comment ..."
          name = "comment"
        />
         <button className="add-comment-btn" onClick={addComment}>
            Add 
          </button>

          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className="all-comments" key={nanoid()}>
                  <p className="name">{comment.name}</p>
                  <p className="timestamp">{comment.timeStamp}</p>
                  <p className="comment">{comment.comment}</p>

                  
                  
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LikeButton;
