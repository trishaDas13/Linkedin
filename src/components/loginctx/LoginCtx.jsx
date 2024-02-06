import React, {useState} from 'react'
import './LoginCtx.scss'
import { LoginAPI, GoogleSignInAPI } from '../../api/AuthApi';
import logo from '../../assets/logo.svg'
import lottie from '../../assets/loginLoto.svg'
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Home from '../../pages/home/Home';

const LoginCtx = () => {

  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  //todo: to handle  page after sign in successfull
  const login = async(e) =>{
    e.preventDefault();
    try{
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success('Sign In to Linkedin');
      localStorage.setItem("userEmail", res.user.email);
      navigate('/home')
    }catch(err){
      toast.error("Please Check your Log in Credentials");
    }
  }

  //todo:  for google sign in
  const googleSignIn = () =>{
    GoogleSignInAPI();
    navigate('/home')
  }

  return (
    <div className='LoginPage'>
      <header>
        <nav>
            <img src={logo} alt="Linked in Logo" />
            <div className="login_butns">
              <button>Join Now</button>
              <button>Sign in</button>
            </div>
        </nav>
      </header>
      {/* main started  */}
      <main>
        {/* form area started here ... */}
        <div className="form_area">
          <h1>Discover what your network can do for you</h1>
          <form action="">
            <div className="form_field email">
              <label>Email ID</label>
              <input 
                type="email" 
                placeholder='Enter you email here ...'
                onChange={(e) => setCredentials({...credentails, email: e.target.value})}
                required
              />
            </div>
            <div className="form_field password">
              <label>Password</label>
              <input 
                type="password"
                placeholder='Enter password here...'
                onChange={(e) => setCredentials({...credentails, password: e.target.value})}
                required
              />
            </div>
            <button onClick={login} className="signIn">Sign In</button>
          </form>
          <hr className="hr-text gradient" data-content="OR" />
          <div className="option_btns">
            <button onClick={googleSignIn}>Continue with Google</button>
            <button>New to Linked in? <Link to='/register'>Join Now</Link></button>
          </div>

        </div>
        {/* lottie area  startesd here... */}
        <div className="lottie_area">
          <img src={lottie} alt="a man with laptop" />
        </div>
      </main>
    </div>
  )
}

export default LoginCtx