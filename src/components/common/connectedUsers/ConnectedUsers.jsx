import React, { useState, useEffect } from "react";
import './style.scss';
import { nanoid } from 'nanoid';
import { getConnections } from '../../../api/FireStoreAPI';


const ConnectedUsers = ({user, getCurrentUser, currentUser}) => {
    
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
      getConnections(currentUser.id, user.id, setIsConnected);
    }, [currentUser.id, user.id]);

  return isConnected ? (
    <></>
  ) :(
    <div className='user' onClick={()=>getCurrentUser(user.id)} key={nanoid()}>
        <p>{user.name}</p>
    </div>
  )
}

export default ConnectedUsers