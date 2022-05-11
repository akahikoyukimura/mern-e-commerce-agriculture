import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../images/undraw_file_sync_ot38.svg";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function RegisterPage() {
   
    const [message, setMessage] = useState('');
  const [Data, setData] = useState({ uUsername: "", uPassword: "",uEmail:"",RuPassword:"" });

//   useEffect(() => {
//       const userInfo=localStorage.get("userInfo");
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);
    if (Data.uPassword !== Data.RuPassword) {
        setMessage("Passwords do not match");
      }
    await axios.post('http://localhost:5000/api/auth/register', Data)
          .then( response=> {
                window.location = "/loginPage";
          })
          .catch(error=> {
            console.log(error);
          });
  };
  return (
    <>
      <div className="content login-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src={img} alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>
                      Register to <strong>AgriKit</strong>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group first">
                      <input type="text" className="form-control" id="username" 
                      placeholder="Username"
                      value={Data.uUsername}
                      onChange = {(e) => setData({...Data, uUsername: e.target.value})}
                      />
                    </div>
                    <div className="form-group first">
                      <input type="email" className="form-control" id="email" 
                      placeholder="Email"
                      value={Data.uEmail}
                      onChange = {(e) => setData({...Data, uEmail: e.target.value})}
                      />
                    </div>
                    <div className="form-group first">
                      <input
                      placeholder="Password"
                        type="password"
                        className="form-control"
                        id="password"
                        value={Data.uPassword}
                        onChange = {(e) => setData({...Data, uPassword: e.target.value})}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <input
                      placeholder="Repeat Password"
                        type="password"
                        className="form-control"
                        id="password"
                        value={Data.RuPassword}
                        onChange = {(e) => setData({...Data, RuPassword: e.target.value})}
                      />
                    </div>
                    {message && <div className="alert alert-danger" role="alert">
  {message}
</div>}

                    <button 
                      type="submit"
                      className="btn text-white btn-block btn-primary"
                    >Register</button>
                    </form>
                    <span className="ml-auto no-account-yet">
                        
                        <Link
          to="/loginPage"
          className="forgot-pass"
        >
          Have an account
        </Link>
                      </span>

                    <span className="d-block text-left my-4 text-muted">
                      {" "}
                      or sign up with
                    </span>

                    <div className="social-login">
                      <a href="#" className="facebook">
                        <span className="icon-facebook mr-3">
                          <FaFacebookF />
                        </span>
                      </a>
                      <a href="#" className="twitter">
                        <span className="icon-twitter mr-3">
                          <FaTwitter />
                        </span>
                      </a>
                      <a href="#" className="google">
                        <span className="icon-google mr-3">
                          <FaGoogle />
                        </span>
                      </a>
                    </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage