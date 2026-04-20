import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { div } from 'framer-motion/client'

export default function HomeLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
