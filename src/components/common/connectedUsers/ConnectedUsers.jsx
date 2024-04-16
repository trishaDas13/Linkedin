import React, { useState, useEffect } from "react";
import "./style.scss";
import { nanoid } from "nanoid";
import { getConnections } from "../../../api/FireStoreAPI";

const ConnectedUsers = ({ user, getCurrentUser, currentUser }) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected);
  }, [currentUser.id, user.id]);

  return isConnected ? (
    <></>
  ) : (
    <div
      className="user "
      
      key={nanoid()}
    >
      <div className="bgImage">
        <img
          src={user.coverLink}
          alt="backgroundImage"
          className="backgroundImage"
        />
      </div>
      <div className="conact_content">
        <img src={user.profileLink} alt="user's profile image" />
        <div className="names">
          <h4>{user.name}</h4>
          <p>{user.headline}</p>
        </div>
        <button onClick={() => getCurrentUser(user.id)}>Connect</button>
      </div>
      
    </div>
  );
};

export default ConnectedUsers;
