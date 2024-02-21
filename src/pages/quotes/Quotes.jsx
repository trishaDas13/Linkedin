import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader';
import QuoteCtx from '../../components/quoteCtx/QuoteCtx';

const Quotes = () => {
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
    loading ? <Loader /> : <QuoteCtx/>
  )
}

export default Quotes