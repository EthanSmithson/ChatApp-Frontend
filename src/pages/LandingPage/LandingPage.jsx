import React from 'react';
import LoginComponent from '../LoginPage/LoginPage';
import './LandingPage.css'
import asteroid from './asteroid.png'
import { NavLink } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div>
        {/* <LoginComponent />   */}
        <header className='landingHeader'>
          <div className='headerLogo'>
            <img alt='myLogo'></img>
          </div>
          <div className='headerLinks'>
            <ul className='headerList'>
              <li>Home</li>
              <li>About</li>
              <li>More Info</li>
            </ul>
          </div>
          <div className='headerOptions'>
            <NavLink to="/login"><button>Login</button></NavLink>
          </div>
        </header>
        <img className='asteroidImage' alt='ateroid' src={asteroid}></img>
          <img className='asteroidImage1' alt='ateroid' src={asteroid}></img>
          <img className='asteroidImage2' alt='ateroid' src={asteroid}></img>
          <img className='asteroidImage3' alt='ateroid' src={asteroid}></img>
          {/* <img className='asteroidImage4' alt='ateroid' src={asteroid}></img> */}
          <img className='asteroidImage5' alt='ateroid' src={asteroid}></img>
          {/* <img className='asteroidImage6' alt='ateroid' src={asteroid}></img> */}
          <img className='asteroidImage7' alt='ateroid' src={asteroid}></img>
        <section className='landingSection1'>
          <div className='contentBox1'>
            <h1>Chat App</h1>
          </div>
        </section>
    </div>
  );
}

export default LandingPage;