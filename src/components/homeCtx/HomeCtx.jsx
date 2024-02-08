import React from 'react';
import PostUpdate from '../common/postUpdate/PostUpdate';
import './style.scss';
import HomeProfileBar from '../common/homeProfileBar/HomeProfileBar';



const HomeCtx = ({currentUser}) => {
  
  return (
    <div className='homePage'>
      <HomeProfileBar  currentUser={currentUser}/>
      <PostUpdate currentUser={currentUser}/>
      
      </div>
  )
}

export default HomeCtx