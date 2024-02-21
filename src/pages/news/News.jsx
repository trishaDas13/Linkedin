import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader';
import NewsCtx from '../../components/newsCtx/NewsCtx';

const News = () => {

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
    loading ? <Loader /> : <NewsCtx/>
  )
}

export default News