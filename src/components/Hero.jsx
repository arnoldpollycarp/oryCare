import React from 'react'
import HeroImg from '../assets/HeroImG.png'
import HeroAnime from '../assets/Orycare.png'

export default function Hero() {
  return (
    <div className='min-h-screen flex items-center' id='home'>
      <div className='px-6 md:px-16 py-2 md:py-2 w-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className='flex flex-col items-start justify-center order-2 md:order-1 space-y-6'>
            
            {/* Logo Image */}
            <img 
              src={HeroImg} 
              alt="OryCare Hero" 
              className="h-16 w-auto md:h-20 lg:h-36" 
            />
            
            {/* Motto with accent line */}
            <div className='relative pl-6'>
              <div className='absolute left-0 top-0 bottom-0 w-1 bg-[#666d5b] rounded-full'></div>
              <p className='text-lg md:text-xl text-[#666d5b]/80 font-medium'>
                Recovery. Resilience. Renewal
              </p>
            </div>
            
            {/* Tagline */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#666d5b] leading-tight'>
              My Mind
              <br />
              <span className='relative'>
                My Life
                <span className='absolute -bottom-2 left-0 w-24 h-1 bg-[#666d5b]/30 rounded-full'></span>
              </span>
            </h1>
            
            {/* Description */}
            <p className='text-gray-600 text-base md:text-lg max-w-md leading-relaxed'>
              Professional mental health support and counseling services 
              designed to help you thrive and live your best life.
            </p>
            
            {/* Stats / Trust indicators */}
            <div className='flex gap-8 pt-4'>
              <div>
                <p className='text-2xl font-bold text-[#666d5b]'>500+</p>
                <p className='text-sm text-gray-500'>Clients Helped</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-[#666d5b]'>15+</p>
                <p className='text-sm text-gray-500'>Years Experience</p>
              </div>
              <div>
                <p className='text-2xl font-bold text-[#666d5b]'>100%</p>
                <p className='text-sm text-gray-500'>Confidential</p>
              </div>
            </div>
            
            {/* Button */}
            <div className='mt-6'>
              <button className='
                bg-[#666d5b] 
                text-white 
                px-8 
                md:px-10 
                py-3.5 
                md:py-4 
                rounded-md 
                font-semibold
                shadow-md 
                hover:shadow-xl 
                hover:-translate-y-0.5 
                hover:bg-[#4a503c] 
                active:shadow-sm 
                active:translate-y-0 
                transition-all 
                duration-200 
                ease-in-out
                text-base
                md:text-lg
                flex
                items-center
                gap-2
              '>
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Hero Animation Image */}
          <div className='flex items-center justify-center order-1 md:order-2 '>
            <div className='relative'>
              {/* Decorative background elements */}
              <div className='absolute -z-10 inset-0 bg-[#666d5b]/5 rounded-full blur-3xl'></div>
              <img 
                src={HeroAnime} 
                alt="OryCare Animation" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}