import React from 'react'
import "./Conatct.scss"
import { Zoom } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>

<Zoom triggerOnce={true}>
  <h1 className="section-top">Contact</h1>

</Zoom>
  <button className="btno" 
          onClick={() => window.open("mailto:Adibbensmina99@gmail.com")}>
  <i class='fa fa-send'></i>
  <span className="text">
    Send Message
  </span>
  <span className="loading-animate"></span>
</button>
        
     
      
  
  
    </div>
    
    </>
  )
}

export default Contact