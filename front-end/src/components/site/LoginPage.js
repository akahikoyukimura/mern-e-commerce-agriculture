import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../images/undraw_file_sync_ot38.svg";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function LoginPage({history}) {
  const [checked, setChecked] = useState(false);
  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };

  const [Data, setData] = useState({ uUsername: "", uPassword: "" });

//   useEffect(() => {
//       const userInfo=localStorage.get("userInfo");
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);

        await axios.post('http://localhost:5000/api/auth/login', Data)
          .then( response=> {
            localStorage.setItem("userInfo", JSON.stringify(response));
            if (response.data.uRrole==='admin') {
                window.location = "/dashboard";
            } else {
                window.location = "/";
            }
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
                      Log In to <strong>AgriKit</strong>
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
                    <div className="form-group last mb-4">
                      <input
                      placeholder="Password"
                        type="password"
                        className="form-control"
                        id="password"
                        value={Data.uPassword}
                        onChange = {(e) => setData({...Data, uPassword: e.target.value})}
                      />
                    </div>

                    <div
                      className="d-flex mb-5 align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleChangeCheckbox}
                        />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto">
                        <a href="#" className="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>

                    <button 
                      type="submit"
                      className="btn text-white btn-block btn-primary"
                    >Log In</button>
                    </form>

                    <span className="d-block text-left my-4 text-muted">
                      {" "}
                      or sign in with
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
  );
}

export default LoginPage;
