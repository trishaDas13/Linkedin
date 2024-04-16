import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';


const HomeProfileBar = ({currentUser}) => {
    const navigate = useNavigate();

    const navigateToProfile = () =>{
        navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
    }
  return (
    <div className='home_profile_bar'>
        <div className="bgImage">
            <img src={currentUser?.coverLink} alt="backgroundImage" className='backgroundImage'  />
        </div>
        <div className="conact_content">
            <img src={currentUser?.profileLink} alt="" />
            <div className="names">
            <h4 onClick={navigateToProfile}>Hi, I’m {currentUser?.name}!</h4>
           
            </div>
            <hr />
            <h3>Connect with me on:</h3>
            <ul>
            <a href={currentUser?.contact1} target='_blank'><li>Instagram</li></a>
            <a href={currentUser?.contact3} target='_blank'><li>Linked in</li></a>
            </ul>
        </div>
    </div>
  )
}

export default HomeProfileBar