import { useState } from 'react'
import './App.scss'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Skills from './Skills/Skills'
import { Route,Routes } from 'react-router-dom';

import Contact from './Contact/Contact'
import Project from './Project/Project'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ 
        
        <>
        <Navbar></Navbar>
        
    <div className="container">
      <Header></Header>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
        
        </>

    

      }>
      </Route>
    </Routes>
    
    
    </>
  )
}

export default App
