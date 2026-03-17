import React from 'react'
import HeroImg from '../assets/HeroBg.png'
import HeroAnime from '../assets/hero_left_img.png'
import BulbImg from '../assets/bulb_heroImg.png'
import FruitImg from "../assets/fruit.png";
import SunImg from "../assets/sun.png";
import Bulb from '../assets/bulb_logo.png'

export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col"
      id="home"
    >
      <div className='bg-cover bg-center relative' style={{ backgroundImage: `url(${HeroImg})` }}>
          {/* overlay */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative px-6 md:px-16 py-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center max-w-7xl mx-auto">

          {/* Left Column */}
          <div className="flex flex-col items-start justify-center order-2 md:order-1 space-y-6">
            <h1 className="text-6xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-[#666d5b] leading-tight">
              Bring Light 
              <br />
              <span className="relative">
                To Mental Wellness.
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#666d5b]/30 rounded-full"></span>
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
              Professional care to renew the mind and enrich life.
            </p>

            <button className="
              bg-gradient-to-r from-[#21421E] to-[#B2AC88]
              text-white pw-8 x-8 md:px-10 py-3.5 md:py-4
              rounded-md font-semibold shadow-md hover:shadow-xl
              hover:-translate-y-0.5 active:shadow-sm active:translate-y-0
              transition-all duration-200 flex items-center gap-2
            ">
              <span>Get Started</span>
            </button>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="relative flex items-center justify-center">

              {/* Glow */}
              <div className="absolute z-20 w-[300px] h-[300px] bg-yellow-200/30 rounded-full blur-xl"></div>

              {/* Bulb */}
              <img 
                src={BulbImg} 
                alt="Bulb Img"
                className="
                  absolute 
                  top-[0] 
                  left-[10%] 
                  -translate-x-1/2
                  w-[240px] md:w-[280px] lg:w-[320px]
                  opacity-60 
                  blur-[2px]
                  z-20
                  drop-shadow-[0_0_80px_rgba(255,255,180,0.9)]
                "
              />

              {/* Hero Image */}
              <img
                src={HeroAnime}
                alt="OryCare Animation"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain relative z-20"
              />

            </div>
          </div>

        </div>
      </div>
      </div>


      <div className='flex flex-row justify-center items-center gap-4 p-5'>
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
                <svg
                  viewBox="0 0 1440 120"
                  className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,60 
                      C180,120 360,0 540,60 
                      C720,120 900,0 1080,60 
                      C1260,120 1440,0 1440,0 
                      L1440,120 L0,120 Z"
                    className="fill-white"
                  />
                </svg>
            </div>

        <div className='flex items-center'>
          <img src={Bulb} alt="Bulb image" className='w-44 h-44' />
          <p className='text-4xl font-semibold text-gray-700 ml-2'>Mental Health Support</p>
        </div>

        <div className='flex items-center'>
          <img src={FruitImg} alt="Fruit image" className='w-44 h-44' />
          <p className='text-4xl font-semibold text-gray-700 ml-2'>Wellness Programs</p>
        </div>
        <div className='flex items-center'>
          <img src={SunImg} alt="" className='w-44 h-44' />
          <p className='text-4xl font-semibold text-gray-700 ml-2'>Lifestyle Coaching</p>
        </div>
      </div>
    </div>
  )
}