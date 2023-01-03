import React from "react";
import "./Project.scss";
import { useEffect } from "react";
import p1 from "./../img/projet2.png";
import { data_projet } from "../data/data";
import { data_rick } from "../data/data";
// import Zoom from "react-reveal/Zoom";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Project = () => {
  // useEffect(()=>{
  //   document.addEventListener('mousemove',(e)=>{
  //     const mousex = e.clientX
  //     const mousey = e.clientY;
  //     const anchor=document.getElementById('anchor');
  //     const rekt=anchor.getBoundingClientRect();
  //     const anchorX=rekt.left+ rekt.width / 2;
  //     const anchorY=rekt.top + rekt.height / 2;
  //     const angleDeg=angle(mousex,mousey,anchorX,anchorY);
  //     console.log(angleDeg);
  //     const eyes=document.querySelectorAll('.eyes')
  //     eyes.forEach(eye=>{
  //       eye.style.transform=`rotate(${90 + angleDeg}deg)`
  //     })

  //   })
  // })
  // const angle=(cx,cy,ex,ey)=>{
  //   const dy=ey-cy;
  //   const dx=ex-cx;
  //   const rad=Math.atan2(dy,dx);
  //   const deg=rad * 180 /Math.PI;
  //   return deg;
  // }
  return (
    <>
      <div className="section-header">
        <Zoom triggerOnce={true}>
          <h2 className="section-header">Projects</h2>
        </Zoom>
      </div>

      <div className="project">
        {/* {data_rick.map((rick) => (
          <div
            className="card"
            key={rick.id}
            style={{ backgroundImage: `url(${rick.bgUrl})` }}
          >
            <div className="card-content">
              <div className="card-title">{rick.title}</div>
              <p className="card-p">{rick.descp}</p>
              <div className="card-flex">
                <a href="#" className="card-btn">
                  Demo
                </a>
                <a href="#" className="card-btn">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))} */}
        <Fade cascade damping={0.1}>

        {data_projet.map((projet) => (
          <div
            className="card"
            key={projet.id}
            style={{ backgroundImage: `url(${projet.bgUrl})` }}
          >
            <div className="card-content">
              <div className="card-title">{projet.title}</div>
              <p className="card-p">{projet.descp}</p>
              <div className="card-flex">
                <a href={projet.hrefdemo} className="card-btn" target="blank">
                  Demo
                </a>
                <a href={projet.href} className="card-btn" target="blank">
                  Code
                </a>
              </div>
            </div>
          </div>
          
        ))}

        </Fade>

      </div>
    </>
  );
};

export default Project;
