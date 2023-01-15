import React from "react";
import "./Skill.scss";

import { useEffect, useLayoutEffect } from "react";
import { data_front } from "../data/data";
import { data_back } from "../data/data";
import {data_tool} from "../data/data";
import gif5 from "./../img/5.gif"
import { Zoom } from "react-awesome-reveal";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = (props) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".skills",
            start: "0% 60%",
            end: "top 30%",
            markers: false,
            toggleActions: "play none none none",
          },
        })
        // .to(".skills h1", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration: 1}, "-=2.9")
        .from(".p__skills",{
          opacity: 0,
          duration: .2,

        })
        .to(".skills h1", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          duration: 0.2,
        })
        .to(".skills h1", {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          y: -20,
          duration: 0.2,
        })
        .to(".skills h1", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.3,
        })
        .to(".skills-front", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          stagger: 0.3,
          opacity: 1,
          duration: 0.2,
        })
        .from(".skills_gif",{
          opacity: 0,
          y:100,
          duration: 0.2,
        })
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
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="skills" id="skill">

      <div className="what_ido">
        <Zoom triggerOnce={true}>

        <h2 className="section-header1">What I do</h2>
        </Zoom>
        <p className="p__skills">Web Developer who wants to explore every tech stack</p>

        <h1 className="skills-fronth1">Front end</h1>
        <div className="skills-front">
          {data_front.map((front) => (
            <div
              className="skills-front-comp"
              style={{ boxShadow: front.style }}
              key={front.id}
            >
              <img src={front.img}></img>
              <h3>{front.title}</h3>
            </div>
          ))}
        </div>
        <h1 className="skills-back">back end</h1>
        <div className="skills-front">
          {data_back.map((back) => (
            <div
              className="skills-front-comp"
              style={{ boxShadow: back.style }}
              key={back.id}
            >
              <img src={back.img}></img>
              <h3>{back.title}</h3>
            </div>
          ))}
        </div>
        <h1 className="skills-back">Tools</h1>
        <div className="skills-front">
          {data_tool.map((tool) => (
            <div
              className="skills-front-comp"
              style={{ boxShadow: tool.style }}
              key={tool.id}
            >
              <img src={tool.img}></img>
              <h3>{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="gifskill" >
        <img src={gif5} className="skills_gif"></img>

      </div>


    </div>
  );
};

export default Skills;
