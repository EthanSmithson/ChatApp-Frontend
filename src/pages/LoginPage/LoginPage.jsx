import React from 'react';
import './LoginPage.css';

const LoginPage = () => {

  const activateRegister = () => {
    let loginSide = document.getElementById("loginSide")
    loginSide.classList.remove("loginActive");
    let registerSide = document.getElementById("registerSide")
    registerSide.classList.add("registerActive");
    let panelImage = document.getElementById("panelImage")
    panelImage.classList.add("panelRegister");
  }

  const activateLogin = () => {
    let loginSide = document.getElementById("loginSide")
    loginSide.classList.add("loginActive");
    let registerSide = document.getElementById("registerSide")
    registerSide.classList.remove("registerActive");
    let panelImage = document.getElementById("panelImage")
    panelImage.classList.remove("panelRegister");
  }

  return (
    <div className='loginContainer'>
      <div id='loginSide' className='loginSide loginActive'>
        <h3>Login</h3>
        <div className='loginInputs'>
        <div class="input-group">
          <input type="text" required></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Username or Email</label>
        </div>
        <div class="input-group">
          <input type="text" required></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>
        <span className='forgotPswd'>Forgot you password?</span>
        </div>
        <div className='loginLinks'>
          <div><button className='loginBtn'>Login</button></div>
          <div><button onClick={activateRegister} className='registerBtn'>Register</button></div>
        </div>
      </div>
      <div id='panelImage' className='panelImage'>
        <h1 className='panelHeader'>Chat App</h1>
      </div>
      <div id='registerSide' className='registerSide'>
        <h3>Register</h3>
          <div className='loginInputs'>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>First Name</label>
            </div>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Last Name</label>
            </div>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Username</label>
            </div>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <div class="input-group">
              <input type="text" required></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Confirm Password</label>
            </div>
          </div>
          <div className='loginLinks'>
            <div><button className='loginBtn'>Register</button></div>
            <div><button onClick={activateLogin} className='registerBtn'>Login</button></div>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;