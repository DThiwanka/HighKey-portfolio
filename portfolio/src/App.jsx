import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Footer from './components/footer/Footer'


function App() {
  return (

    <div className='className=" bg-secondary-light dark:bg-primary-dark transition duration-300"'>
      	 
				<Router>
					
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Work />} />
						<Route path="/skills" element={<Skills />} />
            <Route path="/CTA" element={<CTA />} />
            <Route path="/Exp" element={<Exp />} />
            <Route path="/Contact" element={<Contact />} />
					</Routes>
				
				</Router>
        <Footer />
				
			</div>


  )
}

export default App

      // {/* <Navbar />
      // <Home/>
      // <CTA />
      // <About />
      // <Work />
      // <Skills />
      // <Education />
      // <Exp />
      // <Contact />
      // <Footer/> */}
      // </div>