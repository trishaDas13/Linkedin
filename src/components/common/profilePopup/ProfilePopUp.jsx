import React, { useState, useMemo } from "react";
import { onLogout } from "../../../api/AuthApi";
import "./style.scss";
import avatar from "../../../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../api/FireStoreAPI";

const ProfilePopUp = () => {
  // const[popUpClose, setPopUpClose] = useState(false);
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
    <div className="popUp">
      <div className="popUp_profile">
        <img src={currentUser?.profileLink} alt="" />
        <div className="popUp_name">
          <p className="popUp_name_user"> {currentUser?.name} </p>
          <p> {currentUser?.email}</p>
          <p>{currentUser?.headline}</p>
        </div>
      </div>
      <button
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      >
        <i class="fa-solid fa-eye"></i>
        View Profile
        
      </button>
      <details className="details_set">
        <summary className="setting">
          <i class="fa-solid fa-gear"></i> Settings
        </summary>
        <div className="options">
        <details>
          <summary>
            <i class="fa-solid fa-circle-half-stroke"></i> Change Theme
          </summary>
          <div className="theme_option">
          <p>
            <i class="fa-solid fa-moon"></i>Dark Theme
          </p>
          <p>
            <i class="fa-solid fa-sun"></i>Ligh Theme
          </p>
          <p>
            <i class="fa-solid fa-desktop"></i>System
          </p>
          </div>
        </details>
        <p><i class="fa-solid fa-unlock"></i>Change Password</p>
        <p> <i class="fa-solid fa-language"></i>Change Language</p>
        </div>
      </details>
      <p className="signOut" onClick={onLogout}>
        
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span>Sign Out</span>
      </p>
    </div>
  );
};

export default ProfilePopUp;
