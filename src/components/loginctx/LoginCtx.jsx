import React from 'react'
import './LoginCtx.scss'
import { LoginAPI } from '../../api/AuthApi';
import logo from '../../assets/logo.svg'
import lottie from '../../assets/loginLoto.svg'

const LoginCtx = () => {
  const login = () =>{
    LoginAPI()
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
                required
              />
            </div>
            <div className="form_field password">
              <label>Password</label>
              <input 
                type="password"
                placeholder='Enter password here...'
                required
              />
            </div>
            <button className="signIn">Sign In</button>
          </form>
          <hr />
          <div className="option_btns">
            <button>Continue with Google</button>
            <button>New to Linked in? Join Now</button>
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