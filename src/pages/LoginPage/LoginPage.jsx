import React from 'react';
import './LoginPage.css';
import { data } from 'jquery';

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

  const loginUser = (formData) => {
    data = {}
    data.username = formData.get("username");
    data.password = formData.get("password");

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className='loginContainer'>
      <div id='loginSide' className='loginSide loginActive'>
        <form className='loginForm' action={loginUser}>
          <h3>Login</h3>
          <div className='loginInputs'>
            <div className="input-group">
              <input name='username' type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username or Email</label>
            </div>
            <div className="input-group">
              <input name='password' type="password" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <span className='forgotPswd'>Forgot you password?</span>
          </div>
          <div className='loginLinks'>
            <div><button type='submit' className='loginBtn'>Login</button></div>
            <div><button onClick={activateRegister} className='registerBtn'>Register</button></div>
          </div>
        </form>
      </div>
      <div id='panelImage' className='panelImage'>
        <h1 className='panelHeader'>Chat App</h1>
      </div>
      <div id='registerSide' className='registerSide'>
        <h3>Register</h3>
          <div className='loginInputs'>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
            </div>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
            </div>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <div className="input-group">
              <input type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
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