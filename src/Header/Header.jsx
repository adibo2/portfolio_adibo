import React, { useRef } from 'react'
import "./../UI/scroll.scss"
import "./Header.scss"
import dev from "./../img/web-developer-questions.jpg"
import { gsap } from "gsap";
import "./../UI/animation.scss"
import { useEffect,useLayoutEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../Navbar/Navbar';
import "./../UI/button.scss"
import headergif from "./../img/6.gif"


import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger)

const Header = () => {

  const component=useRef();
  useLayoutEffect(() => {
    const headings = gsap.utils.toArray(".second-section-titles");
    
    let ctx = gsap.context(() => {
      gsap.timeline()
      // .from(".header__text h1",{y: 150,autoAlpha: 0,ease: "Power3.out",stagger: 0.7})
      .to(".header__text h1",{'clipPath':'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
      .from(".header__text-y h2",{scale:0,opacity:0,ease: "Power3.out"})
      .from(".header__picture img",{opacity:0,x:30,ease: "elastic.out(1, 1)"})
      .to(".header__text button",{opacity:1})
      
    });
    // ScrollTrigger.create({
    //   trigger:'.',
    //   start:'30% 20%',
    //   end:800,
    //   markers:false,
    //   toggleClass:{targets:".nav__wrap",className:"nav-active"},
    

    // })  
    ScrollTrigger.create({
      trigger:'.header',
      // start:'30% 20%',
      start: "5% top",
      end: "bottom 20%",    
      scrub:4,  
      markers:false,

      // toggleActions:"play play play reverse",     
      animation:gsap.to(".header__socials",{
        scale:1.2,
    
      })

    

    })
  
       
        // toggleClass:  "header__socials-active",
   
    return () => ctx.revert(); 
  }, []);

//   useEffect(()=>{
//     const ctx=gsap.context(()=>{
//         gsap.timeline({default:{repeat:-1}})
//         .set(".demo",{autoAlpha:1,repeat:-1})
//         .from(".demo div",{y:80,stagger:3,opacity:0,repeat:-1})
//         .to(".demo div",{y:-80,opacity:0,stagger:5,repeat:-1},5)
//     })
//     return ()=>ctx.revert();
// },[])


  return (
    <>

    <div className='header' id="home" ref={component}>
      <div className='header__text'>
        <h1>Hi 👋🏼.My name is</h1>
        <h1>ADIB BENSMINA</h1>    
        <div className='header__text-y'>
          <h2 className='header__text--id'>Frontend developer</h2>
          <h2 className='header__text--id'>backend developer</h2>
          <h2 className='header__text--id'>Problem solving</h2>
          <a
           href="/assets/CV_Adib_Bensmina.pdf"
           download="CV_Adib_Bensmina.pdf"
          >


          <button 
         
          className="btnanim">Downoald CV</button>
          </a>
          </div> 

      </div>
      <div className='header__picture'>
        <img src={headergif}></img>

      </div>

      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/adib-bensmina-0a4115227/" className='ania'  target="blank">
          <div class="social-icon linkedin">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </div> 
        </a>
        <a href="https://codepen.io/joelanight" target="blank">
          <div class="social-icon codepen">
          <i class='fa fa-codepen'></i> 
          </div>
        </a>
        <a href="https://github.com/adibo2"  target="blank">
          <div class="social-icon github">
            <i class="fa fa-github-alt" aria-hidden="true"></i>
          </div>
        </a>
      </div>

      {/* Scolll */}

      <div className='header__scroll'>
    <div className='scrolldown'>
        <div className='scrolldown__whel' >
            <div className='scrolldown__whel--iner'> </div>
        </div>
        <div className='scrolldown__arrows'>
            <span className="scrolldown__arrow"></span>
            <span className="scrolldown__arrow"></span>

            <span className="scrolldown__arrow"></span>


        </div>

    </div>

      </div>


    </div>
    </>
  )
}

export default Header