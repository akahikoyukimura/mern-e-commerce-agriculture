import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../../images/undraw_file_sync_ot38.svg';
import { FaFacebookF, FaTwitter,FaGoogle } from "react-icons/fa";

function LoginPage() {
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
    <div class="content login-content">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-2">
          <img src={img} alt="Image" class="img-fluid"/>
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>Log In to <strong>AgriKit</strong></h3>
            </div>
            <form action="#" method="post">
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username"/>

              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password"/>
                
              </div>
              
              <div class="d-flex mb-5 align-items-center" style={{ justifyContent: 'space-between' }}>
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked={checked}
          onChange={handleChange}/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" class="btn text-white btn-block btn-primary"/>

              <span class="d-block text-left my-4 text-muted"> or sign in with</span>
              
              <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3">
                      <FaFacebookF/>
                      </span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3">
                      <FaTwitter/>
                      </span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3">
                      <FaGoogle/>
                      </span> 
                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}

export default LoginPage