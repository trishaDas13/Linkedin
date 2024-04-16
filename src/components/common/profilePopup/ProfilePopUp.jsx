import React, { useState, useMemo } from 'react';
import { onLogout } from '../../../api/AuthApi';
import './style.scss';
import avatar from '../../../assets/avatar.png'
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../api/FireStoreAPI';

const ProfilePopUp = () => {

    const[popUpClose, setPopUpClose] = useState(false);
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});

    // Get current user information when the component is mounted 
    useMemo(() => {
        getCurrentUser(setCurrentUser);
      }, []);

    // const popUpCloseHandeller = () =>{
    //     setPopUpClose(true);
    // }
    

  return (
    <div className='popUp'>
        <div className="popUp_profile">
            <img src={currentUser?.profileLink} alt="" />
            <div className="popUp_name">
                <p className='popUp_name_user'> {currentUser?.name} </p>
                <p> {currentUser?.email}</p>
                <p>{currentUser?.headline}</p>
            </div>
        </div>
        <button onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }>View Profile</button>
        <hr />
        <p className='signOut' onClick={onLogout}>Sign Out</p>
    </div>
  )
}

export default ProfilePopUp;