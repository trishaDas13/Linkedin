import React, { useEffect, useState } from 'react';
import LoginCtx from '../../components/loginctx/LoginCtx';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseConfig';
import Loader from '../../components/common/Loader/Loader';

const Login = () => {

  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <LoginCtx />
}

export default Login;