import React from 'react'
import MainHome from './Page/MainHome'
import About from './Page/About'
import Education from './Page/Education'
import Project from './Page/Project'
import Skills from './Page/Skills'
import Contact from './Page/Contact'
import Nav from './Componant/Nav'


import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'




export default function App() {
  return (
    <Router>
       <Nav/>
      <div  className="container p-4 mx-auto" >
      <Routes>
        
        <Route path="/" 
        element={<MainHome />} />


        <Route path="/About" 
        element={<About />} />

       <Route path="/Education" 
        element={<Education />} />

       <Route path="/Project" 
        element={<Project />} />

       <Route path="/Skills" 
        element={<Skills />} />

       <Route path="/Contact" 
        element={<Contact/>} />




      </Routes>


      </div>
          
    </Router>
  )
}