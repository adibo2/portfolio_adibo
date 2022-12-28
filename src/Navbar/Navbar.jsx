import React from 'react'
import "./Navbar.scss"
import { gsap } from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Link as LinkS } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useEffect(()=>{
    const ctx=gsap.context(()=>{
        gsap.timeline()
        .from(".nav__wrap-left li",{y:-160,stagger:0.3,opacity:0,ease:"back"})
        .from(".nav__wrap-right",{x:10,ease:"back",opacity:0})


        // const showAnim = gsap.from('.nav__wrap', { 
        //   yPercent: -100,
        //   paused: true,
        //   duration: 0.2,
        // }).progress(1);

        // const showAnim = gsap.from('.nav__wrap', { 
        //   yPercent: -100,
        //   paused: true,
        //   duration: 0.2
        // }).progress(1);
        

        ScrollTrigger.create({
          trigger:'.header',
          // start:'30% 20%',
          start: "20% top",
          end: "max",      
          markers:false,
          toggleActions:"play play play reverse",
          // onUpdate: (self) => {
          //   self.direction === -1 ? showAnim.play() : showAnim.reverse()
          // },
          // onLeave: () => this.btn.classList.remove('active'),
          // toggleClass:{targets:".nav__wrap",className:"nav-active"},
          animation:gsap.to(".nav__wrap",{
            css:{className:"nav-active",},
        
          })
 
        

        })
        
    })
    return ()=>ctx.revert();
},[])
  return (
    <nav className='nav'>
    <div className='nav__wrap'>

        <ul className='nav__wrap-left'>
          <li><LinkS data-text="Home" to="home" smooth={true} spy={true} offset={-150} duration={1500} ><span>Home</span></LinkS></li>
          {/* <li><LinkS data-text="About"  to="about" smooth={true} spy={true} offset={-150} duration={1500}><span>About</span></LinkS></li> */}
          <li><LinkS data-text="Skills" to="skill" smooth={true} spy={true} offset={-150} duration={1500}  ><span>Skills</span></LinkS></li>
          <li><LinkS data-text="Projects" to="project"  smooth={true} spy={true} offset={-150} duration={1500} ><span>Projects</span></LinkS></li>
        </ul>
      <LinkS to='contact' className='nav__wrap-right'  smooth={true} spy={true} offset={-150} duration={1500}>
        <button className='nav__wrap-right-btn'>
          <span>
          contact

          </span>
        </button>


      </LinkS>
    </div>
    </nav>
  )
}

export default Navbar