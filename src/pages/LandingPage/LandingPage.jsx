import React, { useState } from 'react';
// import LoginComponent from '../LoginPage/LoginPage';
import './LandingPage.css'
import asteroid from './asteroid.png'
import { NavLink } from 'react-router-dom';
import personOnComputer from './personOnComputer.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LandingPage = (props) => {
  var cursorBlock;
  var [cursorStationary, setCursorStationary] = useState(false);
  var [headerLinksAlter, setHeaderLinksAlter] = useState(false);

  setTimeout(() => {
    cursorBlock = document.getElementById("cursorBlock");    
    cursorBlock.addEventListener('animationend', cursorEnd);
  }, 1000);

  function cursorEnd() {
    setCursorStationary(true);
    setTimeout(function() {
      setCursorStationary(false);
    }, 6000);
    setTimeout(function() {
      setCursorStationary(true);
    }, 4000);
  }

  let scrollY = 0;

  document.addEventListener("scroll", (event) => {
    scrollY = window.scrollY;
    if (scrollY < 850) {
      setHeaderLinksAlter(false);
    }
    if (scrollY >= 850) {
      setHeaderLinksAlter(true);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  
  return (
    <div>
      {/* <LoginComponent />   */}
      <header className='landingHeader'>
        <div className='headerLogo'>
          <img alt='myLogo'></img>
        </div>
        <div id='headerLinks' className={headerLinksAlter ? 'headerLinks headerLinksAltered' : 'headerLinks'}>
          <ul className='headerList'>
            <li>Home</li>
            <li>My Work</li>
            <li>Contact Me</li>
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
        <section id='landingSection1' className='landingSection1'>
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
          <div>
          <p>Lorem ipsum dolor sit amet. Eos dignissimos minima cum voluptas exercitationem in tempore galisum ex deserunt quaerat et iure quidem. Et voluptates rerum est quos sapiente aut ipsa impedit non numquam dolorem ut quibusdam cupiditate est impedit consequatur. Qui harum velit qui quaerat velit et error error. Ea ullam optio et impedit aliquam est delectus voluptas. </p><p>Hic dolor voluptatem est voluptatem itaque vel autem quam in amet neque in minima exercitationem quo dolorem harum non magnam ullam. Qui nostrum officiis eum quia ratione est neque blanditiis qui aperiam possimus nam quibusdam veniam non voluptatem expedita ea pariatur voluptas? Aut mollitia natus et dignissimos laborum hic numquam voluptatem sed sint doloremque ut adipisci inventore vel quibusdam dolore. Est nemo magnam 33 consequatur illo et quas omnis et sint magni et eligendi laboriosam et ratione minus. Qui deserunt dolorem est enim voluptas in commodi harum sed quae tempore aut magni dolore et iure omnis est minus dolorum. Et suscipit tempore et inventore delectus aut iure minima quo velit tenetur. Et dolor velit ut nihil error ad velit quae eum aliquam dolorem! </p>
          </div>
          <div>
            <img alt='person on Computer' src={personOnComputer}></img>
          </div>
          {/* <div className='contentBox1'>
            <h1>Chat App</h1>
          </div> */}
        </section>
    </div>
  );
}

export default LandingPage;