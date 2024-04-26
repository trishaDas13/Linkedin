import React, { useState } from "react";
import ProfileCard from "../common/profileCard/ProfileCard";
import ProfileEdit from "../common/profileEdit/ProfileEdit";
import '../profileCtx/style.scss'


const UsersCtx = ({currentUser}) => {

  return (
    <div className="profileCtx">
        
        <ProfileCard currentUser={currentUser} />
      
    </div>
  )
}

export default UsersCtx