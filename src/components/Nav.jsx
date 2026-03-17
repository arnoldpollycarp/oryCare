import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import Logo from '../assets/bulb_logo.png'
import { HiMenu, HiX } from 'react-icons/hi';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuList = [
    {name:'Home', id:'home'},
    {name:'About Us', id:'about'},
    {name:'Services', id:'services'},
    {name:'Testimony', id:'testimony'},
    {name:'Contact', id:'contact'}
  ]

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full bg-gradient-to-r from-[#21421E] to-[#B2AC88] sticky top-0 z-50 
      transition-all duration-300
      ${scrolled 
        ? 'bg-[#666d5b]/95 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-[#666d5b]/50 backdrop-blur-sm py-6' 
      }
    `}>
      <div className='px-6 md:px-16'>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <div className="flex items-center relative">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-full bg-yellow-300/50 blur-3xl pointer-events-none"></div>

            <img 
              src={Logo} 
              alt="OryCare Logo" 
              className="rounded-full h-16 w-16 relative z-10" 
            />

            <h1 className={`text-2xl font-semibold font-Merriweather ml-4 ${scrolled ? 'text-white' : 'text-[#666d5b]'}`}>
              <span className='text-white'>ORY</span>
              <span className='text-[#D9CA77]'>Health</span>
            </h1>
          </div>

          {/* Desktop menu centered */}
          <ul className='hidden md:flex items-center gap-6 text-white font-medium mx-auto'>
            {menuList.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="font-bold underline underline-offset-4"
                className='hover:text-[#666d5b] cursor-pointer transition-colors duration-200'
              >
                {item.name}
              </Link> 
            ))}
          </ul>

          {/* Get Started button */}
          <div className='hidden md:flex'>
            <button className='bg-[#D9CA77] text-[#21421E] font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200'>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className='md:hidden text-white text-2xl'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 py-4 border-t border-white/20'>
            <ul className='flex flex-col gap-4 text-white font-medium'>
              {menuList.map((item, index) => (
                <Link
                  key={index}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="font-bold"
                  className='hover:text-white/80 cursor-pointer transition-colors duration-200 block py-2'
                >
                  {item.name}
                </Link> 
              ))}
              {/* Mobile Get Started button */}
              <button className='mt-2 bg-[#D9CA77] text-[#21421E] font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200'>
                Get Started
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}