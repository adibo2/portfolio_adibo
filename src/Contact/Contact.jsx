import React from 'react'
import "./Conatct.scss"

const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
  
  <h1 class="section-top">Contact</h1>
  <button class="btno" 
          onClick={() => window.open("mailto:Adibbensmina99@gmail.com")}>
  <i class='fa fa-send'></i>
  <span class="text">
    Send Message
  </span>
  <span class="loading-animate"></span>
</button>
  
    </div>
    
    </>
  )
}

export default Contact