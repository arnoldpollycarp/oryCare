import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Testimony from './pages/Testimony'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="testimony" element={<Testimony />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
