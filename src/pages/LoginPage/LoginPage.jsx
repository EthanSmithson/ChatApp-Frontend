import React, { useState } from 'react';
import './LoginPage.css';
import { data } from 'jquery';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();
   var [showError, setShowError] = useState(false);
    var [showErrorText, setShowErrorText] = useState(false);

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
      .then(response => {
        if (response.ok) {
          navigate("/home")
        } else {
          throw new Error("Error Logging In!");
        }
      }
      )
      .then(data => console.log(data))
      .catch(error => {
        setShowError(true);
        setTimeout(() => {
          setShowErrorText(true)
        }, 100);
      });
  }

  const registerUser = (formData) => {
    data = {}
    data.firstName = formData.get("firstName");
    data.lastName = formData.get("lastName");
    data.email = formData.get("email");
    data.username = formData.get("username");
    data.password = formData.get("password");
    data.confirmPassword = formData.get("confirmPassword");

    fetch('http://localhost:8080/register', {
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
          <div className={showError ? 'loginError': ''}>
            <span className={showErrorText ? 'loginErrorText' : 'hideErrorText'}>Incorrect Credentials!</span>
          </div>
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
        <form action={registerUser} className='registerForm'>
        <h3>Register</h3>
          <div className='loginInputs'>
            <div className="input-group">
              <input name='firstName' type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>First Name</label>
            </div>
            <div className="input-group">
              <input name='lastName' type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Last Name</label>
            </div>
            <div className="input-group">
              <input name='email' type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="input-group">
              <input name='username' type="text" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username</label>
            </div>
            <div className="input-group">
              <input name='password' type="password" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <div className="input-group">
              <input name='confirmPassword' type="password" required></input>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Confirm Password</label>
            </div>
          </div>
          <div className='loginLinks'>
            <div><button type='submit' className='loginBtn'>Register</button></div>
            <div><button onClick={activateLogin} className='registerBtn'>Login</button></div>
          </div>  
        </form>
      </div>
    </div>
  );
}

export default LoginPage;