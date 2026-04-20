import React, { useState, useEffect } from 'react'
// import { Link } from "react-scroll";
import Logo from '../assets/orHealthLogo.png'
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { path } from 'framer-motion/client';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuList = [
    { name: 'Home', id: '/', path: '/' },
    { name: 'About Us', id: 'about', path: '/about' },
    { name: 'Services', id: 'services', path: '/services' },
    { name: 'Testimony', id: 'testimony', path: '/testimony' },
    { name: 'Contact', id: 'contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full sticky top-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-[#666d5b]/95 backdrop-blur-md shadow-lg'
        : 'bg-[#666d5b]/50 backdrop-blur-sm'
      }`}
    >
      <div className='px-4 md:px-10 lg:px-16'>

        {/* NAV HEIGHT FIXED */}
        <nav className='flex items-center justify-between h-[85px]'>

          {/* Logo */}
          <div className="flex items-center relative">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-32 h-12 bg-yellow-300/40 blur-3xl rounded-full pointer-events-none">
            </div>

            <img
              src={Logo}
              alt="OryCare Logo"
              className={`
                w-auto object-contain relative z-10 transition-all duration-300
                ${scrolled ? 'h-[150px]' : 'h-[200px]'}
              `}
            />
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-6 text-white text-base font-medium mx-auto'>
            {menuList.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-90}
                activeClass="font-bold underline underline-offset-4"
                className='hover:text-[#D9CA77] cursor-pointer transition-colors duration-200'
              >
                {item.name}
              </Link>
            ))}
          </ul>

          {/* Button */}
          <div className='hidden md:flex'>
            <button className='bg-[#D9CA77] text-[#21421E] 
              font-semibold px-5 py-2 rounded-lg 
              hover:bg-yellow-400 transition'>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white text-2xl'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden py-4 border-t border-white/20'>
            <ul className='flex flex-col gap-4 text-white text-sm font-medium'>
              {menuList.map((item, index) => (
                <Link
                  key={index}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-90}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="font-bold"
                  className='hover:text-white/80 cursor-pointer block py-2'
                >
                  {item.name}
                </Link>
              ))}

              <button className='mt-2 bg-[#D9CA77] text-[#21421E] 
                font-semibold px-5 py-2 rounded-lg 
                hover:bg-yellow-400 transition'>
                Get Started
              </button>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}