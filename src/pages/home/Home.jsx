import React, { useEffect, useState } from 'react';
import HomeCtx from '../../components/homeCtx/HomeCtx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader';


const Home = ({currentUser}) => {
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
     loading ? <Loader /> : <HomeCtx currentUser={currentUser} />
  )
}

export default Home;