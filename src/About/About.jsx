import React from 'react'
import "./About.scss"
import adib from "./../img/adib.webp";
import { gsap } from "gsap";
import { useEffect,useLayoutEffect } from 'react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
       gsap.from(".About__text",{x:-100,opacity:0,duration:1,ease:"back",scrollTrigger:
       {trigger:".About__text",markers:false,start:"5% 70%",transformOrigin:"center center",end:"85% 30%",
       toggleActions:"play reverse play reverse"}})

       gsap.from(".About__image",{x:100,opacity:0,duration:1,ease:"back",scrollTrigger:
       {trigger:".About__image",markers:false,start:"5% 70%",transformOrigin:"center center",end:"85% 30%",
       toggleActions:"play reverse play reverse"}})

        
    })
    return ()=>ctx.revert();
},[])



  return (
    <>
    <div className='About__text' id="about">
      <h1 className='About__text--h1'>ABOUT</h1>
      
    </div>
    <div className='About__image'>
      <div className='About__image-box'>
        <div className='About__image-box-img'>
          <img src={adib}></img>
        </div>
        <div className='About__image-box-content'>
          <h2>Adib Bensmina</h2>
          <span>Full stack Developper</span>

        </div>
      </div>

    </div>
    
    </>
  )
}

export default About