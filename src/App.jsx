import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimony from './components/Testimony'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUs />
      <Services />
      <Testimony />
      <Contact />
      <Footer />
    </>
  )
}

export default App
