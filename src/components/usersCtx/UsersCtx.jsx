import React, { useState } from "react";
import ProfileCard from "../common/profileCard/ProfileCard";
import ProfileEdit from "../common/profileEdit/ProfileEdit";
import '../profileCtx/style.scss'


const UsersCtx = ({currentUser}) => {
    const [isEdit, setisEdit] = useState(false);

    const onEdit = () => {
        setisEdit(!isEdit);
      };


  return (
    <div className="profileCtx">
        {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  )
}

export default UsersCtx