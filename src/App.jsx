import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievement from './components/Achievement'
import Contact from './components/Contact'
function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Achievement/>
      <Contact/>
    </>
  )
}

export default App
