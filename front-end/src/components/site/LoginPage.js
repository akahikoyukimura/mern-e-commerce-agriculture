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

  const [data, setData] = useState({ uUsername: "", uPassword: "" });
  
  console.log(data.uPassword+' -> '+data.uUsername);

//   useEffect(() => {
//       const userInfo=localStorage.get("userInfo");
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    //try {
        //const url = "http://localhost:5000/api/auth/login";
        //const { data: res } = await axios.post(url, data);
        await axios.post('http://localhost:5000/api/auth/login', data)
          .then(function (response) {
            console.log(response);
            localStorage.setItem("userInfo", JSON.stringify(response));
          })
          .catch(function (error) {
            console.log(error);
          });
        //console.log('hi'+res.data);
        //localStorage.setItem("token", res.data);
        //window.location = "/dashboard";
    // } catch (error) {
    //     if (
    //         error.response &&
    //         error.response.status >= 400 &&
    //         error.response.status <= 500
    //     ) {
    //         console.log('erreur');
    //     }
    // }
  };



  return (
    <>
      <div class="content login-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 order-md-2">
              <img src={img} alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>
                      Log In to <strong>AgriKit</strong>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group first">
                      <input type="text" class="form-control" id="username" 
                      placeholder="Username"
                      value={data.uUsername}
                      onChange = {(e) => setData({...data, uUsername: e.target.value})}
                      />
                    </div>
                    <div class="form-group last mb-4">
                      <input
                      placeholder="Password"
                        type="password"
                        class="form-control"
                        id="password"
                        value={data.uPassword}
                        onChange = {(e) => setData({...data, uPassword: e.target.value})}
                      />
                    </div>

                    <div
                      class="d-flex mb-5 align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      <label class="control control--checkbox mb-0">
                        <span class="caption">Remember me</span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleChangeCheckbox}
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <span class="ml-auto">
                        <a href="#" class="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>

                    <button 
                      type="submit"
                      class="btn text-white btn-block btn-primary"
                    >Log In</button>
                    </form>

                    <span class="d-block text-left my-4 text-muted">
                      {" "}
                      or sign in with
                    </span>

                    <div class="social-login">
                      <a href="#" class="facebook">
                        <span class="icon-facebook mr-3">
                          <FaFacebookF />
                        </span>
                      </a>
                      <a href="#" class="twitter">
                        <span class="icon-twitter mr-3">
                          <FaTwitter />
                        </span>
                      </a>
                      <a href="#" class="google">
                        <span class="icon-google mr-3">
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
