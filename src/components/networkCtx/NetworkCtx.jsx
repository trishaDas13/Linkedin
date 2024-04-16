import React, { useEffect, useState } from "react";
import './style.scss';
import { addConnection, getAllUsers } from '../../api/FireStoreAPI';
import ConnectedUsers from "../common/connectedUsers/ConnectedUsers";
import { nanoid } from 'nanoid';

const NetworkCtx = ({currentUser}) => {

    const [users, setUsers] = useState([]);


    const getCurrentUser = (id) => {
      addConnection(currentUser?.id, id);
    };
    useEffect(() => {
      getAllUsers(setUsers);
    }, []);

  return (
    <div className="wrapper">
      <div className='networkCtx'>
        <h3>People you may know</h3>
        <div className="localConnection">
            {users.map((user) => {
            return user.id === currentUser?.id ? (
            null
            ) : (
            <ConnectedUsers
                currentUser={currentUser}
                user={user}
                getCurrentUser={getCurrentUser}
                key={nanoid()}
            />
            );
        })}
        </div>
    </div>
    </div>
  )
}

export default NetworkCtx;