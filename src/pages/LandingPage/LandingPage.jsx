import React, { useState } from 'react';
// import LoginComponent from '../LoginPage/LoginPage';
import './LandingPage.css'
import asteroid from './asteroid.png'
import { NavLink } from 'react-router-dom';
import personOnComputer from './personOnComputer.png'
import { data } from 'jquery';

const LandingPage = (props) => {
  var cursorBlock;
  var [cursorStationary, setCursorStationary] = useState(false);

  setTimeout(() => {
    cursorBlock = document.getElementById("cursorBlock");    
    console.log(cursorBlock)
    cursorBlock.addEventListener('animationend', cursorEnd);
  }, 1000);

  function cursorEnd() {
    setCursorStationary(true);
    console.log(cursorBlock);
    setTimeout(function() {
      setCursorStationary(false);
    }, 6000);
    setTimeout(function() {
      setCursorStationary(true);
    }, 4000);
  }

  // setTimeout(function() {
  //   cursorAnimationEnd()
  // }, 3200);

  // function cursorAnimationEnd() {
  //   setCursorStationary(true);
  //   setTimeout(cursorAnimationStart, 6000);
  // }

  // function cursorAnimationStart() {
  //   setCursorStationary(false);
  //   setTimeout(cursorAnimationEnd, 4000);
  // }

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
          <div className='section1Text'>
            <h1 className='mainHeading'>Chat App is the best platform for connecting with friends and family.</h1>
            <h3 className='mainSub'>Find were you fit in with communities with Chat App.</h3>
          </div>
          <div className='floatMessage'>
          <div className="floatBox">
            Start Chatting Now!
            <div id='cursorBlock' className={`${!cursorStationary ? 'cursorBlock' : 'cursorBlockStationary'}`}>
              <div className='cursor'></div>
            </div>
          </div>
          </div>
        </section>
        <section className='landingSection2'>
          <div className='contentBox1'>
            <h1>Chat App</h1>
            <div>
              <img alt='person on Computer' src={personOnComputer}></img>
            </div>
          </div>
        </section>
    </div>
  );
}

export default LandingPage;