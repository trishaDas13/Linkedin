import React from 'react';
import ProfileCard from '../common/profileCard/ProfileCard';
import './style.scss'

const ProfileCtx = ({currentUser}) => {
  return (
    <div className='profileCtx'>
      <ProfileCard currentUser={currentUser}/>
    </div>
  )
}

export default ProfileCtx;