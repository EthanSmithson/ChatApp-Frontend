import React, { useState, useEffect } from 'react';
import './LandingPage.css'
import asteroid from './asteroid.png'
import { NavLink } from 'react-router-dom';
import personOnComputer from './personOnComputer.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer"



const LandingPage = (props) => {
  var cursorBlock;
  var [cursorStationary, setCursorStationary] = useState(false);
  var [headerLinksAlter, setHeaderLinksAlter] = useState(false);
  var [contactFlip, setContactFlip] = useState(false);
  var [contactNameError, setContactNameError] = useState(false);
  var [contactEmailError, setContactEmailError] = useState(false);
  var [contactBodyError, setContactBodyError] = useState(false);
  var [showHamOptions, setShowHamOptions] = useState(false);
  var [showMobileHamOptions, setShowMobileHamOptions] = useState(false);
  var [morphDialog, setMorphDialog] = useState(false);
  var [mainImage1Hide, setMainImage1Hide] = useState(false);
  var [mainImage2Hide, setMainImage2Hide] = useState(false);
  var [mainImage1Stuck, setMainImage1Stuck] = useState(false);
  var [handleContacts, setHandleContacts] = useState(false);
  var { ref, inView } = useInView({
    threshold: 0,
  });


  setTimeout(() => {
    cursorBlock = document.getElementById("cursorBlock");
    if (cursorBlock) {
      cursorBlock.addEventListener('animationend', cursorEnd);
    }    

    const hamburgerOptionsSlide = document.getElementById("hamBtn");
    const hamburgerOptionsSlideMobile = document.getElementById("hamBtnMobile");
    const mobileHamburgerOptions = document.getElementById("mobileHamburgerOptions");
    const contactMeForm = document.getElementById("messageMeContainer")
    const messageMeContainer = document.getElementById("messageBtn")
    document.addEventListener('click', (event) => {
      if (event.target !== hamburgerOptionsSlide && event.target !== hamburgerOptionsSlideMobile) {
        setShowHamOptions(false);
        setShowMobileHamOptions(false);
      }

    })

    if (morphDialog) {
      contactMeForm.classList.remove("messageMeIconScale");
    }

    // messageMeContainer.addEventListener('click', (event) => {
    //   contactMeForm.classList.remove("messageMeIcon");
    // })
  }, 1);

  const openMessageDialog = (event) => {
    if (morphDialog === true && event.target === document.getElementById("messageMeContainer")) {
      setMorphDialog(false);
    } else {
      setMorphDialog(true);
    }
  }

  const closeMessageMe = () => {
    setMorphDialog(false);
  }

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
      setShowHamOptions(false);
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

  const flipContactForm = (event) => {
    setContactFlip(true);
    setTimeout(() => {
      setContactFlip(false);
    }, 4000);
  };

  const info1Meta = document.getElementById('info1Meta');
  const info1Media = document.getElementById('info1Media');
  gsap.set(info1Meta, {
    xPercent: -100,
    opacity: 0
  })

  gsap.set(info1Media, {
    xPercent: 115,
    opacity: 0
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
      start: "top 80%",
      end: "bottom 75%",
      // markers: true,
      scrub: true
    },
    xPercent: 30,
    opacity: 1
  })

  const circle1 = document.getElementById("circle1");

  gsap.set(circle1, {
    opacity: 1
  })

  gsap.to(circle1, {
    scrollTrigger: {
      trigger: circle1,
      start: "top center",
      end: "bottom 75%",
      // markers: true,
      scrub: true
    },
    yPercent: -75,
    opacity: 1
  })

  const circle2 = document.getElementById("circle2");

  gsap.set(circle2, {
    opacity: 1
  })

  const circle3 = document.getElementById("circle3");

  gsap.set(circle3, {
    opacity: 1
  })


  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }

  const scrollToAbout = () => {
    document.getElementById("info1").scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }

  const scrollToWork = () => {
    document.getElementById("info1").scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }

  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }

  const ball1 = document.getElementById("ball1");
  gsap.set(ball1, {
    yPercent: 0,
    opacity: 1
  });

  gsap.to(ball1, {
    scrollTrigger: {
      trigger: ball1,
      start: "top 90%",
      end: "bottom 55%",
      // markers: true,
      scrub: true
    },
    yPercent: -100,
    opacity: 0
  })

  const ball2 = document.getElementById("ball2");
  gsap.set(ball2, {
    yPercent: 0,
    opacity: 1
  });

  gsap.to(ball2, {
    scrollTrigger: {
      trigger: ball2,
      start: "top 75%",
      end: "bottom 30%",
      // markers: true,
      scrub: true
    },
    yPercent: -100,
    opacity: 0
  })

  const ball3 = document.getElementById("ball3");
  gsap.set(ball3, {
    yPercent: 0,
    opacity: 1
  });

  gsap.to(ball3, {
    scrollTrigger: {
      trigger: ball3,
      start: "top 50%",
      end: "bottom 5%",
      // markers: true,
      scrub: true
    },
    yPercent: -100,
    opacity: 0
  })

  const messageBubbleLeftAnimate = document.getElementById("messageBubbleLeftAnimate");
  gsap.set(messageBubbleLeftAnimate, {
    yPercent: 0,
    opacity: 0
  });

  gsap.to(messageBubbleLeftAnimate, {
    scrollTrigger: {
      trigger: messageBubbleLeftAnimate,
      start: "top 80%",
      end: "bottom 5%",
      // markers: true,
      scrub: true
    },
    yPercent: -200,
    opacity: 1
  })

  const messageBubbleRightAnimate2 = document.getElementById("messageBubbleRightAnimate2");
  gsap.set(messageBubbleRightAnimate2, {
    yPercent: 0,
    opacity: 0
  });

  gsap.to(messageBubbleRightAnimate2, {
    scrollTrigger: {
      trigger: messageBubbleRightAnimate2,
      start: "top 80%",
      end: "bottom 5%",
      // markers: true,
      scrub: true
    },
    yPercent: -100,
    opacity: 1
  })

  const messageBubbleLeftAnimate3 = document.getElementById("messageBubbleLeftAnimate3");
  gsap.set(messageBubbleLeftAnimate3, {
    yPercent: 0,
    opacity: 0
  });

  gsap.to(messageBubbleLeftAnimate3, {
    scrollTrigger: {
      trigger: messageBubbleLeftAnimate3,
      start: "top 80%",
      end: "bottom 5%",
      // markers: true,
      scrub: true
    },
    yPercent: -200,
    opacity: 1
  })

  const animatedHeart = document.getElementById("animatedHeart")
  gsap.set(animatedHeart, {
    xPercent: 0,
    opacity: 0,
    scale: .5
  });

  gsap.to(animatedHeart, {
    scrollTrigger: {
      trigger: animatedHeart,
      start: "top 90%",
      end: "bottom 7%",
      // markers: true,
      scrub: true
    },
    xPercent: 300,
    opacity: 1,
    scale: 1.7
  })

  const mainText1 = document.getElementById("mainText1");
  const mainImage1 = document.getElementById("mainImage1");
  const mainImage2 = document.getElementById("mainImage2");
  const mainText2 = document.getElementById("mainText2");
  const mainText3 = document.getElementById("mainText3");
  const mainText4 = document.getElementById("mainText4");
  gsap.set(mainText1, {
    yPercent: 0,
    opacity: 1,
  });

  gsap.to(mainText1, {
    scrollTrigger: {
      trigger: mainImage1,
      start: "top 5%",
      end: "bottom 25%",
      // markers: true,
      scrub: true
    },
    yPercent: -800,
    opacity: 0,
  })

  // gsap.set(mainText2, {
  //   yPercent: 0,
  //   opacity: 1,
  // });

  // gsap.to(mainText2, {
  //   scrollTrigger: {
  //     trigger: mainImage1,
  //     start: "top 55%",
  //     end: "bottom 75%",
  //     markers: true,
  //     scrub: true
  //   },
  //   yPercent: -800,
  //   opacity: 0,
  // })

  gsap.set(mainText3, {
    yPercent: 0,
    opacity: 1,
  });

  gsap.to(mainText3, {
    scrollTrigger: {
      trigger: mainImage2,
      start: "top 5%",
      end: "bottom 25%",
      // markers: true,
      scrub: true
    },
    yPercent: -800,
    opacity: 0,
  })

  // gsap.set(mainText4, {
  //   yPercent: 0,
  //   opacity: 1,
  // });

  // gsap.to(mainText4, {
  //   scrollTrigger: {
  //     trigger: mainImage2,
  //     start: "top 80%",
  //     end: "bottom 25%",
  //     // markers: true,
  //     scrub: true
  //   },
  //   yPercent: -800,
  //   opacity: 0,
  // })

  gsap.to(mainImage1, {
    scrollTrigger: {
      trigger: mainImage1,
      start: "top 18%",
      end: "bottom 35%",
      // markers: true,
      scrub: true
    },
    position: 'fixed',
    top: "18%",
    left: "-36%" ,
  })

  gsap.to(mainImage2, {
    scrollTrigger: {
      trigger: mainImage2,
      start: "top 18%",
      end: "bottom 35%",
      // markers: true,
      scrub: true
    },
    position: 'fixed',
    top: "18%",
    left: "-36%" ,
  })

  function submitContactForm(formData) {

    let data = {}
    data.name = formData.get("name");
    data.email = formData.get("email");
    data.body = formData.get("body");



    fetch('http://localhost:8080/contactMe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => contactValidate(data))
      .catch(error => console.error('Error:', error));

    // flipContactForm()
  }

  function contactValidate(data) {
    console.log(data)
    if (data.emailValid === false) {
      setContactEmailError(true);
    }
  }

  const openHam = () => {
    if (showHamOptions === true) {
      setShowHamOptions(false);
    } else {
      setShowHamOptions(true);
    }
  }


  const openMobileHam = () => {
    if (showMobileHamOptions === true) {
      setShowMobileHamOptions(false);
    } else {
      setShowMobileHamOptions(true);
    }
  }

  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 2100) {
      setMainImage1Hide(true);
    } else {
      setMainImage1Hide(false);
    }

    if (window.scrollY > 4800) {
      setMainImage2Hide(true);
    } else {
      setMainImage2Hide(false);
    }
    // console.log(window.scrollY)
  })

  useEffect(() => {
    if(inView)  {
      setTimeout(() => {
        setHandleContacts(true)  
      }, 2000);
    }
 }, [inView])

  return (
    <div>
      {/* <LoginComponent />   */}
      <header className='landingHeader'>
        <div className='headerLogo'>
          <img alt='myLogo'></img>
        </div>
        <div id='headerLinks' className={headerLinksAlter ? 'headerLinks headerLinksAltered' : 'headerLinks'}>
          <div>
            <ul className={headerLinksAlter ? 'hideLinks' : 'headerList'}>
              <li onClick={() => scrollToHome()}>Home</li>
              <li onClick={() => scrollToAbout()} id='aboutBtn'>About</li>
              <li onClick={() => scrollToWork()}>My Work</li>
              <li onClick={() => scrollToContact()}>Contact Me</li>
            </ul>
          </div>
        </div>
        <div className='headerOptions'>
          <div id='hamBtn' onClick={openHam} className={headerLinksAlter ? 'hamMenu showHamMenu' : 'hamMenu'}>
            <div className='hamMenuLine'></div>
            <div className='hamMenuLine'></div>
            <div className='hamMenuLine'></div>
          </div>
          <div className={showHamOptions ? 'hamburgerOptions' : 'hamburgerOptions'}>
              <ul className={showHamOptions ? 'hamburgerOptionsHide hamburgerOptionsSlide' : 'hamburgerOptionsHide'}>
                <li onClick={() => scrollToHome()}>Home</li>
                <li onClick={() => scrollToAbout()} id='aboutBtn'>About</li>
                <li onClick={() => scrollToWork()}>My Work</li>
                <li onClick={() => scrollToContact()}>Contact Me</li>
              </ul>
            </div>
          <NavLink to="/login"><button>Login</button></NavLink>
        </div>
        <div id='mobileHamburgerOptions' className='headerOptionsMobile'>
          <div id='hamBtnMobile' onClick={openMobileHam} className={headerLinksAlter ? 'hamMenu showHamMenu' : 'hamMenu showHamMenu'}>
            <div className='hamMenuLine'></div>
            <div className='hamMenuLine'></div>
            <div className='hamMenuLine'></div>
          </div>
          <div className={showMobileHamOptions ? 'mobileHamburgerOptions' : 'mobileHamburgerOptions'}>
              <ul className={showMobileHamOptions ? 'mobileHamburgerOptionsHide mobileHamburgerOptionsShow' : 'mobileHamburgerOptionsHide'}>
                <li onClick={() => scrollToHome()}>Home</li>
                <li onClick={() => scrollToAbout()} id='aboutBtn'>About</li>
                <li onClick={() => scrollToWork()}>My Work</li>
                <li onClick={() => scrollToContact()}>Contact Me</li>
                <li><NavLink to="/login"><button>Login</button></NavLink></li>
              </ul>
            </div>
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
          <div id='section1Text' className='section1Text'>
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
        <section id='animatedSection' className='animatedSection'>
          {/* <div className='balls'>
            <figure id='ball1' className="ball"><span className="shadow"></span></figure>
            <figure id='ball2' className="ball"><span className="shadow"></span></figure>
            <figure id='ball3' className="ball"><span className="shadow"></span></figure>
          </div> */}
          <div className='messagesAnimated'>
            <div id='stickyWrapper1' className='stickyWrapper'>
              <div className='imageColumn'>
                <div id='mainImage1' className={`${mainImage1Hide ? 'mainImage1 mainImage1Hide' : 'mainImage1'}`}>

                </div>
              </div>
              <div className='mainText'>
                <div id='mainText1' className='mainText1'>
                  test 1
                </div>
                <div id='mainText2' className='mainText2'>
                  test 2
                </div>
              </div>
            </div>

            <div className='stickyWrapper'>
              <div className='imageColumn'>
                <div id='mainImage2' className={`${mainImage2Hide ? 'mainImage1 mainImage1Hide' : 'mainImage1'}`}>

                </div>
              </div>
              <div className='mainText'>
                <div id='mainText3' className='mainText1'>
                  test 1
                </div>
                <div id='mainText4' className='mainText2'>
                  test 2
                </div>
              </div>
            </div>
            {/* <div id='messageBubbleLeftAnimate' className='messageBubbleLeftAnimate'>
              <figure id='messageBox1' className="messageBox1">
                Sign Up For Free!
                <div className='messageTri'></div>
              </figure>
            </div>
            <div id='messageBubbleRightAnimate2' className='messageBubbleRightAnimate2'>
              <figure id='messageBox2' className="messageBox2">
                😱
                <div className='messageTri2'></div>
              </figure>
            </div>
            <div id='messageBubbleLeftAnimate3' className='messageBubbleLeftAnimate'>
              <figure id='messageBox3' className="messageBox3">
                Connect with Friends and Family!
                <div className='messageTri3'></div>
              </figure>
            </div> */}
          </div>
        </section>
        <section className='infoSection'>
          <div id='info1' className='info1'>
            <div id='info1Meta' className='info1Meta'>
              <h3>
                Download to your mobile device to message whenever and wherever! Or use the web with our responsive design! 
              </h3>
            </div>
            <div id='info1Media' className='info1Media'>
              {/* <img alt='Texting on Cell' src={textCell}></img> */}
              <svg id='handCell' className='handCell' width="577" height="776" viewBox="0 0 677 876" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4295 97.2377C24.7879 83.3191 45.6604 93.758 49 93.758V124.379C44.3246 122.709 39.2595 127.395 37.3114 129.946V155C34.5284 153.608 25.9567 147.902 13.9342 136.21C-1.09404 121.595 -1.92894 111.156 11.4295 97.2377Z" fill="#8F5C27"/>
<path d="M38 471.412V36.1774C38 15.7607 59.5682 4.21885 70.3523 1H254.829C279.61 2.65541 289.935 25.1414 292 36.1774V464.514C290.899 490.449 267.678 500.611 256.206 502.451H78.6125C58.2374 506.865 43.0479 483.597 38 471.412Z" fill="#192F33" stroke="#262431"/>
<path d="M279 91H50V38.4333C54.4145 19.6199 69.3133 14.9166 76.2108 14.9166C129.782 14.2249 240.649 13.2566 255.548 14.9166C270.447 16.5766 277.391 31.286 279 38.4333V91Z" fill="#4B5F9E" stroke="#262431"/>
<circle cx="165" cy="52" r="27" fill="#6A78A9"/>
<path d="M72.8091 490.085C57.3266 488.428 51.152 472.824 50 465.229V91H279.473C280.625 208.838 282.238 448.658 279.473 465.229C276.709 481.8 263.576 488.704 257.356 490.085C202.291 490.775 88.2917 491.742 72.8091 490.085Z" fill="white" stroke="#262431"/>
<rect x="151" y="202" width="114" height="36" rx="12" fill="#47AC62"/>
<rect x="205" y="352" width="61" height="36" rx="12" fill="#47AC62"/>
<path d="M363.072 325.874C368.596 334.848 348.571 425.278 326.474 476.36C309.121 516.475 338.699 565.191 356.557 585.687L194.581 680L91 499.831L252.586 501.211C276.34 504.525 291.026 480.502 295.399 468.077V314.139L277.445 268.579C266.949 218.877 292.867 204.151 307.138 203C323.942 240.967 358.653 318.695 363.072 325.874Z" fill="#8F5C27"/>
<circle cx="26" cy="26" r="25.5" transform="matrix(-1 0 0 1 55 351)" fill="#8F5C27" stroke="#8F5C27"/>
<rect x="67" y="428" width="197" height="30" rx="15" stroke="#E4ECEF" stroke-width="2"/>
<circle className='messagePulse1' cx="222" cy="370" r="4" fill="#D9D9D9"/>
<circle className='messagePulse2' cx="236" cy="370" r="4" fill="#D9D9D9"/>
<circle className='messagePulse3' cx="248" cy="370" r="4" fill="#D9D9D9"/>
<path d="M250.86 388.122L250.86 395.892L243.269 388.122L250.86 388.122Z" fill="#47AC62"/>
<path d="M78.568 340.225L78.0447 348.766L86.7971 339.714L78.568 340.225Z" fill="#D7D9E8"/>
<rect x="66" y="294" width="152" height="47" rx="12" fill="#D7D9E8"/>
<path d="M251.55 237.488L251.55 245.258L243.959 237.488L251.55 237.488Z" fill="#47AC62"/>
<rect x="165" y="217" width="86" height="7" rx="1" fill="#D9D9D9"/>
<rect x="80" y="307" width="124" height="7" rx="1" fill="#919DC3"/>
<path d="M78.568 280.876L78.0447 289.417L86.7971 280.365L78.568 280.876Z" fill="#D7D9E8"/>
<rect x="66" y="248" width="109" height="34" rx="12" fill="#D7D9E8"/>
<rect x="81" y="259" width="77" height="6" rx="1" fill="#919DC3"/>
<rect x="80" y="318" width="71" height="7" rx="1" fill="#919DC3"/>
<path d="M78.568 185.641L78.0447 194.183L86.7971 185.13L78.568 185.641Z" fill="#D7D9E8"/>
<rect x="66" y="140" width="152" height="47" rx="12" fill="#D7D9E8"/>
<rect x="80" y="152" width="124" height="7" rx="1" fill="#919DC3"/>
<rect x="80" y="163" width="71" height="7" rx="1" fill="#919DC3"/>
<path d="M180 66H149V60.4186C151.818 57.0698 158.629 55.3023 161.682 54.8372V51.3488C155.341 45.7674 158.159 36 165.205 36C172.25 36 172.955 47.8605 170.136 49.2558C167.882 50.3721 168.258 53.4419 168.727 54.8372C173.236 54.2791 178.121 58.3256 180 60.4186V66Z" fill="#243F86"/>
<rect width="50.4031" height="81.7395" rx="25.2015" transform="matrix(-0.685091 0.728457 0.728457 0.685091 24.7253 244.344)" fill="#8F5C27"/>
<circle cx="17" cy="17" r="17" transform="matrix(-1 0 0 1 63 282)" fill="#C68447"/>
<rect width="50.4031" height="81.7395" rx="25.2015" transform="matrix(-0.685091 0.728457 0.728457 0.685091 24.5307 178.094)" fill="#8F5C27"/>
<ellipse cx="17" cy="17.5" rx="17" ry="17.5" transform="matrix(-1 0 0 1 63 215)" fill="#C68447"/>
<path d="M292.75 196L292 128.195C296.2 127.088 299.75 130.963 301 133.038V192.541C298 192.541 294.25 194.847 292.75 196Z" fill="#374D62"/>
<path d="M29 183.088V148.529C30.7455 144.659 35.0606 143.23 37 143V190C33.5091 188.894 30.2121 184.931 29 183.088Z" fill="#3B4A5F"/>
<path d="M30 123.088V88.5294C31.7455 84.6588 36.0606 83.2304 38 83V130C34.5091 128.894 31.2121 124.931 30 123.088Z" fill="#3B4A5F"/>
<path d="M161.5 697.5L194.5 680L355.5 585.5C377.5 609.333 434.9 652.1 488.5 632.5C542.1 612.9 636.167 617.667 676.5 622.5V872C645.667 875.667 546.6 879.6 397 866C247.4 852.4 177.667 748 161.5 697.5Z" fill="white"/>
</svg>
            </div>
          </div>
          <div className='screenshotCards'>
            <div className='card'>
              <div className='cardImage'>
                this is an image
              </div>
              <div className='cardDescription'>
                Chat Instantly with Anyone
              </div>
            </div>
            <div className='card'>
              <div className='cardImage'>
                this is an image
              </div>
              <div className='cardDescription'>
                Find where you fit in
              </div>
            </div>
            <div className='card'>
              <div className='cardImage'>
                this is an image
              </div>
              <div className='cardDescription'>
                Network like never before
              </div>
            </div>
            <div className='card'>
              <div className='cardImage'>
                this is an image
              </div>
              <div className='cardDescription'>
                Network like never before
              </div>
            </div>
          </div>
          <div className='info2'>
          {/* <div className='infoSectionLine'></div> */}
            <div id='info2Meta' className='info2Meta'>
              <h3>Create communities with Chat App, video calls, play games and more with our platform. Chat app combines work and play all in one place!</h3>
            </div>
          </div>
        </section>
        <section ref={ref} className='contactProjects'>
          <div className='myContacts'>
            <ul className={inView && !handleContacts ? 'animateContacts' : 'animateContactsStay'}>
              <li>LinkedIn <i class="fa-brands fa-linkedin fa-2xl"></i></li>
              <li>GitHub <i class="fa-brands fa-github fa-2xl"></i></li>
              <li>Resume <i class="fa-regular fa-file fa-2xl"></i></li>
            </ul>
          </div>
          <div className='otherProjects'>
            <ul>
              <div className='project1'>
                
              </div>
              <div className='project2'>
                
              </div>
              <div className='project3'>
                
              </div>
            </ul>
          </div>
        {/* <div id='beatingHeart' className='beatingHeart'>
            <svg id='animatedHeart' className='animatedHeart' width="268" height="119" viewBox="0 0 718 669" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 266V132H90V88H135V44H268V88H313V132H402V88H447V44H582V88H627V132H673V310H628V403H583V447H538V491H493V535H448V579H403V623H313V578H269V533H225V488H181V443H137V398V311H89V266H45Z" fill="#ED2124"/>
<rect x="313" y="623" width="90" height="46" fill="black"/>
<rect x="269" y="578" width="44" height="45" fill="black"/>
<rect x="314" y="578" width="44" height="45" fill="#5F0B0B"/>
<rect x="270" y="533" width="44" height="45" fill="#5F0B0B"/>
<rect x="226" y="490" width="44" height="45" fill="#5F0B0B"/>
<rect x="181" y="443" width="44" height="45" fill="#5F0B0B"/>
<rect x="137" y="398" width="44" height="45" fill="#5F0B0B"/>
<rect x="93" y="354" width="44" height="45" fill="#5F0B0B"/>
<rect x="45" y="266" width="44" height="45" fill="#5F0B0B"/>
<rect x="93" y="311" width="44" height="45" fill="#B44443"/>
<rect x="182" y="398" width="44" height="45" fill="#B44443"/>
<rect x="225" y="443" width="44" height="45" fill="#B44443"/>
<rect x="269" y="488" width="44" height="45" fill="#B44443"/>
<rect x="314" y="533" width="44" height="45" fill="#B44443"/>
<rect x="181" y="488" width="44" height="45" fill="black"/>
<rect x="93" y="398" width="44" height="45" fill="black"/>
<rect x="45" y="311" width="48" height="87" fill="black"/>
<rect x="137" y="443" width="44" height="45" fill="black"/>
<rect x="225" y="533" width="44" height="45" fill="black"/>
<rect x="448" y="579" width="44" height="45" transform="rotate(90 448 579)" fill="black"/>
<rect x="538" y="491" width="44" height="45" transform="rotate(90 538 491)" fill="black"/>
<rect x="628" y="403" width="44" height="45" transform="rotate(90 628 403)" fill="black"/>
<rect x="672" y="88" width="44" height="45" transform="rotate(90 672 88)" fill="black"/>
<rect x="627" y="44" width="44" height="45" transform="rotate(90 627 44)" fill="black"/>
<rect x="447" y="44" width="44" height="45" transform="rotate(90 447 44)" fill="black"/>
<rect x="313" y="44" width="44" height="45" transform="rotate(90 313 44)" fill="black"/>
<rect x="135" y="44" width="44" height="45" transform="rotate(90 135 44)" fill="black"/>
<rect x="90" y="88" width="44" height="45" transform="rotate(90 90 88)" fill="black"/>
<rect x="45" y="132" width="179" height="45" transform="rotate(90 45 132)" fill="black"/>
<rect x="268" width="44" height="133" transform="rotate(90 268 0)" fill="black"/>
<rect x="402" y="88" width="44" height="89" transform="rotate(90 402 88)" fill="black"/>
<rect x="582" width="44" height="135" transform="rotate(90 582 0)" fill="black"/>
<rect x="673" y="310" width="93" height="45" transform="rotate(90 673 310)" fill="black"/>
<rect x="627" y="176" width="93" height="46" transform="rotate(90 627 176)" fill="white"/>
<rect x="581" y="132" width="46" height="46" transform="rotate(90 581 132)" fill="white"/>
<rect x="535" y="87" width="46" height="46" transform="rotate(90 535 87)" fill="white"/>
<rect x="489" y="87" width="46" height="42" transform="rotate(90 489 87)" fill="#F38284"/>
<rect x="581" y="87" width="46" height="44" transform="rotate(90 581 87)" fill="#F38284"/>
<rect x="625" y="130" width="46" height="44" transform="rotate(90 625 130)" fill="#F38284"/>
<rect x="669" y="176" width="46" height="44" transform="rotate(90 669 176)" fill="#F38284"/>
<rect x="625" y="269" width="43" height="44" transform="rotate(90 625 269)" fill="#F38284"/>
<rect x="718" y="132" width="178" height="45" transform="rotate(90 718 132)" fill="black"/>
<rect x="583" y="447" width="44" height="45" transform="rotate(90 583 447)" fill="black"/>
<rect x="493" y="535" width="44" height="45" transform="rotate(90 493 535)" fill="black"/>
</svg>
            </div> */}
        </section>
        <section className='contactSection'>
          <div>
            <img className='personOnComputer' id='personOnComputer' alt='person on Computer' src={personOnComputer}></img>
          </div>
        </section>
        <div id='messageBtn' className='messageMeContainer'>
          <div id='messageMeContainer' onClick={openMessageDialog} className={morphDialog ? 'messageMeIcon messageMeIconScale messageDialogMorph' : 'messageMeIcon messageMeIconScale'}>
            <i class="fa-regular fa-message fa-lg"></i>
            <div id='contactMeForm' className={morphDialog ? 'contactContainer showContactContainer' : 'contactContainer'}>
              <div className={'contactMeForm'}>
                <div className={contactFlip ? 'flipper contactFormFlip' : 'flipper notContactFormFlip'}>
                    <form action={submitContactForm} className='contactForm'>
                      <div className='contactMeHeader'>Contact Me Here!</div>
                      <input min={1} required className='contactFormName' type='text' name='name' placeholder='Name' />
                      <input min={1} required className={`${contactEmailError ? 'contactFormEmailError' : 'contactFormEmail'}`} type='text' name='email' placeholder={`${contactEmailError ? 'Please Enter a Valid Email!' : 'Email'}`}/>
                      <textarea minLength={1} required className='contactFormBody' type='text' name='body' placeholder='Hey There!' />
                      <button type='submit' 
                      onClick={flipContactForm}
                      id='submitContactForm' 
                      className='contactFormButton'>Send!</button>
                    </form>
                  </div>
                  <div className={contactFlip ? 'contactBack checkShow' : 'contactBack'}>
                      <svg className='contactEmailSent' width="166" height="154" viewBox="0 0 166 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="77" cy="77" r="74" stroke="#107C10" stroke-width="6"/>
                      <path d="M39 81L70.6938 104.353C74.0561 106.831 78.8214 105.845 81.0476 102.311C94.971 80.2087 125.019 40.187 161 15" stroke="#107C10" stroke-width="15"/>
                      </svg>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={closeMessageMe} className={morphDialog ? 'messageMeBackdrop messageMeBackdropShow' : 'messageMeBackdrop'}></div>
    </div>
  );
}

export default LandingPage;