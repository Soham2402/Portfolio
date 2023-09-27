import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Portfolio'
import Contact from './components/Contact'






function App() {

  return (
    <div className=' bg-[#0a192f]'>
      <Navbar/>
      <Home />   
      <Timeline />
      <About />   
      <Skills />
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App
