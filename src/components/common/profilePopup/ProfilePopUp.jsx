import React, { useState } from 'react';
import { onLogout } from '../../../api/AuthApi';
import './style.scss';
import avatar from '../../../assets/avatar.png'
import { Link } from 'react-router-dom';


const ProfilePopUp = () => {

    const[popUpClose, setPopUpClose] = useState(false);

    const popUpCloseHandeller = () =>{
        setPopUpClose(true);
    }

  return (
    <div className='popUp'>
        <div className="popUp_profile">
            <img src={avatar} alt="" />
            <div className="popUp_name">
                <p className='popUp_name_user'> Trisha Das </p>
                <p> trishadas@gmail.com</p>
                <p>Junior Developer at Geekster</p>
            </div>
        </div>
        <Link to='/profile'><button onClick={popUpCloseHandeller}>View Profile</button></Link>
        <hr />
        <p className='signOut' onClick={onLogout}>Sign Out</p>
    </div>
  )
}

export default ProfilePopUp