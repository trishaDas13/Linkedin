import React, { useState } from "react";
import './style.scss'
import ProfileEdit from "../common/profileEdit/ProfileEdit";
import ProfileCard from '../common/profileCard/ProfileCard';

const ProfileCtx = ({currentUser}) => {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };
  return (
    <div className = "profileCtx">
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}

export default ProfileCtx;