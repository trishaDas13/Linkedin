import React, { useState } from "react";
import "./style.scss";
import { RegisterAPI, GoogleSignInAPI } from "../../api/AuthApi";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "../../pages/home/Home";
import { postUserData } from "../../api/FireStoreAPI";


const RegisterCtx = () => {
  const [credentails, setCredentials] = useState({});
  const navigate = useNavigate();

  //todo: to handle  page after sign in successfull
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Successfully created your account");
      postUserData({
        name: credentails.name,
        email: credentails.email
      })
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      toast.error("Please Check your Credentials");
    }
  };
  //todo:  for google sign in
  const googleSignIn = () => {
    GoogleSignInAPI();
    navigate("/home");
  };

  return (
    <div className="joinNow_page">
      <header>
        <nav>
          <img src={logo} alt="Linked in Logo" />
        </nav>
      </header>
      {/* main started  */}
      <main>
        {/* form area started here ... */}
        <div className="form_area">
          <h1>Make the most of your professional life</h1>
          <form action="">
            <div className="form_field name">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name here ..."
                onChange={(event) =>
                  setCredentials({ ...credentails, name: event.target.value })
                }
                required
              />
            </div>
            <div className="form_field email">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email here ..."
                onChange={(event) =>
                  setCredentials({ ...credentails, email: event.target.value })
                }
                required
              />
            </div>
            <div className="form_field password">
              <label>Password (6+ character)</label>
              <input
                type="password"
                placeholder="Enter password here..."
                onChange={(event) =>
                  setCredentials({
                    ...credentails,
                    password: event.target.value,
                  })
                }
                required
              />
            </div>
            <button onClick={registerUser}>Join Now</button>
          </form>
          <hr className="hr-text gradient" data-content="OR" />
          <button className="googleLogin" onClick={googleSignIn}>
            Continue with Google
          </button>
          <p className="signInText">
            Already on LinkedIn? <Link to="/">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterCtx;
