import React from 'react';
import Topbar from '../common/topbar/Topbar';
import PostUpdate from '../common/postUpdate/PostUpdate';
import './style.scss'


const HomeCtx = () => {
  return (
    <div className='homePage'>
      <PostUpdate/>
      </div>
  )
}

export default HomeCtx