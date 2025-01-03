import React, { useState } from 'react';
// import LoginComponent from '../LoginPage/LoginPage';
import './LandingPage.css'
import asteroid from './asteroid.png'
import { NavLink } from 'react-router-dom';
import personOnComputer from './personOnComputer.png'
import textCell from './phoneArt.jpg'
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
  gsap.registerPlugin(ScrollTrigger)
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

  const info1Meta = document.getElementById('info1Meta');
  const info1Media = document.getElementById('info1Media');
  gsap.set(info1Meta, {
    xPercent: -100,
    opacity: 0
  })

  gsap.set(info1Media, {
    xPercent: 100,
    opacity: 1
  })

  gsap.to(info1Meta, {
    scrollTrigger: {
      trigger: info1Meta,
      start: "top bottom",
      end: "bottom 90%",
      // markers: true,
      scrub: true
    },
    xPercent: 0,
    opacity: 1
  })

  gsap.to(info1Media, {
    scrollTrigger: {
      trigger: info1Media,
      start: "top center",
      end: "bottom 85%",
      // markers: true,
      scrub: true
    },
    xPercent: 0,
    opacity: 1
  })
  
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
            <li>About</li>
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
        <section className='infoSection'>
          <div className='info1'>
            <div id='info1Meta' className='info1Meta'>
              <p>Lorem ipsum dolor sit amet. Vel eligendi officia et sunt consequatur aut dolorem libero 33 commodi modi. Est placeat nostrum aut perspiciatis modi sed veritatis vero a alias numquam vel eligendi consequatur et eius animi ea quae velit! Et atque ipsam eum molestiae temporibus sit facilis culpa. Et maiores vitae est dicta quam hic illo corrupti rem mollitia necessitatibus et provident omnis cum tenetur quos non libero rerum! Sed quibusdam excepturi ab harum ipsam ut blanditiis repellendus! Et incidunt aliquam ut quidem culpa est tempore obcaecati. Rem harum doloremque aut aspernatur earum et porro internos rem accusamus inventore. In doloribus consequuntur eum dolorum libero sit numquam voluptatibus. Cum magni assumenda non possimus quibusdam qui impedit placeat hic incidunt facere? </p>
            </div>
            <div id='info1Media' className='info1Media'>
              <img alt='Texting on Cell' src={textCell}></img>
            </div>
          </div>
          <div className='info2'>
            <div id='info2Meta' className='info2Meta'>
              <p>Lorem ipsum dolor sit amet. Vel eligendi officia et sunt consequatur aut dolorem libero 33 commodi modi. Est placeat nostrum aut perspiciatis modi sed veritatis vero a alias numquam vel eligendi consequatur et eius animi ea quae velit! Et atque ipsam eum molestiae temporibus sit facilis culpa. Et maiores vitae est dicta quam hic illo corrupti rem mollitia necessitatibus et provident omnis cum tenetur quos non libero rerum! Sed quibusdam excepturi ab harum ipsam ut blanditiis repellendus! Et incidunt aliquam ut quidem culpa est tempore obcaecati. Rem harum doloremque aut aspernatur earum et porro internos rem accusamus inventore. In doloribus consequuntur eum dolorum libero sit numquam voluptatibus. Cum magni assumenda non possimus quibusdam qui impedit placeat hic incidunt facere? </p>
            </div>
            <div id='info2Media' className='info2Media'>
              <img alt='Texting on Cell' src={textCell}></img>
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