import React, { useEffect, useState } from 'react';
import ProfileCtx from '../../components/profileCtx/ProfileCtx'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader';


const Profile = ({currentUser}) => {

  const [loading, setLoading] = useState(true);
    const  navigate = useNavigate();

    useEffect(() =>{
        onAuthStateChanged(auth, res =>{
            if(!res?.accessToken){
                navigate('/');
            }else{
                setLoading(false);
            }
        });
    }, [])
  return (
    loading ? <Loader /> : <ProfileCtx currentUser={currentUser} />
  )
}

export default Profile;