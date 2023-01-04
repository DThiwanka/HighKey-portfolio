import React from 'react'
import CTA from './components/CTA/CTA'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Exp from './components/Experience/Exp'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <CTA />
      <About />
      <Work />
      <Skills />
      <Education />
      <Exp />
      <Contact />
    </div>
  )
}

export default App
