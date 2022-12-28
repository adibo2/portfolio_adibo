import React from 'react'
import "./Skill.scss"
import next from "./../img/Next.png";
import react from "./../img/react.png";
import sass from "./../img/sass.png";
import javascript from "./../img/javascript.png";
import typescript from "./../img/typescript.png";
import nodejs from "./../img/nodejs.png";
import expressjs from "./../img/expressjs.png";
import mongo from "./../img/mongo.jpg";
import postgre from "./../img/postgre.svg";
import firebase from "./../img/firebase.png";
import express from "./../img/express.png";
import gsap2 from "./../img/gsap.svg";
import { useEffect,useLayoutEffect } from 'react';
import { data_front } from '../data/data';
import { data_back } from '../data/data';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const Skills = (props) => {
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
        gsap.timeline({ scrollTrigger: {
          trigger: ".skills",
          start: "0% 60%",
          end:"top 30%",
          markers: false,
          toggleActions: "play none none none", 
        }})
        // .to(".skills h1", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration: 1}, "-=2.9")
        .to(".skills h1", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration: .5})
        .to('.skills h1', { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', y: -20, duration: .2})
        .to('.skills h1', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: .3,})
        .to('.skills-front', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, stagger: .3, opacity: 1, duration: .5})
        // ScrollTrigger.create({
        //   trigger: ".skills h1",
        //     start: "-70% center",
        //     markers: true,
        //     toggleActions:"play play play play",
        //     animation:gsap
        //     .to(".skills h1", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration: 1})
        //     .to(".skills h1", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration: 0.5})
        //     // .to('.skills h1', { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', y: -70, duration: .2, delay: .5})
        //     // .to('.skills h1', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: .3, delay: .5})



        // })
    })
    return ()=>ctx.revert();
},[])



  return (
    <div className='skills' id='skill'>
        <h2 class="section-header">Skills</h2>

      <h1 className='skills-fronth1'>Front end</h1>
      <div className='skills-front'>
        {data_front.map((front)=>(

        <div className="skills-front-comp" style={{boxShadow:front.style}} key={front.id}>
          <img src={front.img} ></img>
          <h3>{front.title}</h3>
        </div>

        ))}
       
      </div>
      <h1 className='skills-back'>back end</h1>
      <div className='skills-front'>
        {data_back.map((back)=>(

        <div className='skills-front-comp' style={{boxShadow:back.style}} key={back.id}>
          <img src={back.img}></img>
          <h3 >{back.title}</h3>
        </div>
        ))}

       
       
      </div>

    </div>
  )
}

export default Skills