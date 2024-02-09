import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader';
import NetworkCtx from '../../components/networkCtx/NetworkCtx';

const Network = ({currentUser}) => {

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
    loading ? <Loader /> : <NetworkCtx currentUser={currentUser} />
  )
}

export default Network;