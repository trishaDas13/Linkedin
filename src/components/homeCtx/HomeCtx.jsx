import React from 'react';
import Topbar from '../common/topbar/Topbar';
import PostUpdate from '../common/postUpdate/PostUpdate';
import './style.scss'


const HomeCtx = ({currentUser}) => {
  
  return (
    <div className='homePage'>
      <PostUpdate currentUser={currentUser}/>
      </div>
  )
}

export default HomeCtx